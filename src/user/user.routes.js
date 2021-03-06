const user = require('./user.controller');
const express = require('express');
const router = express.Router();

module.exports = router

router.post('/api/users', user.create);
router.get('/api/users/:userId', user.read);
router.put('/api/users/:userId', user.update);
router.delete('/api/users/:userId', user.remove);
router.get('/api/users/:userId/inventory', user.inventory);
router.get('/api/users', user.readAll);
