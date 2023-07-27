const Models = require('../databaseConfig/db/models');
const Todo = Models.Todo;
const User = Models.User;

const userTodo = async (req, res) => {
  try {
    const todos = await Todo.findAll({
      where: {
        user_id: req.user.id
      },
      order: [
        ['createdAt', 'DESC']
      ]
    });

    if (todos.length < 1) {
      return res.status(200).json({
        statusCode: 200,
        message: 'Data Todo is Empty!'
      });
    }

    return res.status(200).json({
      statusCode: 200,
      message: 'Data Todo!',
      data: todos
    });

  } catch (error) {
    console.info('Error in userTodo Controller!');
    return res.status(400).json({
      statusCode: 400,
      message: `Error: ${error.message}`
    });
  }
};

const getTodoByID = async (req, res) => {
  try {
    const { id } = req.params;
    // console.info(id, 'id yang dicari');

    const todo = await Todo.findByPk(id, {
      include: [{
        model: User,
        as: 'user'
      }]
    });

    if (!todo?.user_id || todo.user_id !== req.user.id) {
      return res.status(401).json({
        statusCode: 401,
        message: 'Unauthorized! You Dont Have Access Todo!'
      });
    }

    if (!todo) {
      return res.status(404).json({
        statusCode: 404,
        message: 'Todo Not Found!'
      });
    }

    return res.status(200).json({
      statusCode: 200,
      message: 'Data Todo Found!',
      data: todo
    });

  } catch (error) {
    console.info('Error in getTodoByID Controller!');
    return res.status(400).json({
      statusCode: 400,
      message: `Error: ${error.message}`
    });
  }
};

const insertTodo = async (req, res) => {
  try {
    const { user_id, title, body } = req.body;

    if (!title || !body) {
      return res.status(400).json({
        statusCode: 400,
        message: 'Title and Body is Required!'
      })
    }

    const newTodo = await Todo.create({
      user_id: req.user.id,
      title, 
      body
    });

    return res.status(201).json({
      statusCode: 200,
      message: 'Success Add Todo!',
      data: newTodo
    });

  } catch (error) {
    console.info('Error in insertTodo Controller!');
    return res.status(400).json({
      statusCode: 400,
      message: `Error: ${error.message}`
    });
  }
};

const editTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const { title, body } = req.body;

    const todo = await Todo.findByPk(id);

    if (!todo) {
      return res.status(404).json({
        statusCode: 404,
        message: 'Todo Not Found!'
      });
    }

    if (req.user.id !== todo.user_id) {
      return res.status(401).json({
        statusCode: 401,
        message: 'Unauthorized! You Dont Have Access Todo!'
      });
    }

    const editTodo = await todo.update({
      title: title || todo.title,
      body: body || todo.body
    });

    return res.status(200).json({
      statusCode: 200,
      message: 'Success Edit Todo!',
      data: editTodo
    });

  } catch (error) {
    console.info('Error in editTodo Controller!');
    return res.status(400).json({
      statusCode: 400,
      message: `Error: ${error.message}`
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findByPk(id);

    if (!todo) {
      return res.status(404).json({
        statusCode: 404,
        message: 'Todo Not Found!'
      });
    }

    if (req.user.id !== todo.user_id) {
      return res.status(401).json({
        statusCode: 401,
        message: 'Unauthorized! You Dont Have Access Todo!'
      });
    }

    await todo.destroy();

    return res.status(200).json({
      statusCode: 200,
      message: 'Success Delete Todo!'
    });

  } catch (error) {
    console.info('Error in deleteTodo Controller!');
    return res.status(400).json({
      statusCode: 400,
      message: `Error: ${error.message}`
    });
  }
};

module.exports = {
  userTodo,
  getTodoByID,
  insertTodo,
  editTodo,
  deleteTodo
};