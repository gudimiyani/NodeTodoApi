const adminModel = require("../model/adminModel");
var jwt = require('jsonwebtoken');
const userModel = require("../model/userModel");
const taskModel = require("../model/taskModel");

const adminRegister = async ( req,res ) => {
    const data1 = await adminModel.find({'email':req.body.email});
    if(data1.length == 0){
        const data = await adminModel.create(req.body);
        res.status(200).json({
            status : 'success',
            data
        })
    }
    else{
        res.status(200).json({
            status : 'your email is already declair'
        })
    }
}

const adminLogin = async (req,res) => {
    const data = await adminModel.find({'email':req.body.email});
    var token = jwt.sign({ id : req.body.id }, 'data');

    if(data.length == 1)
    {
        if(data[0].password == req.body.password)
        {
            res.status(200).json({
                status : 'success',
                data,
                token
            })
        }
        else{
            res.status(200).json({
                status : 'check your password'
            })
        }
    }
    else{
        res.status(200).json({
            status : 'check your email'
        })  
    }
}

const allAdminData = async (req,res) => {
    const data = await adminModel.find();
    res.status(200).json({
        status : 'success',
        data
    })
}

const addUser = async (req,res) => {
    const data = await  userModel.create(req.body);
    res.status(200).json({
        status : 'success',
        data
    })
}

const addTask = async (req,res) => {
    const data = await taskModel.create(req.body);
    res.status(200).json({
        status : 'success',
        data
    })
}

const admindashbord = async (req,res) => {
    const data = await taskModel.find();
    res.status(200).json({
        status : 'success',
        data
    })
}

const singleUserTask = async (req,res) => {
    const id = req.params.id;
    const data = await taskModel.find({'userId' : id});
    res.status(200).json({
        status : 'success',
        data
    })
}

module.exports = {
    adminRegister,
    adminLogin,
    allAdminData,
    addUser,
    addTask,
    admindashbord,
    singleUserTask
}