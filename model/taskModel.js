const mongoose = require('mongoose');

const loginModel = new mongoose.Schema({
    id : {type : Number},
    userName : {type : String},
    taskName : {type : String},
    userId : {type : Number}
})

const taskModel = mongoose.model('task',loginModel);

module.exports = taskModel;