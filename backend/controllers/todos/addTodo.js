const Todo = require("../../models/Todo");

const addTodo = async (req, res) => {
  const { _id } = req.user;
  const result = await Todo.create({ ...req.body, owner: _id });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: result,
    },
  });
};

module.exports = addTodo;
