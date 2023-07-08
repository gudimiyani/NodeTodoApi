var jwt = require('jsonwebtoken');
const userModel = require("../model/userModel");
const taskModel = require("../model/taskModel");

const userLogin = async (req,res) => {
    const data = await userModel.find({'email':req.body.email});
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

const userDashboard = async (req,res) => {
    const data = await taskModel.find({'userName':req.body.userName});
    res.status(200).json({
        status : 'success',
        data
    })
}

module.exports = {
    userLogin,
    userDashboard
}