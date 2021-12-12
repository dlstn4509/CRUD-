const path = require('path');
const express = require('express');
const router = express.Router();
const { error } = require('../../modules/util');
const { pool } = require('../../modules/mysql-init');

const listRouter = require('./list-router');
const formRouter = require('./form-router');

router.use('/form', formRouter);
router.use('/', listRouter);

module.exports = router;
