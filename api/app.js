const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');

const corsOptions = {
  origin: ['http://localhost:8080', 'https://e-baron.github.io'],
};

const usersRouter = require('./routes/users');
const authsRouter = require('./routes/auths');

const app = express();

// DB URI
const dbUri = 'mongodb+srv://WebProjectVinci2023:WebProjectVinci2023@shadowfortress.trlvgrx.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', cors(corsOptions), usersRouter);
app.use('/auths', cors(corsOptions), authsRouter);

module.exports = app;
