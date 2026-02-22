const express = require("express");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.json({ message: "Advanced Express Running 🚀" });
});

// Global Error Handler (MUST be last)
app.use(errorHandler);

module.exports = app;