var jwt = require('jsonwebtoken');

const loginAuth = async (req,res,next) => {
    jwt.verify(req.headers.authorization, 'data', next) 
}

module.exports = loginAuth;