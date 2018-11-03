const Item = require('./item.model');

module.exports = {
	create,
	read,
	getUsers,
	update,
	remove,
	readAll,
	updateAll,
	removeAll
}

function create(req, res, next) {
	res.send('create item');
}

function read(req, res, next) {
	res.send('read item');
}

function getUsers(req, res, next) {
	res.send('get users for item');
}

function update(req, res, next) {
	res.send('update item');
}

function remove(req, res, next) {
	res.send('remove item');
}

function readAll(req, res, next) {
	//get the users who are merchants
	let items = Item.filter(function(item) {
		return item.owner == 'developer';
	});
	res.send(items);
}

function updateAll(req, res, next) {
	res.send('update all items');
}

function removeAll(req, res, next) {
	res.send('remove all items');
}