let User = require('./user.model');
let Item = require('../item/item.model');

module.exports = {
	create,
	read,
	update,
	remove,
	inventory,
	readAll,
}

function create(req, res, next) {
	const user = new User(req.body);

	user.save(function(err, user) {
		if(err) res.send(err);
		res.json(user);
	});
}

function read(req, res, next) {
	const id = req.params.userId;

	User.findOne({userId: id}, function(err, user) {
		if (err) res.send(err);
		res.json(user);
	});
}

function update(req, res, next) {
	const id = req.params.userId;

	User.findOne({userId: id}, function(err, user) {
		if(err) res.send(err);
		user.set(req.body);
		user.save(function(err, updatedUser) {
			res.json(updatedUser);
		})
		
	});
}

function remove(req, res, next) {
	const id = req.params.userId;

	User.findOneAndDelete({userId: id}, function(err, user) {
		if (err) res.send(err);
		res.json(user);
	});
}

//get inventory for a user
function inventory(req, res, next) {
	const id = req.params.userId;

	User.findOne({userId: id}, function(err, user) {
		if (err) res.send(err)
		const inventory = user.inventory.map(function(item){
			return item.itemId;
		});
		//res.json(inventory);
		Item.find({ itemId: {$in: inventory} }, function(err, items) {
			if(err) res.send(err);
			res.json(items);
		})
	});
}

function readAll(req, res, next) {
	User.find(function(err, users) {
		if (err) res.send(err);
		res.json(users);
	});
}

