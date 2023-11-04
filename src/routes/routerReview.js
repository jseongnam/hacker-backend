const express = require('express');
const router = express.Router();
const reviewService = require('../services/serviceReview');
const verifyToken = require('../services/auth-handler')

router.post("/post/:username",verifyToken,reviewService.post);
router.post("/get/:username", verifyToken,reviewService.get);
module.exports = router;