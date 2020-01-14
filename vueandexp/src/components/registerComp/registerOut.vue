<template>
  <div>
    <template v-if="registerType==1" >
      <el-card :body-style="{ padding: '10px 20px' }" >
        <el-select
          class=""
          v-model="goodsCode"
          placeholder="种类">
          <el-option
            v-for="item in this.$store.state.goodsData.goodsList"
            :key="item.goodsCode"
            :label="item.name"
            :value="item.goodsCode">
          </el-option> 
        </el-select>
        <el-select
          class="queryOption"
          v-model="category"
          placeholder="状态">
          <el-option
            v-for="item in this.$store.state.dictionaryData.registerStatus"
            :key="item.keyid"
            :label="item.value"
            :value="item.keyid">
          </el-option> 
        </el-select>
        <el-select
          class="queryOption1"
          v-model="userId"
          placeholder="用户">
          <el-option
            v-for="item in this.$store.state.dictionaryData.userList"
            :key="item.userId"
            :label="item.realName"
            :value="item.userId">
          </el-option> 
        </el-select>
        <el-button
        class="queryButton"
        :type="openQuery?'primary':'success'"
        :icon="openQuery?'el-icon-search':'el-icon-refresh'"
        @click="QueryRegisterList"
        ></el-button>
        <div class="rightButton" >
          <el-button type="primary" @click="gotoAddRegister" icon="el-icon-plus" >添加</el-button>
        </div>
      </el-card>
      <el-card :body-style="{ padding: '0px' }"  class="dataList">
        <el-table
          :data="this.$store.state.registerData.outRegisterList"
          height="810"
          border
          style="width: 100%;">
          <el-table-column
            align='center'
            fixed
            type="index"
            label=""
            width="50">
          </el-table-column>
          <el-table-column
            align='center'
            fixed
            prop="formCode"
            label="单号"
            width="180">
          </el-table-column>
          <el-table-column
            align='center'
            prop="goodsName"
            label="商品名称"
            width="180">
          </el-table-column>
          <el-table-column
            align='center'
            prop="count"
            label="数量"
            width="150">
          </el-table-column>
          <el-table-column
            align='center'
            prop="stamp"
            label="最后修改时间"
            width="150">
          </el-table-column>
          <el-table-column
            align='center'
            prop="realName"
            label="修改人"
            width="150">
          </el-table-column>
          <el-table-column
            align='center'
            label="状态"
            width="150">
            <template slot-scope="scope">
              <el-tag v-if="scope.row.status==0" type="success">{{$store.state.dictionaryData.registerStatus[scope.row.status].value}}</el-tag>
              <el-tag v-if="scope.row.status==1" type="info">{{$store.state.dictionaryData.registerStatus[scope.row.status].value}}</el-tag>
              <el-tag v-if="scope.row.status==2" type="warning">{{$store.state.dictionaryData.registerStatus[scope.row.status].value}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            align='center'
            prop="total"
            label="总价"
            width="150">
          </el-table-column>
          <el-table-column
            align='center'
            prop="other"
            label="其他"
            width="200">
          </el-table-column>
          <el-table-column
            align='center'
            fixed="right"
            label="操作"
          >
            <template slot-scope="scope" >
              <el-button
                type="success"
                @click="gotoWatchRegister(scope.row)"
                size="small"
              >查看</el-button>
              <el-button
                type="warning"
                v-if="scope.row.status!=1"
                @click="gotoChangeRegister(scope.row)"
                size="small"
              >编辑</el-button>
              <el-button
                type="danger"
                v-if="scope.row.status!=1"
                @click="deleteRegisterMet(scope.row)"
                size="small"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </template>
    <template v-else>
      <el-card :body-style="{ padding: '10px 20px' }" >
        <div class="rightButton" >
          <el-button
            v-if="registerType==2"
            type="success"
            @click="addRegisterMet"
            icon="el-icon-folder-checked"
          >保存</el-button>
          <el-button
            v-if="registerType==3"
            type="warning"
            @click="changeRegisterMet"
            icon="el-icon-folder-checked"
          >更改</el-button>
          <el-button
            type="info"
            icon="el-icon-folder-delete"
            @click="gobackRegisterList" 
          >返回</el-button>
        </div>
      </el-card>
      <el-card :body-style="{ padding: '0px' }">
        <form class="registerForm" >
          <h3>出库登记单</h3>
          种类：{{goodsobj.name}}
          <el-select
            class="goodsSelect"
            v-model="goodsobj"
            :disabled="registerType==4"
            placeholder="种类">
            <el-option
              v-for="item in this.$store.state.goodsData.goodsList"
              :key="item.goodsCode"
              :label="item.name"
              :value="item">
            </el-option> 
          </el-select><br/>
          数量：
          <el-input-number
            :disabled="registerType==4"
            class="registerFormInput"
            v-model="thisRegisterInfo.count"
            :min="1"
          ></el-input-number><br/>
          单价：<div class="priceSpen" >{{goodsobj.price_In}}元</div><br/>
          总价：<div class="priceSpen" >{{goodsobj.price_In*thisRegisterInfo.count}}元</div><br/>
          修改人：
          <el-select
            :disabled="true"
            v-model="thisRegisterInfo.userId"
            placeholder="用户">
            <el-option
              v-for="item in this.$store.state.dictionaryData.userList"
              :key="item.userId"
              :label="item.realName"
              :value="item.userId">
            </el-option>
          </el-select><br/>
          其他：
          <el-input
            class="registerFormInput"
            :disabled="registerType==4"
            placeholder="请输入"
            v-model="thisRegisterInfo.other"
          ></el-input><br/>
        </form>
      </el-card>
    </template>
  </div>
</template>

<script>
import { addRegister,deleteRegister,changeRegister,getGoogs } from '../../api/dataQueryApi';
export default {
    name:"registerInput",
    data() {
      return {
        registerType: 1,
        category:'',
        goodsCode:'',
        userId:'',
        goodsobj:{price_In:0},
        openQuery:true,
        thisRegisterInfo:{
          id: 2,
          formCode: "9f963ddb954747dc9776b4873bdb08f0",
          goodsCode: "",
          goodsName: "",
          count: 20,
          stamp: "20200108031647",
          userId: "8",
          realName: "c4e799fad53c0dec94d4f201a4dd5e78",
          status: 0,
          type: 0,
          total: 200,
          other: "string",
        },
      }
    },
    mounted() {

    },
    methods:{
      gotoAddRegister:function() {
        this.goodsobj={price_In:0};
        let thisUserID = this.$store.state.dictionaryData.thisUser.userId;
        this.thisRegisterInfo = {
          id: 0,
          formCode: "",
          goodsCode: "",
          goodsName: "",
          count: 1,
          stamp: "",
          userId: thisUserID,
          realName: "",
          status: 0,
          type: 0,
          total: 0,
          other: "",
        }
        this.registerType = 2;
      },
      gobackRegisterList:function() {
        this.registerType = 1;
      },
      gotoChangeRegister:function(registerrow) {
        getGoogs(registerrow.goodsCode)
        .then((response)=>{
          this.goodsobj=response.data.data;
        })
        .catch((err)=>{
          this.$message.error({
            message:'错误'+err,
          })
        })
        this.thisRegisterInfo =  registerrow;
        this.registerType = 3;
      },
      gotoWatchRegister:function(registerrow) {
        getGoogs(registerrow.goodsCode)
        .then((response)=>{
          this.goodsobj=response.data.data;
        })
        .catch((err)=>{
          this.$message.error({
            message:'错误'+err,
          })
        })
        this.thisRegisterInfo =  registerrow;
        this.thisRegisterInfo.userId= this.$store.state.dictionaryData.thisUser.userId;
        this.registerType = 4;
      },
      addRegisterMet:function() {
        if (this.goodsobj.goodsCode==undefined) {
          //产品类型不能为空
          this.$message.error({
            message:'请选择产品类型',
          })
          return
        }
        this.thisRegisterInfo.goodsCode = this.goodsobj.goodsCode;
        this.thisRegisterInfo.status = 0;
        this.thisRegisterInfo.type = 1;
        this.thisRegisterInfo.total =this.goodsobj.price_In*this.thisRegisterInfo.count;
        addRegister( this.thisRegisterInfo)
        .then((response)=>{
          if ( response.data.data==true ) {
            this.$message.success({
              message:'添加成功',
            })
            this.$store.dispatch("ActRL");
            this.gobackRegisterList();
          } else {
            this.$message.error({
              message:'添加失败：'+response.data.message,
            })
          }
        })
      },
      deleteRegisterMet:function(registerrow) {
        deleteRegister(registerrow.formCode)
        .then((response)=>{
          if ( response.data.data==true ) {
            this.$message.success({
              message:'删除成功',
            })
            this.$store.dispatch("ActRL");
          } else {
            this.$message.error({
              message:'删除失败：'+response.data.message,
            })
          }
        })
        .catch((err)=>{
          this.$message.error({
            message:'错误'+err,
          })
        })
      },
      changeRegisterMet:function() {
        this.thisRegisterInfo.goodsCode = this.goodsobj.goodsCode;
        // this.thisRegisterInfo.status = 0;
        this.thisRegisterInfo.type = 1;
        this.thisRegisterInfo.total =this.goodsobj.price_In*this.thisRegisterInfo.count;
        changeRegister( this.thisRegisterInfo)
        .then((response)=>{
          if ( response.data.data==true ) {
            this.$message.success({
              message:'修改成功',
            })
            this.$store.dispatch("ActRL");
            this.gobackRegisterList();
          } else {
            this.$message.error({
              message:'修改失败：'+response.data.message,
            })
          }
        })
        .catch((err)=>{
          this.$message.error({
            message:'错误'+err,
          })
        })
      },
      QueryRegisterList:function() {
        if (this.openQuery) {
          let Queryinfo ={};
          Queryinfo.goodsCode = this.goodsCode;
          Queryinfo.category = this.category;
          Queryinfo.userId = this.userId;
          this.$store.dispatch("ActQueryORL",Queryinfo);
        } else {
          this.$store.dispatch("ActRL");
        }
        this.openQuery=!this.openQuery
      }

    }
}
</script>

<style scoped>
  .goodsNameQ{
    width: 185px;
  }
  .rightButton{
    float: right;
    height: 50px;
  }
  .queryOption{
    left: 10px;
  }
  .queryOption1{
    left: 20px;
  }
  .queryButton{
    margin-left: 40px;
  }
  .registerForm{
    max-height: 810px;
    overflow-x: hidden;
  }
  .registerFormInput{
    width: 217px;
    margin: 10px 2px;
  }
  .priceSpen{
    display: inline-block;
    margin: 5px 10px 5px 55px;
  }
  .dataList{
    height: 92%;
  }
  .registerForm::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  .registerForm::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #75787a;
  }
  .registerForm::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: rgb(190, 189, 189);
  }
  .registerFormInput{
    width: 217px;
    margin: 10px 2px;
  }
  .goodsSelect{
    width: 2.5%;
  }
</style>