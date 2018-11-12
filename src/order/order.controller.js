let Order = require('./order.model');
//let OrderItem = require('../orderItem/orderItem.model');

module.exports = {
	create,
	read,
	update,
	remove,
	getItems
}

function create(req, res, next) {
	res.send('order created');
}

function read(req, res, next) {
	res.send('get order');
}

function update(req, res, next) {
	res.send('order updated');
}

function remove(req, res, next) {
	res.send('order removed');
}

function getItems(req, res, next) {
	res.send('get order items');
}