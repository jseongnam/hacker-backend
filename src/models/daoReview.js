const dataSource = require("./dataSource");

const postReview = async(username,img, title, content)=>{
    try{
        console.log(username);
        const userIdQuery = await dataSource.query(
        `
        select id from users
        where user_name = '${username}';`);
        const user_id = userIdQuery[0].id;

        const postReviewQuery = await dataSource.query(
            `
            INSERT INTO posts
            (user_id,title,content,img)
            VALUES ('${user_id}','${title}','${content}','${img}');
            `
        );
        const userPostNumUpdateQuery = await dataSource.query(
            `
            UPDATE users
            SET number_of_posts = number_of_posts + 1
            WHERE id = ${user_id};
            `
        );
        
        return;
      }catch(error){
        console.error("해당 user가 존재하지 않습니다", error);
        error.statusCode = 400;
        throw error;
      }
    
}

const getReview = async(username) => {
    try{
        const userIdQuery = await dataSource.query(
            `
            select id from users
            where user_name = '${username}';`);
        const user_id = userIdQuery[0].id;
        
        const getReviewQuery = await dataSource.query(
            `
            select * from posts
            where user_id = '${user_id}'
            `
        )
        return getReviewQuery;
    }
}

module.exports = {
    postReview, getReview
};