const express = require("express");

const router = express.Router();

const dummyUsers = [
  {
    id: 1,
    username: "johnsnow",
  },
  {
    id: 2,
    username: "brandybuck",
  },
  {
    id: 3,
    username: "mithrandir",
  },
];

router.get("/", (req, res) => {
  res.status(200).json(dummyUsers);
});

module.exports = router;
