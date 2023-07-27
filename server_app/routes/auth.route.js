const express = require('express');
const router = express.Router();
const { registerUser, loginUser, checkUserLogin } = require('../controllers');
const { checkJWTToken } = require('../middlewares/checkTokenJWT.middleware');

router.post('/api/v1/register', registerUser);
router.post('/api/v1/login', loginUser);
router.get('/api/v1/userLogin', [ checkJWTToken ], checkUserLogin);

module.exports = router;