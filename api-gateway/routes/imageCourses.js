const express = require('express');
const { create, destroy } = require('./handler/image-courses');
const router = express.Router();

router.post('/', create);
router.delete('/:id', destroy);

module.exports = router;
