const express = require("express");
const app = express();
const PORT = 3000;

// Built-in middleware
app.use(express.json());

// Routes
const userRoutes = require("./routes/users.routes");
app.use("/users", userRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("REST API is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
