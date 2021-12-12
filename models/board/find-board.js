const { pool } = require('../../modules/mysql-init');
const createError = require('http-errors');

const findBoard = async () => {
  try {
    let sql = `SELECT * from boards`;
    await pool.execute(sql);
  } catch (err) {
    next(createError(err));
  }
};

module.exports = { findBoard };
