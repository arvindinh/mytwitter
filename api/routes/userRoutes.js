const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//post routes
router.post('/', userController.createUser);

//put routes
router.put('/:id/bio', userController.updateBio);
router.put('/:id/profileimage', userController.updateProfileImage);
router.put('/:id/bgimage', userController.updateBGImage);
router.put('/:id/password', userController.updatePassword);
router.put('/:id/name', userController.updateName);
router.put('/:id/follow', userController.addFollow);

module.exports = router;