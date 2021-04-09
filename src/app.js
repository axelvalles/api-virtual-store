const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
require('./models/associations/associations');

//initialization
const app = express();

// SETTINGS
app.set('PORT', process.env.PORT || 4400);
app.set('APPNAME', process.env.APP_NAME || 'API Staionery Store');

// MIDDLEWARES
app.use(express.json({ type: 'application/json', limit: '200kb' }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
// PUBLIC STATICS
// GLOBAL VARIABLES
// ROUTES
app.use('/products', require('./routes/product.routes'));
app.use('/categories', require('./routes/category.routes'));
app.use('/sells', require('./routes/sell.routes'));
app.use('/users', require('./routes/user.routes'));
// EXPORTING APP SERVER
// EXPORTIN APP SERVER
module.exports = app;
