const db = require('../data/db-config.js');

const getUserBy = async (filter) => {
  return await db('admin').where(filter).orderBy('id');
};

module.exports = { getUserBy };
