const express = require('express');
const { create, getAll, destroy } = require('./handler/media');
const router = express.Router();

router.get('/', getAll);
router.post('/', create);
router.delete('/:id', destroy);

module.exports = router;
