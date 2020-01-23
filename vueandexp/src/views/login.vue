<template>
  <el-container id="loginallbg" >
    <el-card :body-style="{ padding: '0px' }" class="logincard">
      <form id="loginId" >
        <div class="title" >骰子女神的呼唤</div>
        <el-input
          placeholder="用户名"
          v-model="username">
          <div slot="prefix">
            <i  class=" loginicon iconfont icon-xiazai"/>|
          </div>
        </el-input>
        <el-input
          placeholder="密码"
          type="password"
          v-model="password">
          <div slot="prefix">
            <i  class=" loginicon iconfont icon-mima"/>|
          </div>
        </el-input>
        <el-button type="success" @click="test" >登陆</el-button>
      </form>
    </el-card>
  </el-container>
</template>

<script>
import {login,getuserlist}from '../api/login.js'
export default {
  name: 'login',
  data() {
    return {
      username:'',
      password:'',
      checked:false,
    }
  },
  methods:{
    loginsuccess(){
      let that = this;
      // let md5 = require('js-md5');
      // login(md5(this.username),md5(this.password))
      login(this.username,this.password)
      .then(function (response) {
        console.log(response.data);

        // if (response.data.data == '') {
        //   that.$message.error({
        //     message:''+response.data.message,
        //   })
        // } else {
        //   // console.log('登陆成功');
        //   // that.$store.commit('getUserInfo',response.data.data);
        //   that.$router.replace({path:'/homepage'});
        // }
      })
      .catch(function (response) {
        console.error(response);
      })
    },
    test(){
      getuserlist()
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (response) {
        console.error(response);
      })

    }
  }
}
</script>

<style scoped>
#loginallbg{
  background: url('../assets/imghome/loginpage/bgcoc.jpg');
  /* background: rgba(0, 0, 0, 0); */
  background-repeat:no-repeat;
	background-size:100% 100%;
}
.logincard{
  background: rgba(206, 206, 206, 0.25);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 28%;
  height: 40%;
  padding: 15px 30px;
  position: relative;
  top: 28%;
  left: 36%;
  border: 1px solid rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  box-shadow: 0px 1px 2px 0px #73737382;
  font-size: 14px;
  color: #606266;
  font-weight:500;
}
.title{
  margin:auto;
}
.el-input{
  padding: 2% 0;
}
.loginicon{
  font-size: 18px;
  line-height: 50px;
}
#logincheckbox{
  padding-top: 1.1%;
  margin-right: 10px;
  color:#ffffff;
}
.el-button{
  margin-top:11%;
  width: 100%;
}
</style>
<style>
#loginId .el-input__inner {
  padding-left: 15px;
}
</style>