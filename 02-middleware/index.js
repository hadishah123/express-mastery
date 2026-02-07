// Import Express framework
const express = require("express");

// Create an Express application
const app = express();

// Port number for the server
const PORT = 3000;

// ---------------- MIDDLEWARE ----------------

// Global middleware
// Runs for EVERY incoming request
// Logs HTTP method and URL
function globalLogger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); // Move to next middleware or route
}

// Register global middleware
app.use(globalLogger);

// ---------------- ROUTES ----------------

// Public route
// Accessible at http://localhost:3000/
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Route-specific middleware
// Runs ONLY for routes starting with /admin
function adminLogger(req, res, next) {
  console.log("Admin route accessed");
  next(); // Continue to admin route
}

// Register admin middleware
app.use("/admin", adminLogger);

// Admin route
// Accessible at http://localhost:3000/admin/settings
app.get("/admin/settings", (req, res) => {
  res.send("Admin Settings");
});

// ---------------- SERVER ----------------

// Start the server (should be at the bottom)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



// 🧠 How this code runs (quick mental model)
// If you open /admin/settings, Express runs:

// globalLogger
// ↓
// adminLogger
// ↓
// /admin/settings route

// If you open /, Express runs:

// globalLogger
// ↓
// / route