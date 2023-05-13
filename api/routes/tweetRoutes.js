const { application } = require('express');
const express = require('express');
const { Routes } = require('react-router-dom');
const router = express.Router();
const tweetController = require('../controllers/tweetController');

router.post('/', tweetController.createTweet);
router.get('/', tweetController.getTweets);

module.exports = router;