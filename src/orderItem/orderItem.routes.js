const orderItem = require('./orderItem.controller');
const express = require('express');
const router = express.Router();

module.exports = router;

router.post('/api/orderItems', orderItem.create);
router.get('/api/orderItems/:orderItemId', orderItem.read);
router.put('/api/orderItems/:orderItemId', orderItem.update);
router.delete('/api/orderItems/:orderItemId', orderItem.remove);