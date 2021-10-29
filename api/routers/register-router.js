const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  const { username } = req.body;
  res.status(200).json({ username });
});

module.exports = router;
