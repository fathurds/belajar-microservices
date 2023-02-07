const express = require('express');
const { getAll, get, create, update, destroy } = require('./handler/chapters');
const router = express.Router();
const isAdmin = require('../middlewares/isAdmin');

router.get('/', getAll);
router.get('/:id', get);
router.post('/', isAdmin, create);
router.put('/:id', isAdmin, update);
router.delete('/:id', isAdmin, destroy);

module.exports = router;
