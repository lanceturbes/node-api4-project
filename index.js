// Use environment varibles from ".env"
require("dotenv").config();

// Import dependencies
const path = require("path");
const express = require("express");

// Declare server
const app = express();

// Use middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/dist")));

// Handle requests
app.get("/api", (req, res) => {
  res.status(200).json({
    message: `
    You've reached the API! 
    There's no real endpoints right now, though.
    Check again some other day, and I might add a few!
  `,
  });
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

// Listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`
    Link to site: http://localhost:${PORT}
    Listening on port ${PORT}...
  `);
});
