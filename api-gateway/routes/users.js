const express = require('express');
const { register, login, update, getUser, logout } = require('./handler/users');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');

router.get('/', verifyToken, getUser);
router.post('/register', register);
router.post('/login', login);
router.post('/logout', verifyToken, logout);
router.put('/', verifyToken, update);

module.exports = router;
