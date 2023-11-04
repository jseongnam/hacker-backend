const express = require('express');
const router = express.Router();
const reviewService = require('../services/serviceReview');
const verifyToken = require('../services/auth-handler')

router.post("/post/:username",verifyToken,reviewService.post);
router.get("/get/:username", verifyToken,reviewService.get);
router.post("/postComment/:username",verifyToken,reviewService.postComment);
module.exports = router;