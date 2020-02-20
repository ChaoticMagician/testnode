let express = require('express');
let app =express();
let cors = require('cors');
let users =require('./routes/users');
let goods =require('./routes/goods');

app.use(cors());

app.use('/api/user',users);
app.use('/api/goods',goods);

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