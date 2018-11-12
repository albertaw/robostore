const order = require('./order.controller');
const express = require('express');
const router = express.Router();

module.exports = router;

router.post('/api/orders', order.create);
router.get('/api/orders/:orderId', order.read);
router.put('/api/orders/:orderId', order.update);
router.delete('/api/orders/:orderId', order.remove);
router.get('/api/orders/:orderId/orderItems', order.getItems);