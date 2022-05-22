const db = require('../data/db-config.js');

const getQuestions = () => {
  return db('question');
};

const addQuestion = async (question) => {
  return await db('question').insert({ question });
};

module.exports = { getQuestions, addQuestion };
