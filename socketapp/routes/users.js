var express = require('express');
var router = express.Router();
var mysql = require('mysql'); //引入mysql 模块
var {databaseInfo} = require('../config/allConfig');
 
//创建mysql连接池
var pool = mysql.createPool(databaseInfo);


//我要执行的mysql语句
var sql = 'SELECT * from user';
router.get('/', function (req, res,next) {
 
  //从连接池获取连接
  pool.getConnection(function (err, conn) {
    if (err) {
      res.send(JSON.stringify({
        code: '0x000000000',
        status: 0,
        remark: '服务器请求异常',
        message: null,
        data: null
      }));
    } else {
      conn.query(sql, function (qerr, vals, fields) {
        if (qerr) {
          res.send(JSON.stringify({
            code: '0x000000000',
            status: 0,
            remark: '获取用户列表',
            message: '请求失败',
            data: null
          }));
        }
        //释放连接
        conn.release();
        res.send(JSON.stringify({
          code: '0x000000000',
          status: 1,
          remark: '获取用户列表',
          message: '请求成功',
          data: vals
        }));
      });
    }
  });
});
 
module.exports = router;