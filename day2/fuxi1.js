var http = require("http");

var server = http.createServer(function(req,res){
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        res.write("<ul>");
        res.write("<li>苹果</li>");
        res.write("<li>鲍鱼</li>");
        res.write("<ul>");
        res.end("成功了！！");
    }
);
server.listen(8089,"0.0.0.0");