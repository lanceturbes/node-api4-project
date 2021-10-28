// Use environment varibles from ".env"
require("dotenv").config();

// Import dependencies
// const path = require("path");
const express = require("express");

// Declare server
const server = express();

// Use middleware
server.use(express.json());

// Listen for requests
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
