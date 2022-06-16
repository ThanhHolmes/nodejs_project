const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

// router.get('/student', studentController.chooseData);
router.post('/student/add', studentController.addData);

module.exports = router;
