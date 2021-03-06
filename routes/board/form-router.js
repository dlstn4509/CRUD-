const path = require('path');
const express = require('express');
const router = express.Router();
const { error } = require('../../modules/util');
const { pool } = require('../../modules/mysql-init');
const createError = require('http-errors');

router.get('/', (req, res, next) => {
  res.render('board/form');
});

router.post('/', async (req, res, next) => {
  try {
    let { userId, content } = req.body;
    let sql = `INSERT INTO boards SET userId=?, content=?`;
    let [rs] = await pool.execute(sql, [userId, content]);
    res.redirect('/board/list');
  } catch (err) {
    next(createError(err));
  }
});

module.exports = router;
