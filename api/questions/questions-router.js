const router = require('express').Router();
const Questions = require('./questions-model');

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
router.post('/', (req, res, next) => {
  Questions.addQuestion(req.body.question)
    .then((added) => {
      if (added) {
        res.status(200).json({ message: 'succeafully added question' });
      } else {
        next({ message: 'error adding question' });
      }
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
