const express = require('express');
const router = express.Router();
const classController = require('../controllers/class_student.controller');
const studentController = require('../controllers/class_student.controller');

router.get('/', classController.showClasses);

router.get('/update/:id', classController.editClass);

router.post('/update/:id', classController.updateClass);

router.get('/delete/:id', classController.deleteClass);

router.get('/students/:id', classController.showStudentList);

// router.post('/students/addstudent', studentController.addData);

module.exports = router;
