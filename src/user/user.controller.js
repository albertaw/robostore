let User = require('./user.model');

module.exports = {
	create,
	read,
	readUserItems,
	update,
	remove,
	readAll,
	updateAll,
	removeAll
}

function create(req, res, next) {
	res.send('create user');
}

function read(req, res, next) {
	res.send('read user')
}

function readUserItems(req, res, next) {
	res.send('read user items');
}

function update(req, res, next) {
	res.send('update user');
}

function remove(req, res, next) {
	res.send('remove user');
}

function readAll(req, res, next) {
	res.send('remove all users');
}

function updateAll(req, res, next) {
	res.send('update all users');
}

function removeAll(req, res, next) {
	res.send('remove all users');
}