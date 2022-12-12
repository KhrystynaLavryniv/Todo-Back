const Todo = require("../../models/Todo");

const getAllTodo = async (req, res) => {
  const { _id } = req.user;

  const todos = await Todo.find({ owner: _id });
  res.status(200);
  res.json({
    todos,
  });
};

module.exports = getAllTodo;
