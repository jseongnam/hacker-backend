const dataSource = require("./dataSource")

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
      const userId = loginQuery[0].id;
      return userId;
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
module.exports = {
  signup, login
};