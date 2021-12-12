const path = require('path');
const express = require('express');
const router = express.Router();
const moment = require('moment');
const { error } = require('../../modules/util');
const { pool } = require('../../modules/mysql-init');
const createError = require('http-errors');

router.get('/:id', async (req, res, next) => {
  try {
    let sql = `SELECT * FROM boards WHERE id=?`;
    const [[board]] = await pool.execute(sql, [req.params.id]);
    res.render('board/view', { board });
  } catch (err) {
    next(createError(err));
  }
});

module.exports = router;
