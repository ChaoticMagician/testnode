var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");

var server = http.createServer(function(req,res){
    //不设置req.url则该接口不管输入什么都做相同的事情
    //通过俩得到地址
    var pathname = url.parse(req.url).pathname
    //判断用户输入url是否为文件夹，为文件夹默认加载本文件夹的index.html
    if(pathname.indexOf(".") == -1){
        pathname += "/index.html"
    }
    var fileURL = "./"+ path.normalize("./static/"+pathname);
    //把文件读出来
    // console.log(fileURL);
    //得到扩展名
    var extname = path.extname(fileURL);


    fs.readFile(fileURL,function(err,data){
        if(err){
            res.writeHead(404,{"Content-Type":"text/html;charset=UTF8"})
            res.end("404，没有找到");
        }

        //读完之后做的事情
        getMime(extname,function(mime){
            res.writeHead(200,{"Content-Type":mime+";charset=UTF8"});
            res.end(data);

        });

    })


    }
);
server.listen(8089,"0.0.0.0");

function getMime(extname,callback){
    //读取mime.json文件，得到json，根据key选value
    fs.readFile("./mime.json",function(err,data){
        if(err){
            throw Error("找不到mime.json文件！");
            return;
        }
        //转换成json；
        var mimejson = JSON.parse(data);
        var mime = mimejson[extname] || "text/plain"
        console.log(mime);
        callback(mime);
    });
}