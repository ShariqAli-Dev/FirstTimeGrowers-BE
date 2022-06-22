exports.seed = function (knex) {
  return knex('admin').insert([
    {
      username: 'shariq',
      password: '$2a$10$9JwGJFPPUQbvupiqS1rP6euzsrs9PNQLlYNwnDoKBXjW3Q.Q5zxX6',
    },
  ]);
};
