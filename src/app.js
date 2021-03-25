const express = require('express');
const app = express();
const morgan = require('morgan');
const helmet = require('helmet')

// SETTINGS
app.set('PORT', process.env.PORT || 3000);
app.set('APPNAME', process.env.APP_NAME || 'API Virtual Store');

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(helmet())

// PUBLIC STATICS
// GLOBAL VARIABLES
// ROUTES
app.use('/user', require('./routes/user.routes'))
// EXPORTIN APP SERVER
module.exports = app;
