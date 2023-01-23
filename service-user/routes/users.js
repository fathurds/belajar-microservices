const express = require('express');
const router = express.Router();
const { register, login, update, getUser, getUsers, logout } = require('../controller/users');

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout)
router.put('/:id', update);

module.exports = router;
