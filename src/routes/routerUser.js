const express = require('express');
const router = express.Router();
const userService = require('../services/serviceUser');
const verifyToken = require('../services/auth-handler')
// 회원가입 API
router.post('/signup', userService.signup);
router.post('/login',userService.login);
router.get('/me/:username', verifyToken,userService.info);
router.get('/userinfo/post/:username', verifyToken, userService.userinfoPost);
module.exports = router;