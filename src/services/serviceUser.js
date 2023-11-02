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
      
      const userId = await User.login(username, password);
      res.status(201).json({message : userId});
    }catch(error){
      res.status(error.statusCode).json({ error : error.message});
    }
  }
}

module.exports = new UserService();