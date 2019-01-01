const item = require('./item.controller');
const express = require('express');
const router = express.Router();

module.exports = router;

router.post('/api/items', item.create);
router.get('/api/items/:itemId', item.read);
router.put('/api/items/:itemId', item.update);
router.delete('/api/items/:itemId', item.remove);
router.get('/api/items', item.readAll);
