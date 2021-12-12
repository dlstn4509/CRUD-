const path = require('path');
const express = require('express');
const router = express.Router();
const moment = require('moment');
const { error } = require('../../modules/util');
const { pool } = require('../../modules/mysql-init');
const createError = require('http-errors');
const { findBoard } = require('../../models/board/find-board');

router.get(['/', '/list'], async (req, res, next) => {
  try {
    req.app.locals.js = 'list';
    const [boards] = await findBoard();
    // for (let v of boards) {
    //   v.createdAt = moment(v.createdAt).format('YYYY-MM-DD HH:mm:ss');
    // }
    res.render('board/list', { boards });
  } catch (err) {
    next(createError(err));
  }
});

module.exports = router;
