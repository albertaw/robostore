const Item = require('./item.model');
const User = require('../user/user.model');
const InventoryItem = require('../InventoryItem/inventoryItem.model');

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
	const itemId = req.params.itemId;
	//filter the inventoryItems for entries that have the itemId
	const userIds = InventoryItem.filter(function(item) {
		return item.itemId == itemId;
	}).map(function(item) {
		return item.userId;
	});
	//get the users who are customers
	const users = User.filter(function(user) {
		for (let id of userIds) {
			if (user.userId == id && user.role == 'customer') {
				return true;
			}
		}
		return false;
	});
	
	res.send(users);
}

function update(req, res, next) {
	res.send('update item');
}

function remove(req, res, next) {
	res.send('remove item');
}

function readAll(req, res, next) {
	const productInfo = Item.map(function(item) {
		for (let user of User){
			if(user.userId == item.userId) {
				return {
					itemId: item.itemId, 
					name: item.name,
					cost: item.cost,
					currency: item.currency,
					amount: item.amount,
					url: item.url,
					userId: item.userId,
					userName: user.name
				}
			}
		}
	});
	res.send(productInfo);
}

function updateAll(req, res, next) {
	res.send('update all items');
}

function removeAll(req, res, next) {
	res.send('remove all items');
}