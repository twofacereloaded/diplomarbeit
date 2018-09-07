const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const Post = require("../models/post");
const User = require("../models/user");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  const user = new User({
    email: req.body.email;

  });
});

module.exports = router;
