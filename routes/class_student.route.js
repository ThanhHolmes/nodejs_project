const express = require('express');
const router = express.Router();
const classController = require('../controllers/class.controller');
const studentController = require('../controllers/student.controller');

router.get('/', classController.showClass);

router.get('/update/:id', classController.editClass);

router.post('/update/:id', classController.updateClass);

router.get('/delete/:id', classController.deleteClass);

router.get('/students/:id', classController.showStudentList);

router.post('/students/addstudent', studentController.addData);

module.exports = router;
