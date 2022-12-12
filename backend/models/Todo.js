const { Schema, model } = require("mongoose");
const Joi = require("joi");

const todoSchema = Schema(
  {
    todoTitle: {
      type: String,
      required: [true, "Mongoose. Fild title is required"],
    },
    todoOverview: {
      type: String,
      required: [true, "Mongoose. Fild overview is required"],
    },
    todoPriority: {
      type: String,
      required: [true, "Mongoose. Fild priority is required"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

// const joiTodoSchema = Joi.object({
//   todoTitle: Joi.string().required(),
//   todoOverview: Joi.string().required(),
//   todoPriority: Joi.string().required(),
//   favorite: Joi.bool(),
// });

const doneJoiSchema = Joi.object({
  done: Joi.bool().required().messages({
    "any.required": "missing field done",
  }),
});
// const Todo = model("todo", todoSchema);
// module.exports = { Todo, doneJoiSchema };

module.exports = model("todo", todoSchema);
