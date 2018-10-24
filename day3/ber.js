let addnum =  function (x,y){
    var add = x+y;
    var cheng = x*y;
    return {add,cheng};
};
var addnumnew = new addnum(2,3);
var addnumfun = addnum(2,3);
var arr = 
    {addnumnew,addnumfun}

var ber = '这是ber.js文件';
export default {ber,addnum,arr}