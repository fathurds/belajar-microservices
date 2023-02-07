const express = require('express');
const { getOrders } = require('./handler/order-payment');
const router = express.Router();

router.get('/', getOrders);

module.exports = router;
