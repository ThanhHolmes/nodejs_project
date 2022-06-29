const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authValidate = require('../validate/auth.validate');


//REGISTER
router.route('/user/register')
    .get((req, res) => res.render('partial/register'))
    .post(authValidate.registerUser, authController.registerUser);
    
//LOGIN
router.route('/user/login')
    .get((req, res) => res.render('partial/login'))
    .post(authValidate.loginUser, authController.loginUser);

//LOGOUT    
router.route('/user/logout')
    .get(authController.logoutUser);

module.exports = router;
    