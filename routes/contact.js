var express = require('express')
var contact = express.Router();
var nodemailer = require('nodemailer')
var directTransport = require('nodemailer-direct-transport');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })


contact.get('/', function(req, res) {
	res.render('templates/contact')
})

contact.post('/email', urlencodedParser, function(req,res){
	console.log(req.body)
	if (!req.body) return res.sendStatus(400)
  var d = req.body,
  transporter = nodemailer.createTransport(directTransport());
  transporter.sendMail({
    from    : d.email,
    to      : 'matthewjosephfili@gmail.com',
    subject : 'message from ['+ d.name+ ']',
    text    : 'from: ['+ d.name+ '] <'+ d.email+ '>\n'+
              'message: '+ d.message
  },function(err,info) {
    if (err) {
      console.log(err);
      res.send('email didn\'t send');
    } else {
      res.send('thanks for the email!');
    }
  });
});

module.exports = contact; 