const Todo = require("../../models/Todo");
const createError = require("http-errors");

const getOneTodo = async (req, res) => {
  const { todoId } = req.params;
  const result = await Todo.findById(todoId);

  if (!result) {
    throw createError(404, `Todo with id=${todoId} not found`);
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      result: result,
    },
  });
};

module.exports = getOneTodo;
