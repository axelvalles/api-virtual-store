const express = require('express');
const app = express();
const morgan = require('morgan');
// SETTINGS
app.set('PORT', process.env.PORT || 3000);
app.set('APPNAME', process.env.APP_NAME || 'API Virtual Store');

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// PUBLIC STATICS
// GLOBAL VARIABLES
// ROUTES
// EXPORTIN APP SERVER
module.exports = app;
