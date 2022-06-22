const router = require('express').Router();
const Questions = require('./questions-model');
const { uniqueQuestion } = require('./questions-middleware');
// gets all questions
// must be admin
router.get('/', async (req, res, next) => {
  Questions.getQuestions()
    .then((questions) => {
      res.status(200).json(questions);
    })
    .catch((err) => {
      next(err);
    });
});

// get only approved questions
router.get('/approved', async (req, res, next) => {
  Questions.getApprovedQuestions()
    .then((questions) => {
      res.status(200).json(questions);
    })
    .catch((err) => {
      next(err);
    });
});

// get only archived questions
// must be admin
router.get('/archived', async (req, res, next) => {
  Questions.getArchivedQuestions()
    .then((questions) => {
      res.status(200).json(questions);
    })
    .catch((err) => {
      next(err);
    });
});

// user can post a new question
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

// TODO: admin can archive / approve a question

// TODO: admin can edit a question's answer
// in this question, the new text with the question id will be sent in the body
router.put('/:id', (req, res, next) => {});
module.exports = router;
