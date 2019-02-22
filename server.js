var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

// set up static files in express
app.use(express.static(path.join(__dirname, 'app/public')));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});