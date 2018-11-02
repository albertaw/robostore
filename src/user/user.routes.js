const user = require('./user.controller');
const express = require('express');

const router = express.Router();

module.exports = router

router.post('/users', user.create);
router.get('/users/:userId', user.read);
router.get('/users/:userId/items', user.readUserItems);
router.put('/users/:userId', user.update);
router.delete('/users/:userId', user.remove);
router.get('/users', user.readAll);
router.put('/users', user.updateAll);
router.delete('/users', user.removeAll);