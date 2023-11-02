const express = require('express');
const router = express.Router();
const userService = require('../services/serviceUser');

// 회원가입 API
router.post('/signup', userService.signup);
router.post('/login',userService.login);
module.exports = router;