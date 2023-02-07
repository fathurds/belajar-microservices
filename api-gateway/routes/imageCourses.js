const express = require('express');
const { create, destroy } = require('./handler/image-courses');
const router = express.Router();
const isAdmin = require('../middlewares/isAdmin');

router.post('/', isAdmin, create);
router.delete('/:id', isAdmin, destroy);

module.exports = router;
