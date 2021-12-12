const path = require('path');
const express = require('express');
const router = express.Router();
const moment = require('moment');
const { error } = require('../../modules/util');
const { pool } = require('../../modules/mysql-init');

router.get(['/', '/list'], async (req, res, next) => {
  try {
    req.app.locals.js = 'list';
    let sql = `SELECT * from boards`;
    const [boards] = await pool.execute(sql);
    for (let v of boards) {
      v.createdAt = moment(v.createdAt).format('YYYY-MM-DD HH:mm:ss');
    }
    res.render('board/list', { boards });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
