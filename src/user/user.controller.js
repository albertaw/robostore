let User = require('./user.model');

module.exports = {
	create,
	read,
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

function update(req, res, next) {
	res.send('update user');
}

function remove(req, res, next) {
	res.send('remove user');
}

function readAll(req, res, next) {
	//get the users who are merchants
	let users = User.filter(function(user) {
		console.log(user.role)
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