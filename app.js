const mongoose = require('mongoose');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

mongoose.connect('mongodb://imaginamos:1234@jairox-shard-00-00-ymho5.mongodb.net:27017,jairox-shard-00-01-ymho5.mongodb.net:27017,jairox-shard-00-02-ymho5.mongodb.net:27017/imaginamos_test?ssl=true&replicaSet=JairoX-shard-0&authSource=admin&retryWrites=true');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/api', apiRouter);

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
  res.render('error');
});

module.exports = app;
