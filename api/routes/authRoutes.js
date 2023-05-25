const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


//post routes
router.post('/signIn', authController.signIn);
router.post('/signUp', authController.createUser);


module.exports = router;