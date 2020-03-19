/* 提供商品的增删改查sql语句 */

exports.queryUserList = ()=>{                                   // 查询全部
    return 'SELECT * from user'
}
exports.queryUser = (userID)=>{                                       // 查询用户
    return `SELECT * from user WHERE userid = '${userID}'`
}
exports.addGoodsSQL = (goods)=>{                                 // 添加
    let sql = `INSERT  INTO 
    user(userid,username,password,email,phone,duty,role,level,img,other) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?,?, ?)`;
    let add_value = [
        goods.userid,
        goods.username,
        goods.password,
        goods.email,
        goods.phone,
        goods.duty,
        2,
        0,
        goods.img,
        goods.other,
    ];
    return {sql,add_value}
}
exports.deleteGoodsSQL = (goodsID)=>{                            // 删除
    return `DELETE FROM user WHERE userid = ${goodsID} `
}
exports.chanceGoodsSQL = (goodsID,goods)=>{                      // 修改
    let sql = `UPDATE user SET 
    userid=?,username=?,password=?,email=?,phone=?,duty=?,role=?,level=?,img=?,other=?
     where userid=${goodsID} `;
    let add_value = [
        goods.userid,
        goods.username,
        goods.password,
        goods.email,
        goods.phone,
        goods.duty,
        2,
        0,
        goods.img,
        goods.other,
    ];
    return {sql,add_value}
}
exports.chanceSomeGoods = (goodsID,goods)=>{                      // 部分修改
    let sqlPart = '';
    let add_value = [];
    for (const key in goods) {
        if (goods.hasOwnProperty(key)) {
            sqlPart+=`${key}=?,`
            add_value.push(goods[key]);
        }
    }
    let sql = `UPDATE user SET 
    ${sqlPart.slice(0,-1)}
     where userid=${goodsID} `;
    return {sql,add_value}
}

