const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const bodyParser = require("body-parser");
const router=require('./routs/api')
dotenv.config();
const app=express();

const connectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.DB_CONNECT,connectionParams)
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log("err: "+err);
  
})


app.use('/',router);


app.listen(4200,()=>{
    console.log("listening on port 4200")
})

