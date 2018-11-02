const http = require('http'),
	path = require('path'),
	express = require('express'),
	userRoutes = require('./user/user.routes');

const app = express();

app.set('port', process.env.PORT || 4000)
app.use(userRoutes);
app.use(express.static(path.join(__dirname, 'app/build')));

app.listen(app.get('port'), function() {
	console.log('Express server listening on port', app.get('port'));
})