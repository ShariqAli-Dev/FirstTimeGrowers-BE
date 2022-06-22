const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const questionsRouter = require('./questions/questions-router');
const authRouter = require('./auth/auth-router');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/question', questionsRouter);
server.use('/api/auth', authRouter);

// test get call
server.get('/', async (req, res) => {
  res.status(201).json({ message: 'shariq was here' });
});

// error handler
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
