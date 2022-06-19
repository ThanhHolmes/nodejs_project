const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

router.post('/student/add_newstudent', studentController.addData);
router.get('/student/:id/edit-student', studentController.editStudent);
router.post('/student/:id/update-student', studentController.updateStudent);
router.get('/student/:id/delete-student', studentController.deleteStudent);

module.exports = router;
