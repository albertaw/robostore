const axios = require('axios');
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 8080;

module.exports = {
	getUsers,
	getUser,
	getItems,
	getItem,
	getError
}

function getUsers(req, res, next) {
  const path =  'http://' + host + ':' + port + '/api/users';
  axios.get(path)
  .then(function(users) {
    res.render('pages/index', {users: users.data});
  })
  .catch(function (error) {
    res.render('pages/error', {message: error});
  });
}

function getUser(req, res, next) {
  const userPath = 'http://' + host + ':' + port + '/api/users/' + req.params.userId;
  const itemPath = 'http://' + host + ':' + port + '/api/users/' + req.params.userId + '/items';
  
  axios.all([
    axios.get(userPath),
    axios.get(itemPath)
  ])
  .then(axios.spread((user, items) => {
    res.render('pages/user-detail', {user: user.data, items: items.data});
  }))
  .catch(function (error) {
    res.render('pages/error', {message: error});
  });
}

function getItems(req, res, next) {
  const path =  'http://' + host + ':' + port + '/api/items';
  
  axios.get(path)
  .then(function(items) {
    res.render('pages/item-list', {items: items.data});
  })
  .catch(function (error) {
    res.render('pages/error', {message: error});
  });
}

function getItem(req, res, next) {
  const itemPath = 'http://' + host + ':' + port + '/api/items/' + req.params.itemId;
  const sellersPath = 'http://' + host + ':' + port + '/api/items/' + req.params.itemId + '/users';
    
  axios.all([
    axios.get(itemPath),
    axios.get(sellersPath)
  ])
  .then(axios.spread((item, sellers) => {
    res.render('pages/item-detail', {item: item.data, users: sellers.data});
  }))
  .catch(function (error) {
    res.render('pages/error', {message: error});
  });
}

function getError(req, res, next) {
	res.render('pages/error', {message: 'Page not found'});
}