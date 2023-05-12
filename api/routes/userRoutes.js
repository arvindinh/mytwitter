const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//post routes
router.post('/createUser', userController.createUser);

//put routes
router.put('/:id/updateBio', userController.updateBio);
router.put('/:id/updateProfileImage', userController.updateProfileImage);
router.put('/:id/updateBGImage', userController.updateBGImage);
router.put('/:id/updatePassword', userController.updatePassword);
router.put('/:id/updateName', userController.updateName);
router.put('/:id/updateFollow', userController.updateFollow);
module.exports = router;