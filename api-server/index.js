'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
};

const DB_URI = process.env.MONGODB_URI || 'http://localhost/';
const PORT = process.env.PORT || 8080;

mongoose.connect('http://localhost/', mongooseOptions);

require('./src/app.js').start(8080);
