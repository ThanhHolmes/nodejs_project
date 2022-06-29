const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');
const studentValidate = require('../validate/student.validate');

// router.post('/student/add_newstudent', studentValidate.addData,  studentController.addData);
router.route('/student/add-newstudent')
    .post(studentValidate.addData, studentController.addData);

// router.get('/student/:id/edit-student', studentController.editStudent);
router.route('/student/:id/edit-student')
    .get(studentController.editStudent);

// router.post('/student/:id/update-student', studentValidate.updateStudent, studentController.updateStudent);
router.route('/student/:id/update-student')
    .post(studentValidate.updateStudent, studentController.updateStudent);

// router.get('/student/:id/delete-student', studentController.deleteStudent);
router.route('/student/:id/delete-student')
    .get(studentController.deleteStudent);

module.exports = router;
