let express = require('express');
let router = express.Router();
let flightCtlr = require('../controllers/flights')

router.get('/', flightCtlr.index);

module.exports = router;