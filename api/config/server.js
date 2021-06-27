
const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const routes = require('../src/routes/routes');
const app = express();
app.use(cors())
    .use(morgan('dev'))
    .use(express.json())
    .use('/api', routes);

module.exports = app;

