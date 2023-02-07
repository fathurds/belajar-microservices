const express = require('express');
const { get, create, update, destroy } = require('./handler/reviews');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');

// router.get('/:id', get);
router.post('/', verifyToken, create);
router.put('/:id', verifyToken, update);
router.delete('/:id', verifyToken, destroy);

module.exports = router;
