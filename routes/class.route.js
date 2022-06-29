const express = require('express');
const router = express.Router();
const classController = require('../controllers/class.controller');
const classValidate = require('../validate/class.validate');
const authController = require('../controllers/auth.controller')

// router.get('/classes', classController.showClass);
router.route('/classes')
    .get(authController.checkLoggedIn, classController.showClass);

// router.get('/classes/:id/edit', classController.editClass);
router.route('/classes/:id/edit')
    .get(authController.checkLoggedIn, classController.editClass);

// router.post('/classes/:id/update', classValidate.updateClass, classController.updateClass);
router.route('/classes/:id/update')
    .post(authController.checkLoggedIn, classValidate.updateClass, classController.updateClass);
    
// router.get('/classes/:id/delete', classController.deleteClass);
router.route('/classes/:id/delete')
    .get(authController.checkLoggedIn, classController.deleteClass);

// router.get('/classes/:id/students', classController.showStudentList);
router.route('/classes/:id/students')
    .get(authController.checkLoggedIn, classController.showStudentList);

module.exports = router;
