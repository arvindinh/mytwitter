const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const isLoggedIn = (req, res, next) => {
  next();
};

//put routes
router.put('/bio', isLoggedIn, userController.updateBio);
router.put('/profileimage', isLoggedIn, userController.updateProfileImage);
router.put('/bgimage', isLoggedIn, userController.updateBGImage);
router.put('/password', isLoggedIn, userController.updatePassword);
router.put('/name', isLoggedIn, userController.updateName);
router.put('/follow', isLoggedIn, userController.addFollow);

module.exports = router;