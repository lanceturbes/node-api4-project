// Imports
const express = require("express");
const path = require("path");
const loginRouter = require("./routers/login-router");
const registerRouter = require("./routers/register-router");
const usersRouter = require("./routers/users-router");

// Declare server
const server = express();

// Use middleware
server.use(express.json());
server.use(express.static(path.join(__dirname, "../client/dist")));
server.use("/api/login", loginRouter);
server.use("/api/register", registerRouter);
server.use("/api/users", usersRouter);

// Handle requests
server.get("/api", (req, res) => {
  res.status(200).json({
    message: `You've reached the API!`,
  });
});
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

// Exports
module.exports = server;
