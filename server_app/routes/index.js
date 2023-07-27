const express = require('express');
const router = express.Router();

const authRouter = require('./auth.route');
const todoRouter = require('./todo.route');

router.get('/api/v1/hello', (req, res) => {
  return res.status(200).json({
    statusCode: 200,
    message: 'Hello World'
  });
});
router.use(authRouter);
router.use(todoRouter);

module.exports = router;