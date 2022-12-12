const express = require("express");
const ctrlWrapper = require("../middlewares/ctrlWrapper");
const validation = require("../middlewares/validation");
const { todos: ctrl } = require("../controllers");
const TodoSchema = require("../models/Todo");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get("/", auth, ctrlWrapper(ctrl.getAllTodos));
router.get("/:todoId", ctrlWrapper(ctrl.getOneTodo));
router.post("/", auth, validation(TodoSchema), ctrlWrapper(ctrl.addTodo));
router.put(
  "/:todoId",
  auth,
  // validation(TodoSchema),
  ctrlWrapper(ctrl.updateTodo)
);
router.put("/done/:todoId", ctrlWrapper(ctrl.updateTodoDone));

router.delete("/:todoId", ctrlWrapper(ctrl.deleteTodo));

module.exports = router;
