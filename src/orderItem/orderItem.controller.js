let OrderItem = require('./orderItem.model');

module.exports = {
	create,
	read,
	update,
	remove
}

function create(req, res, next) {
	res.send('order item created');
}

function read(req, res, next) {
	res.send('get order item');
}

function update(req, res, next) {
	res.send('order item updated');
}

function remove(req, res, next) {
	res.send('order item removed');
}