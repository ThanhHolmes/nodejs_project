const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

router.get('/', usersController.showData);


router.get('/search', usersController.searchData);

// // Using POST methods
// router.get('/create', usersController.getCreate);

// router.post('/create', usersController.postCreate);

module.exports = router; 
