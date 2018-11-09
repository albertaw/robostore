let User = require('./user.model');
let Item = require('../item/item.model');
let InventoryItem = require('../inventoryItem/inventoryItem.model');
module.exports = {
	create,
	read,
	update,
	remove,
	getItems,
	readAll,
	updateAll,
	removeAll
}

function create(req, res, next) {
	res.send('create user');
}

function read(req, res, next) {
	const id = req.params.userId;

	const user = User.find(function(elem) {
		return elem.userId == id;
	});
	
	res.send(user);
}

function update(req, res, next) {
	res.send('update user');
}

function remove(req, res, next) {
	res.send('remove user');
}

function getItems(req, res, next) {
	//get the id of the user
	const userId = req.params.userId;
	//get all itemids in the [inventory]item list with that userid
	let itemIds = InventoryItem.filter(function(item) {
		return item.userId == userId;
	}).map(function(item) {
		return item.itemId;
	});
	//filter the item list for the itemIds
	let items = Item.filter(function(item) {
	  for (let id of itemIds) {
			if (id == item.itemId) {
				return true;
			}
		}
		return false;
	});


	res.send(items);
}

function readAll(req, res, next) {
	//get the users who are merchants
	let users = User.filter(function(user) {
		return user.role == 'developer';
	});

	res.json(users);
}

function updateAll(req, res, next) {
	res.send('update all users');
}

function removeAll(req, res, next) {
	res.send('remove all users');
}