const mongoose = require('mongoose');

const loginModel = new mongoose.Schema({
    id : { type : Number },
    name : { type : String },
    email : { type : String },
    password : { type : String }
});

const adminModel = mongoose.model('admin',loginModel);

module.exports = adminModel;