var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

let {query,addInfo,deleteInfo,chanceInfo,setRemark} = require('../dbMethods/dbpool');
let {queryGoodsList,addGoodsSQL,deleteGoodsSQL,chanceGoodsSQL,chanceSomeGoods,queryUser} = require('../dbMethods/userSQL');

//设置接口的标签（remark）字段


//用户登录
router.post('/login',bodyParser.json({limit:'2mb'}),function(req, res,next) {
  setRemark('用户登录接口');
  query(queryUser(req.body.userId),(vals)=>{
    if (vals.data!=false&&req.body.passWord==vals.data[0].password) {
        vals.state='success';
        vals.message='登录成功'
    } else {
        vals.state='failure';
        vals.message='用户名或密码错误';
        vals.data = []
    }
    res.send(JSON.stringify(vals));
  });
});

//增加数据
router.post('/',bodyParser.json({limit:'2mb'}), function (req, res, next) {
    let {sql,add_value} = addGoodsSQL(req.body);
    addInfo(sql ,add_value , (result)=> {
        //响应内容 增加数据成功
        req.body.id = result.data.insertId;
        res.send(req.body) 
    });
})

//删除数据
router.delete('/:id',function(req, res,next) {
    deleteInfo(deleteGoodsSQL(req.params.id),(vals)=>{
        res.send(JSON.stringify(vals));
    })
});
//修改数据
router.put('/:id',bodyParser.json({limit:'2mb'}), function(req, res,next) {
    let {sql,add_value} = chanceGoodsSQL(req.params.id,req.body)
    chanceInfo(sql ,add_value ,(vals)=>{
        res.send(JSON.stringify(vals));
        // res.send(JSON.stringify({sql,add_value}));
    })
});
//修改部分数据
router.patch('/:id',bodyParser.json({limit:'2mb'}), function(req, res,next) {
    let {sql,add_value} = chanceSomeGoods(req.params.id,req.body)
    chanceInfo(sql ,add_value ,(vals)=>{
        res.send(JSON.stringify(vals));
    })
});
module.exports = router;