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
server.use(express.static(path.join(__dirname, "client/dist")));
server.use("/api/login", loginRouter);
server.use("/api/register", registerRouter);
server.use("/api/users", usersRouter);

// Handle requests
server.get("/api", (req, res) => {
  res.status(200).json({
    message: `
    You've reached the API! 
    
    Here are the available endpoints:

    | Method | URL           | Description                                                                                       |
    | ------ | ------------- | ----------------------------------------------------------------------------------------------    |
    | GET    | /api/users    | Returns an array users.                                                                           |
    | POST   | /api/register | Creates a user from { username, password } in the request body, responds with newly created user. |
    | POST   | /api/login    | Checks { username, password } in the request body, responds with a welcome message.               |

  `,
  });
});
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

// Exports
module.exports = server;
