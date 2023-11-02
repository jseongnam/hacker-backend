const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY || null;

function verifyToken(req,res,next) {
    const token = req.headers.authorization;
    console.log(req.headers.authorization);
    if(!token){
        return res.status(401).json({message : "인증 실패 : 토큰이 없습니다."});
    }

    try{
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    }catch(error){
        return res.status(401).json({message : "인증 실패 : 토큰이 유효하지 않습니다."});
    }
}

module.exports = verifyToken;