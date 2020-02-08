var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb+srv://userAngular:userAngular@cluster0-tkbz2.mongodb.net/angulardyma?retryWrites=true&w=majority', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  userMongoClient: true
}, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('Connexion db ok!');
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports = app;
