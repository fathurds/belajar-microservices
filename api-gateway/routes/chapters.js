const express = require('express');
const { getAll, get, create, update, destroy } = require('./handler/chapters');
const router = express.Router();

router.get('/', getAll);
router.get('/:id', get);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router;
