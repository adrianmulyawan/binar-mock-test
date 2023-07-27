const { registerUser, loginUser, checkUserLogin } = require('./auth.controller');
const { userTodo, getTodoByID, insertTodo, editTodo, deleteTodo } = require('./todo.controller');

module.exports = {
  registerUser,
  loginUser,
  checkUserLogin,
  userTodo,
  getTodoByID,
  insertTodo,
  editTodo,
  deleteTodo
};