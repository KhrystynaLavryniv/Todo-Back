const Todo = require("../../models/Todo");
const createError = require("http-errors");

const deleteTodo = async (req, res) => {
  const { todoId } = req.params;
  const result = await Todo.findByIdAndRemove(todoId);

  if (!result) {
    throw createError(404, `Todo with id=${todoId} not found`);
  }

  res.json({
    status: "success",
    code: 200,
    message: "contact deleted",
    data: {
      result: result,
    },
  });
};

module.exports = deleteTodo;
