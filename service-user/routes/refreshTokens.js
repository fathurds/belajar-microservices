const express = require('express');
const router = express.Router();
const { create, getToken } = require('../controller/refreshTokens');

router.post('/', create);
router.get('/', getToken);

module.exports = router;