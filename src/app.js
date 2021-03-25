const express = require('express');
const app = express();
const morgan = require('morgan');
// SETTINGS
app.set('PORT', process.env.PORT || 3000);
app.set('APPNAME', process.env.APP_NAME || 'API Staionery Store');

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// PUBLIC STATICS
// GLOBAL VARIABLES
// ROUTES
app.use('/products', require('./routes/products.route'));
// EXPORTING APP SERVER
module.exports = app;
