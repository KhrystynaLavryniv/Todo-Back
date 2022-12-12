const Todo = require("../../models/Todo");
const createError = require("http-errors");

const updateTodo = async (req, res) => {
  const { todoId } = req.params;
  console.log(req.body);
  try {
    const result = await Todo.findByIdAndUpdate(
      todoId,
      { todoTitle },

      {
        new: true,
      }
    );
    // console.log(req.body);
    // const result = await Todo.findById(todoId);
    // // console.log(result);
    // result.todoTitle = req.body.todoTitle;
    // // const result = await Todo.findByIdAndUpdate(todoId, req.body, {
    // //   new: true,
    // // });
    // await result.save();

    console.log(result);
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
  } catch {
    (error) => console.log(error.message);
  }
};

module.exports = updateTodo;
