const express = require('express');
const { getAll, get, create, update, destroy } = require('./handler/courses');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const can = require('../middlewares/permission');

router.get('/', getAll);
router.get('/:id', get);
router.post('/', verifyToken, can('admin'), create);
router.put('/:id', verifyToken, can('admin'), update);
router.delete('/:id', verifyToken, can('admin'), destroy);

module.exports = router;
