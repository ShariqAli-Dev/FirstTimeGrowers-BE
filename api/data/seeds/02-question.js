exports.seed = function (knex) {
  return knex('question').insert([
    {
      question: 'How do you get the code for the bank vault?',
      answer: 'You checkout their branch.',
      reason: null,
      archived: false,
    },
    {
      question: 'What do you call a busy waiter?',
      answer: 'A server.',
      reason: null,
      archived: false,
    },
    {
      question: 'What do you call an idle server?',
      answer: 'A waiter.',
      reason: null,
      archived: false,
    },
    {
      question: 'What diet did the ghost developer go on?',
      answer: 'Boolean.',
      reason: null,
      archived: false,
    },
    {
      question: 'Why was the developer unhappy at their job?',
      answer: 'They wanted arrays.',
      reason: null,
      archived: false,
    },
    {
      question: 'Meaning of life?',
      answer: null,
      reason: null,
      archived: false,
    },
    {
      question: 'huh?',
      answer: null,
      reason: null,
      archived: false,
    },
  ]);
};
