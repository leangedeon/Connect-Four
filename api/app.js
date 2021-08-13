var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

const mongo_uri_connect = 'mongodb+srv://freelance:freelance2021@clusterfreelance.anog7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const indexRouter = require('./routes/index');

var app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

mongoose.connect(mongo_uri_connect, 
  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }
);

mongoose.connection
  .on('connected', () => console.log('mongo connected'))
  .on('error', () => {
      throw new Error("unable to connect to database: ", mongo_uri_connect);
  });


module.exports = app;
