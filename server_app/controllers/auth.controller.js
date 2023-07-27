const Models = require('../databaseConfig/db/models');
const User = Models.User;

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const saltRounds = process.env.SALT_ROUNDS;
const secretKey = process.env.SECRET_KEY;

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        statusCode: 400,
        message: "Username, Email, Password Can't Empty!"
      });
    }

    const encryptPassword = await bcrypt.hash(password, +saltRounds);

    const newUser = await User.create({
      username, email, password: encryptPassword
    });

    return res.status(201).json({
      statusCode: 201,
      message: 'Success Register User',
      data: newUser
    });

  } catch (error) {
    console.info('Error in registerUser Controller!');
    return res.status(400).json({
      statusCode: 400,
      message: `Error: ${error.message}`
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      where: {
        username: username
      }
    });

    if (!user) {
      return res.status(400).json({
        statusCode: 400,
        message: 'Username Not Found!'
      });
    }

    // console.info(user, 'user found');

    const checkValidPassword = await bcrypt.compare(password, user.password);

    if (!checkValidPassword) {
      return res.status(400).json({
        statusCode: 400,
        message: 'Wrong Password!'
      });
    }

    // console.info(checkValidPassword, 'password benar');

    const token = jwt.sign({
      "id": user.id,
      "username": user.username,
      "email": user.email,
    }, secretKey, {
      expiresIn: '1h'
    });

    return res.status(200).json({
      statusCode: 200,
      message: 'Login Success',
      user: user,
      token: token
    });

  } catch (error) {
    console.info('Error in loginUser Controller!');
    return res.status(400).json({
      statusCode: 400,
      message: `Error: ${error.message}`
    });
  }
};

const checkUserLogin = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.user.id
      },
      attributes: {
        exclude: ['password']
      }
    });

    if (!user) {
      return res.status(404).json({
        statusCode: 404,
        message: 'User Not Found!'
      });
    }

    return res.status(200).json({
      statusCode: 200,
      message: 'User Found!',
      data: user
    });

  } catch (error) {
    console.info('Error in checkUserLogin Controller!');
    return res.status(400).json({
      statusCode: 400,
      message: `Error: ${error.message}`
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  checkUserLogin
}