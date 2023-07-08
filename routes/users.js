var express = require('express');
const { userLogin, userDashboard } = require('../controller/userControl');
const loginAuth = require('../middleware/auth');
var router = express.Router();

/* GET users listing. */
router.get('/', userLogin);
router.get('/dashboard',loginAuth,userDashboard);

module.exports = router;
