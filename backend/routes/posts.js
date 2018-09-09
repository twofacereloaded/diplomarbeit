const express = require("express");

const PostController = require("../controllers/posts");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();




//FIND - all posts
router.get("", PostController.getPosts );

//FIND - one post
router.get("/:id", PostController.getPost );

//CREATE - add new post to DB
router.post(
  "",
  checkAuth,
  extractFile,
  PostController.createPost
  );

//UPDATE
router.put(
  "/:id",
  checkAuth,
  extractFile,
  PostController.updatePost
  );


//DELETE
router.delete("/:id", checkAuth, PostController.deletePost);

module.exports = router;
