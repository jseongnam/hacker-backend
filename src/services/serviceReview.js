const User = require('../models/daoReview');
const {google} = require('googleapis');
const fs = require('fs');

// const CLIENT_ID
// const CLIENT_SECRET
// const REDIRECT_URL
// const TOKEN_PATH 
class reviewService {
  async post(req,res,next){
    try{
      const {img, title, content} = req.body;
      const username = req.params.username;
      await User.postReview(username,img, title, content);
      res.status(200).json({message : "리뷰가 저장되었습니다."});
    }catch(error){
      next(error);
    }
  }
  async get(req,res,next){
    try{
    const username = req.username;
    const postsInfo = await User.getReview(username);
    res.status(200).json({postsInfo});
    }catch(error){
      next(error);
    }
  }
}

module.exports = new reviewService();