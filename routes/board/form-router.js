const path = require('path');
const express = require('express');
const router = express.Router();
const { error } = require('../../modules/util');
const { pool } = require('../../modules/mysql-init');

router.get('/', (req, res, next) => {
  res.render('board/form');
});

router.post('/', (req, res, next) => {
  res.json(req.body);
});

module.exports = router;
