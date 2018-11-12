const http = require('http'),
	path = require('path'),
	express = require('express'),
	userRoutes = require('./user/user.routes'),
	itemRoutes = require('./item/item.routes'),
	orderRoutes = require('./order/order.routes'),
	orderItemRoutes = require('./orderItem/orderItem.routes'),
	//appRoutes = require('./app.routes'),
  port = process.env.PORT || 8080;

const app = express();

app.set('port', port);

//must go before routes to work
//https://enable-cors.org/server_expressjs.html
/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/
app.use(userRoutes);
app.use(itemRoutes);
app.use(orderRoutes);
app.use(orderItemRoutes);


app.listen(app.get('port'), function() {
	console.log('Express server listening on port', app.get('port'));
});