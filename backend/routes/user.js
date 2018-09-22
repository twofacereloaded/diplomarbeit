const express = require("express");
const UserController = require("../controllers/user");
const router = express.Router();
const checkAuth = require("../middleware/check-auto-auth");


router.post("/signup", UserController.createUser);

router.post("/login", UserController.userLoggin);

router.get("/check", checkAuth, UserController.userCheck);

module.exports = router;
