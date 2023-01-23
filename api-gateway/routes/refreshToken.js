const express = require('express');
const { refreshToken } = require('./handler/refreshTokens');
const router = express.Router();

router.post('/', refreshToken);

module.exports = router;
