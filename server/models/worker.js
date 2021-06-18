const mongoose = require('mongoose');

const workerSchema = mongoose.Schema({
    workerName: { type: String, require: true },
    password: { type: String, require: true },
    mail: { type: String, require: true },
    status: { type: String, default:"muasak"} ,
    id:{
        type:String
    },
    admin: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin***' }
})
module.exports = mongoose.model('Worker***', workerSchema);