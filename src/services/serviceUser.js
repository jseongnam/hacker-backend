const User = require('../models/daoUser');

class UserService {
  async signup(req, res) {
    try {
      const { username, email, password } = req.body;

      await User.signup(username,email,password);

      res.status(201).json({ message: '회원가입이 완료되었습니다.' });
    } catch (error) {
      res.status(error.statusCode).json({ error: error.message });
    }
  }
  async login(req,res) {
    try{
      const {username, password} = req.body;
      
      const token = await User.login(username, password);
      res.json({ token });
    }catch(error){
      res.status(error.statusCode).json({ error : error.message});
    }
  }
  async info(req,res,next){
    try{
      const username = req.params.username;
      const userInfo = await User.userInfo(username);
      console.log(userInfo);
      res.status(200).json({
    nickname : userInfo[0].nickname,
    email : userInfo[0].email, 
    number_of_posts : userInfo[0].number_of_posts,
    number_of_records : userInfo[0].number_of_records,
    number_of_visit : userInfo[0].number_of_visit,
    number_of_comment : userInfo[0].number_of_comment
  });
    }catch(error){
      next(error);
    }
  }
}

module.exports = new UserService();