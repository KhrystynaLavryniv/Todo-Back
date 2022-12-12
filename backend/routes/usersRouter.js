const express = require("express");
const ctrlWrapper = require("../middlewares/ctrlWrapper");
const validation = require("../middlewares/validation");
const auth = require("../middlewares/auth");
const { users: ctrl } = require("../controllers");
const { joiSignupSchema, joiLoginSchema } = require("../models/User");
const router = express.Router();

router.post("/signup", validation(joiSignupSchema), ctrlWrapper(ctrl.signup));
router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));
router.post("/logout", auth, ctrlWrapper(ctrl.logout));
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

module.exports = router;
