const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Post = require("../models/post");
const router = express.Router();

//FIND - all posts
router.get('', (req, res, next) => {
  Post.find()
    .then(documents => {
      res.status(200).json({
        message: 'Posts fetched succesfully',
        posts: documents
      });
    });
});

//FIND - one post
router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id).then((post) => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({
        message: 'Post not found!'
      });
    }
  });
});

//CREATE - add new post to DB
router.post('', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then((createdPost) => {
    console.log(createdPost);
    res
      .status(201)
      .json({
        message: "Post added successfully",
        postId: createdPost._id
      });
  });
});

//UPDATE
router.put('/:id', (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  Post.updateOne({ _id: req.params.id }, post).then((updatedPost) => {
    console.log(updatedPost);
    res
      .status(201)
      .json({
        message: "Post updated successfully"
      });
  });
});

//DELETE
router.delete("/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});

module.exports = router;