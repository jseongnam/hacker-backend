const User = require('../models/daoReview');

class reviewService {
  async post(req,res,next){
    try{
      const {title, content} = req.body;
      const username = req.params.username;
      await User.postReview(username, title, content);
      res.status(200).json({message : "리뷰가 저장되었습니다."});
    }catch(error){
      next(error);
    }
  }
}

module.exports = new reviewService();