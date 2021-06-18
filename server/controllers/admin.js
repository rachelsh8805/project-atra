const mongoose = require('mongoose');
const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');
const Worker = require('../models/worker');



const getToken = (data) => {
    return jwt.sign(data, process.env.TOKEN_SECRET)
}
const getVerifyToken = (token) => {
    return jwt.verify(token, process.env.TOKEN_SECRET)
}

// const RegisterAdmin = (req, res) => {
//     const admin = new Admin(req.body);
//     console.log("mmm")
//     admin.save().then((result) => {
//         const token = getToken({ mail: admin.mail, password: admin.password })
//         const verifyToken = getVerifyToken(token)
//         console.log(verifyToken)
//         res.status(200).json({ message: "add admin successfully", result: result, jwt: token })
//     }).catch(error => {
//         res.status(500).json({ error: error.message });
//     })
// }

const LoginAdmin = (req, res) => {
    const { mail, password } = req.params;
    Admin.findOne({ 'mail': mail, 'password': password }).then((result) => {
        const token = getToken(result.mail)
        const verifyToken = getVerifyToken(token)
        console.log(verifyToken)
        res.status(200).json({ message: `hello ${result.mail}`, jwt: token, result: result });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    })
}

// const deleteUser = async (req, res) => {
//     try {
//         adminId = req.body.adminId;
//         userId = req.body.userId;
//         const deleteUser = await user.findByIdAndDelete(userId);
//         const deleteWeatherUser = await Weather.deleteMany({ "user": userId })
//         const result = await Admin.findByIdAndUpdate(adminId, { $pull: { 'users': userId } })
//         res.status(200).json({ message: 'success', result: result, deleteWeatherUser:deleteWeatherUser,deleteUser:deleteUser});
//     }
//     catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }
const updateEmployed= async (req,res)=>{
    console.log("update");
let employed
    try{
        employed=await Workers.findByIdAndUpdate(req.params.password,req.body);
        res.status(200).send("the worker is update");
        await employed.save()
    }
    catch(error){
        res.status(500).json({ err: err.message })
    }
}
const SetNnewEmployed= async (req,res)=>{
    let myWorker=new Worker(req.body)
    console.log(myWorker);

    try{
        await myWorker.save();
        res.status(200).json({SetNnewEmployed:myWorker});
    }
    catch(error){
        res.send("cannot save new worker: ", error.message)
    }
}


module.exports = { LoginAdmin,SetNnewEmployed,updateEmployed}