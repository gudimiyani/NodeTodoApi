var express = require('express');
const { adminRegister, adminLogin, allAdminData, addUser, addTask, admindashbord, singleUserTask } = require('../controller/adminControl');
const loginAuth = require('../middleware/auth');
var router = express.Router();

/* GET home page. */
router.post('/register', adminRegister);
router.get('/',adminLogin);
router.get('/alladmin',loginAuth,allAdminData);
router.post('/adduser',addUser);
router.post('/addtask',addTask);
router.get('/dashboard',admindashbord);
router.get('/dashboard/:id',singleUserTask)

module.exports = router;
