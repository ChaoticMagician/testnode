let mysql = require('mysql'); //引入mysql 模块
let {databaseInfo} = require('../config/allConfig');

//创建mysql连接池
let pool = mysql.createPool({
  host:     databaseInfo.host,
  user:     databaseInfo.user,
  password: databaseInfo.password,
  database: databaseInfo.database,
  port:     databaseInfo.port,
  multipleStatements: true, //  允许执行多条语句
});
let remarkInfo = '';
exports.setRemark = function(info) {
    remarkInfo = info;
}
let reqdata;
//查询
exports.query = function(sql,callback){
    pool.getConnection(function(err,conn){ 
        if(err){
            reqdata = {
                code: '500',
                remark: remarkInfo,
                message: '数据库链接错误',
                data: null
            }
            callback(reqdata);
            console.log('数据库链接错误'+err);
        }else{ 
            conn.query(sql,function(qerr,vals,fields){ 
                //释放连接
                conn.release(); 
                //事件驱动回调
                if(vals) {
                    reqdata = {
                        code: '200',
                        remark: remarkInfo,
                        message: '查询成功',
                        data: vals
                    }
                    callback(reqdata); 
                } else {
                    console.log('---------SQL语句错误-----------');
                    console.error(qerr);
                    console.log('------------------------------');
                    reqdata = {
                        code: '-1',
                        remark: remarkInfo,
                        message: 'sql查询失误',
                        data: []
                    }
                    callback(reqdata); 
                }
            }); 
        } 
    }); 
};
//添加
exports.addInfo = function(sql,add_value,callback){
    pool.getConnection(function(err,conn){ 
        if(err){
            reqdata = {
                code: '500',
                remark: remarkInfo,
                message: '数据库链接错误',
                data: null
            }
            callback(reqdata);
            console.log('数据库链接错误'+err);
        }else{ 
            conn.query(sql, add_value,function(qerr,vals,fields){ 
                //释放连接
                conn.release(); 
                //事件驱动回调
                if(vals) {
                    reqdata = {
                        code: '200',
                        remark: remarkInfo,
                        message: '添加成功',
                        data: vals
                    }
                    callback(reqdata); 
                } else {
                    console.log('---------SQL语句错误-----------');
                    console.error(qerr);
                    console.log('------------------------------');
                    reqdata = {
                        code: '-1',
                        remark: remarkInfo,
                        message: 'sql添加失误',
                        data: null
                    }
                    callback(reqdata); 
                }
            }); 
        } 
    }); 
};
//删除
exports.deleteInfo = function(sql,callback){
    pool.getConnection(function(err,conn){ 
        if(err){
            reqdata = {
                code: '500',
                remark: remarkInfo,
                message: '数据库链接错误',
                data: null
            }
            callback(reqdata);
            console.log('数据库链接错误'+err);
        }else{ 
            conn.query(sql,function(qerr,vals,fields){ 
                //释放连接
                conn.release(); 
                //事件驱动回调
                if(vals) {
                    reqdata = {
                        code: '200',
                        remark: remarkInfo,
                        message: '删除成功',
                        data: vals
                    }
                    callback(reqdata); 
                } else {
                    console.log('---------SQL语句错误-----------');
                    console.error(qerr);
                    console.log('------------------------------');
                    reqdata = {
                        code: '-1',
                        remark: remarkInfo,
                        message: 'sql删除失误',
                        data: null
                    }
                    callback(reqdata); 
                }
            }); 
        } 
    }); 
};
//改动
exports.chanceInfo = function(sql,add_value,callback){
    pool.getConnection(function(err,conn){ 
        if(err){
            reqdata = {
                code: '500',
                remark: remarkInfo,
                message: '数据库链接错误',
                data: null
            }
            callback(reqdata);
            console.log('数据库链接错误'+err);
        }else{ 
            conn.query(sql, add_value,function(qerr,vals,fields){ 
                //释放连接
                conn.release(); 
                //事件驱动回调
                if(vals) {
                    reqdata = {
                        code: '200',
                        remark: remarkInfo,
                        message: '改动成功',
                        data: vals
                    }
                    callback(reqdata); 
                } else {
                    console.log('---------SQL语句错误-----------');
                    console.error(qerr);
                    console.log('------------------------------');
                    reqdata = {
                        code: '-1',
                        remark: remarkInfo,
                        message: 'sql改动失误',
                        data: null
                    }
                    callback(reqdata); 
                }
            }); 
        } 
    }); 
};