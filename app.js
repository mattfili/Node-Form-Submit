
//npm requires
var express = require('express')
var bodyParser = require('body-parser')

//file requires
var index = require('./routes/landing')
var contact = require('./routes/contact')
var about = require('./routes/about')


// variables
var app = express();

//settings
app.set('view engine', 'ejs');
app.set('case sensitive routing', true);

app.locals.title = 'node testing'

//routes
app.use('/', index)
app.use('/contact', contact)
app.use('/about', about)







// error handling
app.use(function (err, req, res, next) {
	console.log('error', err.stack);
	res.status(500).send('My Bad');
});

app.use(function (req, res) {
	res.status(403).send('unauthorized bro');
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('example app listening at http://%s:%s', host, port)
});