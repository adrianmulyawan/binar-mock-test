const jwt = require('jsonwebtoken');
require('dotenv').config();

const checkJWTToken = async (req, res, next) => {
  try {
    const bearerToken = req.get('Authorization');
    // console.info(bearerToken, 'bearer token');

    const token = bearerToken.split(" ")[1];
    // console.info(token, 'tokenku');

    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    // console.info(verifyToken, '=> token kamu');

    req.user = verifyToken;

    next();

  } catch (error) {
    return res.status(401).json({
      statusCode: 401,
      message: 'Unauthorized'
    });
  }
};

module.exports = {
  checkJWTToken
};