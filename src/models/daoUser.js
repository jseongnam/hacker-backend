const dataSource = require("./dataSource");
const jwt = require("jsonwebtoken");

const signup = async(userName,email, password) => {
  if(!userName || !password || !email){
    const error = new Error("UserName, password, email is required");
    error.statusCode = 400;
    throw error;
  }
  if(password.length < 8){
    const error = new Error("패스워드는 8자 이상이여야 합니다.");
    error.statusCode = 400;
    throw error;
  }
  try{
    const checkQuery = await dataSource.query(
      `
      SELECT id FROM users
      WHERE user_name = ?`,
      [userName]
    );
    if(checkQuery.length > 0){
      const error = new Error("이미 존재하는 이름입니다.");
      error.statusCode = 400;
      throw error;
    }
    const signUpQuery = await dataSource.query(
      `
      INSERT INTO 
      users (
        user_name,
        email,
        password
      ) VALUES (?,?,?)`,
      [userName,email,password]
    );

    return signUpQuery;
  } catch (error){
    console.error("INVALID_INPUT_DATA", error);
    error.statusCode = 400;
    throw error;
  }

}

const login = async(username, password) => {
  if(!username||!password){
    const error = new Error("UserName, password is required");
    error.statusCode = 400;
    throw error;
  }
  try{
    const loginQuery = await dataSource.query(
      `
      SELECT id FROM users
      WHERE user_name = ? AND password = ?`,
      [username,password]
    );
    if (loginQuery.length > 0) {
      // const userId = loginQuery[0].id;
      const token = jwt.sign({username}, process.env.SECRET_KEY,{
        expiresIn : '1d'
      })
      return token;
    } else {
      const error = new Error("Invalid username or password");
      error.statusCode = 400;
      throw error;
    }
  } catch (error){
    console.error("INVALID_INPUT_DATA", error);
    error.statusCode = 400;
    throw error;
  }
}
const userInfo = async(username) => {
  try{
    console.log(username);
    const userInfoQuery = await dataSource.query(
      `
      SELECT nickname,
      email,
      number_of_posts,
      number_of_records,
      number_of_visit,
      number_of_comment FROM users
      WHERE user_name = '${username}'
      `
    );
    return userInfoQuery;
  }catch(error){
    console.error("해당 user가 존재하지 않습니다", error);
    error.statusCode = 400;
    throw error;
  }
}
const userinfoPost = async(username) => {
  try{
    const userIdQuery = await dataSource.query(
      `
      select id from users
      where user_name = '${username}';
      `
      );
    console.log(userIdQuery);
    const user_id = userIdQuery[0].id;
    const userinfoPostQuery = await dataSource.query(
      `
      select * from posts
      where user_id = ?
      `,[user_id]
    );
    return userinfoPostQuery;
  }catch(error){
    console.error("해당 user가 존재하지 않습니다", error);
    error.statusCode = 400;
    throw error;
  }
}
module.exports = {
  signup, login, userInfo,userinfoPost
};