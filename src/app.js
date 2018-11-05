const http = require('http'),
	path = require('path'),
	express = require('express'),
	userRoutes = require('./user/user.routes'),
	itemRoutes = require('./item/item.routes');

const app = express();

app.set('port', process.env.PORT || 4000)
app.use(express.static(path.join(__dirname, '../app/build')));

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
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../app/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
app.listen(app.get('port'), function() {
	console.log('Express server listening on port', app.get('port'));
})