// Import the Express library
const express = require("express");

// Create an Express application instance
// This 'app' will handle all incoming HTTP requests
const app = express();

// Define the port number where the server will run
const PORT = 3000;

// Start the HTTP server and make it listen on the given port
// This must be called for the server to actually run
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// ---------------- ROUTES ----------------

// Root route
// Handles GET requests to http://localhost:3000/
app.get("/", (req, res) => {
  // Send a simple text response to the client
  res.send("Hello World");
});

// User route with query parameter
// Example URL: http://localhost:3000/user?name=Sofi
app.get("/user", (req, res) => {
  // req.query contains all query parameters from the URL
  // req.query.name will be "Sofi"
  res.send(req.query.name);
});

// Search route with query parameter
// Example URL: http://localhost:3000/search?q=Node.js
app.get("/search", (req, res) => {
  // Access the 'q' query parameter and send it back in the response
  res.send(`You searched for: ${req.query.q}`);
});

// API route that returns JSON
// Example URL: http://localhost:3000/api
app.get("/api", (req, res) => {
  // Set HTTP status code to 200 (OK)
  // Send a JSON response (commonly used in APIs)
  res.status(200).json({
    success: true,
    message: "API working"
  });
});
