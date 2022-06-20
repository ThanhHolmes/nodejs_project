const express = require('express');
const router = express.Router();
const classController = require('../controllers/class.controller');
const classValidate = require('../validate/class.validate');

router.get('/classes', classController.showClass);

router.get('/classes/:id/edit', classController.editClass);

router.post('/classes/:id/update', classValidate.updateClass, classController.updateClass);

router.get('/classes/:id/delete', classController.deleteClass);

router.get('/classes/:id/students', classController.showStudentList);

module.exports = router;
