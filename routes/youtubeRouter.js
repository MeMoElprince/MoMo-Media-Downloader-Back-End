const express = require('express');
const router = express.Router();
const youtubeController = require('../controllers/youtubeController');

router.route('/download')
    .get(youtubeController.downloadVideo);

module.exports = router;