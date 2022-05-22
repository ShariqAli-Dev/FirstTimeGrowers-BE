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

module.exports = router;
