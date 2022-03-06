const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./utils/config');

const postRouter = require('./controllers/posts');
const middleware = require('./utils/middleware');

const logger = require('./utils/logger');

const app = express();

logger.info('Starting mongodb application');

mongoose.connect(config.MONGODB_URI).then(() => {
  logger.info('connection established');
}).catch((error) => {
  logger.error('error connecting to database: ', error);
});

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/posts', postRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
