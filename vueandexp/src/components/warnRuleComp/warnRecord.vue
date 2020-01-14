<template>
  <div>
    <template v-if="ruleType==1" >
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
        <el-button class="queryButton" type="primary" icon="el-icon-search" ></el-button>
        <div class="rightButton" >
        </div>
      </el-card>
      <el-card :body-style="{ padding: '0px' }"  class="dataList">
        <el-table
          :data="this.$store.state.ruleData.warnList"
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
            prop="goodsCode"
            label="单号"
            width="180">
          </el-table-column>
          <el-table-column
            align='center'
            prop="goodsName"
            label="商品名称"
            width="200">
          </el-table-column>
          <el-table-column
            align='center'
            prop="stamp"
            label="时间"
            width="200">
          </el-table-column>
          <el-table-column
            align='center'
            prop="type"
            label="预警类型"
            width="150">
          </el-table-column>
          <el-table-column
            align='center'
            prop="other"
            label="其他"
            width="400">
          </el-table-column>
          <el-table-column
            align='center'
            fixed="right"
            label="操作"
          >
            <template slot-scope="scope" >
              <el-button
                type="success"
                @click="gotoWatchRule(scope.row)"
                size="small"
              >查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </template>
    <template v-else>
      <el-card :body-style="{ padding: '10px 20px' }" >
        <div class="rightButton" >
          <el-button
            type="info"
            icon="el-icon-folder-delete"
            @click="gobackRuleList" 
          >返回</el-button>
        </div>
      </el-card>
      <el-card :body-style="{ padding: '0px' }">
        <form class="registerForm" >
          <h3>预警信息</h3>
          种类：
          <el-select
            v-model="thisRuleInfo.goodsCode"
            :disabled="true"
            placeholder="种类">
            <el-option
              v-for="item in this.$store.state.goodsData.goodsList"
              :key="item.goodsCode"
              :label="item.name"
              :value="item.goodsCode">
            </el-option> 
          </el-select><br/>
          时间：
          <el-input
            class="registerFormInput"
            :disabled="true"
            placeholder="请输入"
            v-model="thisRuleInfo.stamp"
          ></el-input><br/>
          预警类型：
          <el-input
            class="registerFormInput"
            :disabled="true"
            placeholder="请输入"
            v-model="thisRuleInfo.type"
          ></el-input><br/>
          其他：
          <el-input
            class="registerFormInput"
            :disabled="true"
            placeholder="请输入"
            v-model="thisRuleInfo.other"
          ></el-input><br/>
        </form>
      </el-card>
    </template>
  </div>
</template>

<script>
import { addRule,deleteRule,changeRule,getGoogs } from '../../api/dataQueryApi';
export default {
    name:"warnRecord",
    data() {
      return {
        ruleType: 1,
        category:'',
        goodsCode:'',
        userId:'',
        thisRuleInfo:{},
      }
    },
    mounted() {
      //异步预警信息列表
      this.$store.dispatch("ActWL");
    },
    methods:{
      gotoAddRule:function() {
        let thisUserID = this.$store.state.dictionaryData.thisUser.userId;
        this.thisRuleInfo = {
          id: 0,
          goodsCode: "",
          count: 0,
          other: "",
        }
        this.ruleType = 2;
      },
      gobackRuleList:function() {
        this.ruleType = 1;
      },
      gotoChangeRule:function(rulerow) {
        getGoogs(rulerow.goodsCode)
        .then((response)=>{
        })
        .catch((err)=>{
          this.$message.error({
            message:'错误'+err,
          })
        })
        this.thisRuleInfo = rulerow;
        this.ruleType = 3;
      },
      gotoWatchRule:function(rulerow) {
        console.log(rulerow);
        
        getGoogs(rulerow.goodsCode)
        .then((response)=>{
        })
        .catch((err)=>{
          this.$message.error({
            message:'错误'+err,
          })
        })
        this.thisRuleInfo = rulerow;
        this.ruleType = 4;
      },
      addRuleMet:function() {
        if (this.thisRuleInfo.goodsCode=='') {
          //产品类型不能为空
          this.$message.error({
            message:'请选择产品类型',
          })
          return
        }
        addRule( this.thisRuleInfo)
        .then((response)=>{
          if ( response.data.data==true ) {
            this.$message.success({
              message:'添加成功',
            })
            this.$store.dispatch("ActRuL");
            this.gobackRuleList();
          } else {
            this.$message.error({
              message:'添加失败：'+response.data.message,
            })
          }
        })
      },
      deleteRuleMet:function(rulerow) {
        deleteRule(rulerow.id)
        .then((response)=>{
          if ( response.data.data==true ) {
            this.$message.success({
              message:'删除成功',
            })
            this.$store.dispatch("ActRuL");
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
      changeRuleMet:function() {
        changeRule( this.thisRuleInfo)
        .then((response)=>{
          if ( response.data.data==true ) {
            this.$message.success({
              message:'修改成功',
            })
            this.$store.dispatch("ActRL");
            this.gobackRuleList();
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
    margin-left: 10px;
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