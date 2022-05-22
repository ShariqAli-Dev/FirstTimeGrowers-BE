const router = require('express').Router();
const Questions = require('./questions-model');
const { uniqueQuestion } = require('./questions-middleware');

router.get('/', async (req, res, next) => {
  Questions.getQuestions()
    .then((questions) => {
      res.status(200).json(questions);
    })
    .catch((err) => {
      next(err);
    });
});

// upload a question
// add unique question middleware
router.post('/', uniqueQuestion, (req, res, next) => {
  Questions.addQuestion(req.question)
    .then((added) => {
      if (added) {
        res.status(200).json({ message: 'succesfully added question' });
      } else {
        next({ message: 'error adding question' });
      }
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
