const Item = require('./item.model');

module.exports = {
	create,
	read,
	update,
	remove,
	readAll
}

function create(req, res, next) {
	const item = new Item(req.body);

	item.save(function(err, item) {
		if(err) res.send(err);
		res.json(item);
	});
}

function read(req, res, next) {
	const id = req.params.itemId;

	Item.findOne({itemId: id}, function(err, item) {
		if (err) res.send(err);
		res.json(item);
	});
}

function update(req, res, next) {
	const id = req.params.itemId;

	Item.findOne({itemId: id}, function(err, item) {
		if(err) res.send(err);
		item.set(req.body);
		item.save(function(err, updatedItem) {
			res.json(updatedItem);
		})
		
	});
}

function remove(req, res, next) {
	const id = req.params.itemId;

	Item.findOneAndDelete({itemId: id}, function(err, item) {
		if (err) res.send(err);
		res.json(item);
	});
	
}

function readAll(req, res, next) {
	Item.find(function(err, items) {
		if (err) res.send(err);
		res.json(items);
	});
}
