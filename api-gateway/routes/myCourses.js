const express = require('express');
const { create, get } = require('./handler/my-courses');
const router = express.Router();

router.post('/', create);
router.get('/', get);

module.exports = router;
