const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.get('/', async (req, res) => {
  res.status(201).json({ message: 'shariq was here' });
});

module.exports = server;
