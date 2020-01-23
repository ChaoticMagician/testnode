let express = require('express');
let app =express();
// let mysql = require('mysql');

// let connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'Mysql1'
// })
// let sql = 'select * from user';
// connection.connect();
 
// connection.query(sql, function (error, results, fields) {
//   if (error) throw error;
//   console.log('The userTable is: ', results);
// });
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