const Item = require('./item.model');
const User = require('../user/user.model');

module.exports = {
	create,
	read,
	getSellers,
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
	const id = req.params.itemId;

	const item = Item.find(function(elem) {
		return elem.itemId == id;
	});
	
	res.send(item);
}

function getSellers(req, res, next) {
	//get the id of the item
	const id = req.params.itemId;
	//get all user id that own that item
	const userIds = Item.filter(function(item) {
		return item.itemId == id && item.owner == 'player';
	}).map(function(item) {
		return item.userId;
	});
	//filter the user list for the user ids
	const userData = User.filter(function(user) {
		for (let id of userIds) {
			if (user.userId == id) {
				return true;
			}
		}
		return false;
	});
	
	res.send(userData);
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