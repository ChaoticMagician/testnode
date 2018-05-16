var http = require("http");

var server = http.createServer(function(req,res){
    if(req.url == '/'){
        //设置响应头
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        res.end("登陆成功！！");
    }else{
        res.writeHead(404,{"Content-Type":"text/html;charset=utf-8"});
        res.end("登陆失败！！");
    }


    }
);
server.listen(8089,"0.0.0.0");