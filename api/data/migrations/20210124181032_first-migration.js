const maxStringLength = 200;

exports.up = async (knex) => {
  await knex.schema
    .createTable('question', (tbl) => {
      tbl.increments('id');
      tbl.string('question', maxStringLength).unique();
      tbl.string('answer', maxStringLength);
      tbl.string('reason', maxStringLength);
    })
    .createTable('admin', (tbl) => {
      tbl.increments('id');
      tbl.string('username', maxStringLength).notNullable().unique();
      tbl.string('password', maxStringLength).notNullable();
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('admin');
  await knex.schema.dropTableIfExists('question');
};
