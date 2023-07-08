const mongoose = require('mongoose');

const loginModel = new mongoose.Schema({
    id : {type : Number},
    name : {type : String},
    email : {type : String},
    password : {type : String},
    contact : {type : String}
})

const userModel = mongoose.model('user',loginModel);

module.exports = userModel;