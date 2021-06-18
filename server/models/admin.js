const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({

    password: { type: String, require: true },
    mail: { type: String, require: true },
    users: [{ type: mongoose.Schema.Types.ObjectId ,ref:'Worker***'}]
})

module.exports = mongoose.model('Admin***', adminSchema);


