const express = require('express');
const router = express.Router();
const { checkJWTToken } = require('../middlewares/checkTokenJWT.middleware');
const { userTodo, getTodoByID, insertTodo, editTodo, deleteTodo } = require('../controllers');

router.get('/api/v1/todo', [ checkJWTToken ], userTodo);
router.post('/api/v1/todo', [ checkJWTToken ], insertTodo);
router.get('/api/v1/todo/:id', [ checkJWTToken ], getTodoByID);
router.put('/api/v1/todo/edit/:id', [ checkJWTToken ], editTodo);
router.delete('/api/v1/todo/delete/:id', [ checkJWTToken ], deleteTodo);

module.exports = router;