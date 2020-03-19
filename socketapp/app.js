let express = require('express');
let app =express();
let cors = require('cors');
let users =require('./routes/users');
let goods =require('./routes/goods');

//跨域接口
app.use(cors());

//登录、注册、修改密码接口
app.use('/api/user',users);

//静态文件接口
app.use(express.static(__dirname + '/views'))

//数据获取接口
app.use('/api/goods',goods);

//测试接口
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