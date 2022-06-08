const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

router.get('/', studentController.showClasses);

router.get('/update/:id', studentController.editClass);

router.post('/update/:id', studentController.updateClass);

router.get('/delete/:id', studentController.deleteClass);

module.exports = router;
