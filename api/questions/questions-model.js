const db = require('../data/db-config.js');

const getQuestions = () => {
  return db('question');
};

const getQuestionBy = (filter) => {
  return db('question').where(filter);
};

const addQuestion = async (question) => {
  return await db('question').insert({ question });
};

module.exports = { getQuestions, getQuestionBy, addQuestion };
