<template>
  <div>
      <template v-if="ChangeGoodsType==1" >
        <el-card :body-style="{ padding: '10px 20px' }" >
          <el-button @click='changeDateType(1)' type="success" class="dateButton" size="mini"  >月份</el-button>
          <div v-show='dateType==1' class="leftButton">
            <el-date-picker
              v-model="queryDate"
              type="month"
               value-format="yyyyMM"
              placeholder="选择月">
            </el-date-picker>
          </div>
          <el-button @click='changeDateType(2)' type="success" class="dateButton" size="mini"  >季度</el-button>
          <div v-show='dateType==2' class="leftButton">
            <el-select
              class=""
              v-model="queryDate1"
              placeholder="季度">
              <el-option
                v-for="item in this.$store.state.dictionaryData.seasonType"
                :key="item.label"
                :label="item.label"
                :value="item.value">
              </el-option> 
            </el-select>
          </div>
          <el-button @click='changeDateType(3)' type="success" class="dateButton" size="mini"  >年份</el-button>
          <div v-show='dateType==3' class="leftButton">
            <el-date-picker
              v-model="queryDate0"
              type="year"
              value-format="yyyy"
              placeholder="选择年">
            </el-date-picker>
          </div>
          <el-button @click='changeDateType(4)' type="success" class="dateButton" size="mini"  >时段</el-button>
          <div v-show='dateType==4' class="leftButton">
            <el-date-picker
              v-model="queryDate2"
              type="daterange"
              value-format="yyyyMMdd"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <el-button @click="getStaticsMet" class="queryButton" type="primary" icon="el-icon-search" ></el-button>
          <div class="rightButton" >
            <!-- <el-button type="primary" @click="gotoAddGoods" icon="el-icon-plus" >添加</el-button> -->
          </div>
        </el-card>
        <el-card :body-style="{ padding: '0px' }"  class="dataList">
          <el-table
            :data="this.$store.state.statisticsData.statisticsList"
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
              prop="goodsName"
              label="商品名称"
              width="180">
            </el-table-column>
            <el-table-column
              align='center'
              prop="goodsCode"
              label="商品ID"
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
              prop="total"
              label="总价"
              width="150">
            </el-table-column>
          </el-table>
        </el-card>
      </template>

  </div>
</template>
<script>
import { getGoodsList,addGoogs,deleteGoogs,changeGoogs } from '../../api/dataQueryApi';
  export default {
    name:"goodsControl",
    data() {
      return {
        input:"",
        category:"",
        ifTbaleSlect:false,
        ChangeGoodsType:1,
        goodsList: [],
        thisGoodsInfo:{
          id: 12,
          goodsCode: 'dsfsdfg',
          name: 'string',
          price_In: 12.5,
          price_Out: 1864.8,
          category: '生活日化',
          label: 'asd',
          machine: '16546416fdhgdf',
          img: 'ghjgf455464',
          other: 'fdkhjgaoifiwejrgf',
        } ,
        queryDate:new Date,
        queryDate0:new Date,
        queryDate1:'',
        queryDate2:'',
        dateType:1,
        datevalue: '',
      }
    },
    mounted() {
      //异步获取统计数据列表
      this.$store.dispatch("ActSL");
    },
    methods:{
      changeDateType(num){
        this.dateType=num;
        this.queryDate=new Date;
        this.queryDate0=new Date;
        this.queryDate1='';
        this.queryDate2='';
      },
      getStaticsMet:function() {
        if (this.queryDate==='') {
          this.$message.error({
            message:"请选择时间",
          })
        }
        if (this.dateType==1) {
          //计算月份统计
            this.$store.dispatch("ActSLMonth",this.queryDate);
        } else
        if (this.dateType==2) {
          //计算季度统计
          if (this.queryDate1 instanceof Array) {
            this.$store.dispatch("ActSLSeason",this.queryDate1);
          }else{
            this.$message.error({
              message:"请选择时间段",
            })
          }
        } else
        if (this.dateType==3) {
          //计算年度统计
            this.$store.dispatch("ActSLYear",this.queryDate0);
        } else{
          //计算时段统计
          if (this.queryDate2 instanceof Array) {
            this.$store.dispatch("ActSLDate",this.queryDate2);
          }else{
            this.$message.error({
              message:"请选择时间段",
            })
          }
        }
      }
    }
  }
</script>
<style  scoped>
  .el-card{
    margin:2px;
  }
  .rightButton{
    float: right;
    height: 50px;
  }
  .leftButton{
    display:inline-block;
    padding: 0 12px;
    height: 50px;
    width: 500px;
  }
  .leftButtonText{
    display:inline-block;
    padding: 0 12px;
    width: 10px;
  }  
  .goodsNameQ{
    width: 185px;
  }
  .queryOption{
    left: 10px;
  }
  .dateButton{
    margin-left: 20px;
  }
  .queryButton{
    margin-left: 100px;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .goodsForm{
    max-height: 810px;
    overflow-x: hidden;
  }
  .goodsFormInput{
    width: 217px;
    margin: 10px 2px;
  }
  .goodsForm::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  .goodsForm::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #75787a;
  }
  .goodsForm::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: rgb(190, 189, 189);
  }
</style>
