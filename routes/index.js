var express = require('express');
var router = express.Router();
var indexCtlr = require('../controllers/index');

router.get('/', indexCtlr.index);

module.exports = router