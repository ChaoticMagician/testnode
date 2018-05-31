var bar = require("./bar.js");
var msg = "您好";
var info = "呵呵";

var barinfo = function showInfo(){
    console.log(info);
}
bar.sde();
exports.msg = msg;
exports.info = info;
exports.barinfo = barinfo;