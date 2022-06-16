const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

router.post('/student/add_newstudent', studentController.addData);

module.exports = router;
