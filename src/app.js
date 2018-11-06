const http = require('http'),
	path = require('path'),
	express = require('express'),
  axios = require('axios'),
	userRoutes = require('./user/user.routes'),
	itemRoutes = require('./item/item.routes'),
	router = express.Router();

const app = express();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 8080;
app.set('port', port);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
//app.use(express.static(path.join(__dirname, '../react-app/build')));

//must go before routes to work
//https://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(userRoutes);
app.use(itemRoutes);
//fixes react router cannot GET url
//https://tylermcginnis.com/react-router-cannot-get-url-refresh/
/*app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../react-app/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});
*/
app.get('/', function(req, res) {
  const path =  'http://' + host + ':' + port + '/api/users';
  axios.get(path)
  .then(function(users) {
    res.render('pages/index', {users: users.data});
  })
  .catch(function (error) {
    res.render('pages/error', {message: error});
  });
  
});

app.get('/users/:userId', function(req, res) {
  const userPath = 'http://' + host + ':' + port + '/api/users/' + req.params.userId;
  const itemPath = 'http://' + host + ':' + port + '/api/users/' + req.params.userId + '/items';
  
  axios.all([
    axios.get(userPath),
    axios.get(itemPath)
  ])
  .then(axios.spread((user, items) => {
    console.log(user.data);
    res.render('pages/user-detail', {user: user.data, items: items.data});
  }))
  .catch(function (error) {
    res.render('pages/error', {message: error});
  });
});

app.get('/items', function(req, res) {
  const path =  'http://' + host + ':' + port + '/api/items';
  axios.get(path)
  .then(function(items) {
    res.render('pages/item-list', {items: items.data});
  })
  .catch(function (error) {
    res.render('pages/error', {message: error});
  });
});

app.get('/items/:itemId', function(req, res) {
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
});

app.get('*', function (req, res) {
	res.render('pages/error', {message: 'Page not found'});
});

app.listen(app.get('port'), function() {
	console.log('Express server listening on port', app.get('port'));
});