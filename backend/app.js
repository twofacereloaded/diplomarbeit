require("dotenv").load();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const postsRoutes = require("./routes/posts");

mongoose.connect( process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log(`Database connected`))
  .catch(err => console.log(`Database connection error: ${err.message}`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req,res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});

app.use("/api/posts", postsRoutes)

module.exports = app;
