const Questions = require('./questions-model');

const uniqueQuestion = async (req, res, next) => {
  const { question } = req.body;
  const questionMaybe = await Questions.getQuestionBy({ question });

  if (questionMaybe) {
    next({ status: 409, message: 'question already exists' });
  } else {
    req.question = question;
    next();
  }
};

module.exports = { uniqueQuestion };
