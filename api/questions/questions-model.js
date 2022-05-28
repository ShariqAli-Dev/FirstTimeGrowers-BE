const db = require('../data/db-config.js');

const getQuestions = () => {
  return db('question');
};

const getApprovedQuestions = () => {
  return db('question').whereNot('answer', null);
};

const getArchivedQuestions = () => {
  return db('question').where('answer', null);
};

const getQuestionBy = (filter) => {
  return db('question').where(filter);
};

const addQuestion = async (question) => {
  return await db('question').insert({ question });
};

module.exports = {
  getQuestions,
  getApprovedQuestions,
  getArchivedQuestions,
  getQuestionBy,
  addQuestion,
};
