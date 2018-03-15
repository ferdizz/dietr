// Import Node modules and initialize Express
const config = require('./config/main');
const express = require('express');
const logger = require('morgan');
const app = express();

// Log requests to console
app.use(logger('dev'));

// Enable CORS from client-side
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
})

// Start server
const server = app.listen(config.port);
console.log('Server up and running on port ' + config.port + '.');
