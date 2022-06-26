exports.seed = function (knex) {
  return knex('question').insert([
    {
      question: 'How do you get the code for the bank vault?',
      answer: 'You checkout their branch.',
      reason: null,
    },
    {
      question: 'What do you call a busy waiter?',
      answer: 'A server.',
      reason: null,
    },
    {
      question: 'What do you call an idle server?',
      answer: 'A waiter.',
      reason: null,
    },
    {
      question: 'What diet did the ghost developer go on?',
      answer: 'Boolean.',
      reason: null,
    },
    {
      question: 'Why was the developer unhappy at their job?',
      answer: 'They wanted arrays.',
      reason: null,
    },
    {
      question: 'Meaning of life?',
      answer: null,
      reason: null,
    },
    {
      question: 'huh?',
      answer: null,
      reason: null,
    },
    {
      question: 'archive 1 test',
      answer: null,
      reason: 'inappropriate',
    },
    {
      question: 'archive 2 test',
      answer: null,
      reason: 'inappropriate',
    },
    {
      question: 'archive 3 test',
      answer: null,
      reason: 'inappropriate',
    },
    {
      question: 'archive 4 test',
      answer: null,
      reason: 'inappropriate',
    },
  ]);
};
