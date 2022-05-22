const db = require('../data/db-config.js');

const getQuestions = () => {
  return db('question');
};

module.exports = { getQuestions };
