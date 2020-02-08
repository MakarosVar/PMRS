const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost:27017/dissertationDB", { useNewUrlParser: true })
  .then(() => {
    console.log('Connected!');
  })
  .catch(() => {
    console.log('Connection Failed mothafucka')
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS");
    next();
  });


module.exports = app;
