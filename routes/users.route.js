const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

router.get('/', usersController.showData);

router.get('/search', usersController.searchData);

router.post('/add', usersController.addData);

router.get('/update/:id', usersController.editData);

router.post('/update/:id', usersController.updateData);

router.get('/delete/:id', usersController.deleteData);

module.exports = router;
