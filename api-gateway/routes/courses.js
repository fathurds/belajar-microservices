const express = require('express');
const { getAll, get, create, update, destroy } = require('./handler/courses');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

router.get('/', getAll);
router.get('/:id', get);
router.post('/', verifyToken, isAdmin, create);
router.put('/:id', verifyToken, isAdmin, update);
router.delete('/:id', verifyToken, isAdmin, destroy);

module.exports = router;
