const { User } = require("../../models/User");
const { Conflict } = require("http-errors");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    //   throw new Conflict("Email in use");
    throw new createError.Conflict("Email in use");
  }

  const newUser = await User.create({ name, email, password });
  newUser.setPassword(password);
  newUser.save();
  const payload = {
    id: newUser._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "12h" });
  await User.findByIdAndUpdate(newUser._id, {
    token,
  });

  res.status(201).json({
    data: {
      token,
      user: { name, email },
    },
  });
};

module.exports = signup;
