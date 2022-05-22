const maxStringLength = 200;

exports.up = async (knex) => {
  await knex.schema.createTable('question', (tbl) => {
    tbl.increments('id');
    tbl.string('question', maxStringLength).notNullable().unique();
    tbl.string('answer', maxStringLength);
    tbl.string('reason', maxStringLength);
    tbl.boolean('archived').notNullable().defaultTo(false);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('question');
};
