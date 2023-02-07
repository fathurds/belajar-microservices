const express = require('express');
const { webhook } = require('./handler/webhook');
const router = express.Router();

router.post('/', webhook);

module.exports = router;
