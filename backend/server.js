const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const connectDB = require("./config/db.js");
const cors = require("cors");

const envPath = path.resolve(__dirname, "config", ".env");
dotenv.config({ path: envPath });
const app = express();
app.use(express.json());
var corsOptions = {
  origin: "http://localhost:3000",
  // optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));
// app.use(cors());

const todosRouter = require("./routes/todosRouter");
const usersRouter = require("./routes/usersRouter");
app.use("/api/v1/todos", todosRouter);
app.use("/api/v1/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500 } = err;
  res.status(status).json({ message: err.message });
});
(() => {
  connectDB();
  app.listen(process.env.PORT, (err) => {
    if (!err) {
      console.log(`Server on PORT ${process.env.PORT}`);
    } else {
      process.exit(1);
    }
  });
})();
