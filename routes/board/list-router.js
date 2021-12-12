const path = require('path');
const express = require('express');
const router = express.Router();
const { error } = require('../../modules/util');
const { pool } = require('../../modules/mysql-init');

router.get(['/', '/list'], (req, res, next) => {
  res.render('board/list');
});

module.exports = router;
