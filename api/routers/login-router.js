const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.status(200).json({ message: `Welcome, ${username}!` });
  } else {
    res
      .status(400)
      .json({ message: "Request missing username and/or password" });
  }
});

module.exports = router;
