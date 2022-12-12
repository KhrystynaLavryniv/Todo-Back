const Todo = require("../../models/Todo");
const createError = require("http-errors");

const updateTodoDone = async (req, res) => {
  const { todoId } = req.params;

  console.log(todoId);
  const result = await Todo.findById(todoId);
  console.log(result);
  result.done = !result.done;
  // const result = await Todo.findByIdAndUpdate(todoId, req.body, {
  //   new: true,
  // });
  await result.save();
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

module.exports = updateTodoDone;
