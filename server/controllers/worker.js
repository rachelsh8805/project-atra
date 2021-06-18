const mongoose = require('mongoose');
const admin = require('../models/admin');
const jwt = require('jsonwebtoken');
const worker = require('../models/worker');



const getToken = (data) => {
    return jwt.sign(data, process.env.TOKEN_SECRET)
}
const getVerifyToken = (token) => {
    return jwt.verify(token, process.env.TOKEN_SECRET)
}
const checkPermission = (req, res) => {
    const { mail, password } = req.params;
    User.findOne({ 'mail': mail, 'password': password }).then((result) => {
        const token = getToken(result.mail)
        const verifyToken = getVerifyToken(token)
        console.log(verifyToken)
        res.status(200).json({ message: `hello ${result.mail}`, jwt: token, result: result });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    })
}

const getAllEmployed= async (req,res)=>{

    try{
        await allEmployed.find();
        res.status(200).send("success");
    }
    catch(error){
        res.status(500).send("cannot get all employed: ", error.message)
    }
    
   

}
const getEmployedById= async (req,res)=>{

    try{
        await getEmployedBID.findById(req.params.workerId);
        res.status(200).send("success");
    }
    catch(error){
        res.send("cannot get employed by id: ", error.message)
    }
    
   

}

module.exports = { checkPermission, getAllEmployed, getEmployedById }
