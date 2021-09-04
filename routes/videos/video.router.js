const express = require('express');
const router = express.Router();
const {createVideo,getVideos,getVideosBySubjectAndChapter} = require('./video.controller');

router.post('/createVideo',createVideo);
router.get('/getVideos',getVideos);
router.get('/getVideosBySubjectAndChapter',getVideosBySubjectAndChapter);

module.exports = router;