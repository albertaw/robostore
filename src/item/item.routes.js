const item = require('./item.controller');
const express = require('express');
const router = express.Router();

module.exports = router;

router.post('/api/items', item.create);
router.get('/api/items/:itemId', item.read);
router.get('/api/items/:itemId/users', item.getSellers);
router.put('/api/items/:itemId', item.update);
router.delete('/api/items/:itemId', item.remove);
router.get('/api/items', item.readAll);
router.put('/api/items', item.updateAll);
router.delete('/api/items', item.removeAll);