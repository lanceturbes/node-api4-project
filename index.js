// Use environment varibles from ".env"
require("dotenv").config();

// Import dependencies
const path = require("path");
const express = require("express");

// Declare server
const server = express();

// Use middleware
server.use(express.json());

// Handle requests
server.get("/api", (req, res) => {
  res.status(200).json({
    message: `
    You've reached the API! 
    There's no real endpoints right now, though.
    Check again some other day, and I might add a few!
  `,
  });
});
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

// Listen for requests
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
