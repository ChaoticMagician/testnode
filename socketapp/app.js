let express = require('express');
let app =express();
let users =require('./routes/users');

app.use('/api/user',users);

app.use(express.static(__dirname + '/views'))
app.get('/haha',function(req,res) {
  res.send('haha.hello world')
});
app.get('/hello/:who?',function(req,res) {
	if(req.params.who) {
    	res.end("Hello, " + req.params.who + ".");
	}
    else {
    	res.send("Hello, Guest.");
	}
});

module.exports = app;