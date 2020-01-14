<template>
  <el-container class="homepage">
    <!-- <img class="bgimg"  alt="bgimg" src="../assets/background/beijing5.png"> -->
    <el-header>
      <span class="sys-icon iconfont LPiconyunduan"></span>
      <div class="sys-title" @click="goBackFirst" >
        进销存管理系统
      </div>
      <div class="sys-center" >
        <span>个人信息</span>
        <span @click="goBackFirst" class="sys-goout iconfont LPiconkaiguan"></span>
      </div>
    </el-header>
    <el-main>
      <div id="mapview" >
      </div>
      <el-menu
        :default-active="'101'"
        :router="true"
        :collapse="isCollapse"
        class="el-menu-vertical-demo"
        background-color="#001529"
        text-color="#D8DEE4"
        active-text-color="#ffd04b"
        :unique-opened='true'
        >
        <span 
        :class="[isCollapse?'sys-outin-collapse':'sys-outin-notcollapse','iconfont','LPiconxuanxiang']"
        @click="()=>{isCollapse=!isCollapse}"
        ></span>
        <template v-for="team in routerData">
          <el-submenu
            v-if="team.children"
            :key="team.num+''"
            :index="team.num+''">
            <template slot="title">
              <i :class="['router-list-icon','iconfont',team.icon]"></i>
              <span slot="title">{{team.name}}</span>
            </template>
            <template
              v-for="team1 in team.children">
              <el-menu-item
                :key="team1.num+''"
                :index="team1.num+''"
                :route="team1.url">
                {{team1.name}}
              </el-menu-item>
            </template>
          </el-submenu>
          <el-menu-item
            v-else
            :key="team.num+'1'"
            :index="team.num+'1'"
            :route="team.url">
            <i :class="['router-list-icon','iconfont','iconfont',team.icon]"></i>
            <span slot="title">{{team.name}}</span>
          </el-menu-item>
        </template>
      </el-menu>
      <router-view id="mainwin" ></router-view>
    </el-main>
  </el-container>
</template>

<script>

export default {
  name: "homepage",
  components: {

  },
  data() {
    return {
      routerData: [
        {
          num:1,
          icon:'LPiconIcon-daochu',
          name:'货品登记',
          children:[
            {num:101,name:'入库登记',url:'/register/input'},
            {num:102,name:'出库登记',url:'/register/out'},
            {num:103,name:'货损登记',url:'/register/damage'},
            {num:104,name:'登记状态',url:'/register/check'},
          ]
        },
        {
          num:2,
          icon:'LPiconhuiyuanribao',
          name:'商品管理',
          children:[
            {num:201,name:'种类编辑',url:'/goods/goodsControl'},
            {num:202,name:'库存查询',url:'/goods/goodsQuery'},
          ]
        },
        {
          num:3,
          icon:'LPicongongnengliebiao',
          name:'货物盘点',
          url:'/statistics/index'
        },
        {
          num:4,
          icon:'LPiconhuiyuanribao',
          name:'库存预警',
          children:[
            {num:401,name:'预警信息',url:'/warn/record'},
            {num:402,name:'预警规则',url:'/warn/rule'},
          ]
        },
      ],
      isCollapse:false,
    }
  },
  watch:{

  },
  mounted(){
    //异步获取商品列表
    this.$store.dispatch("ActGL");
    //异步获取记录列表
    this.$store.dispatch("ActRL");
    //异步获取用户列表
    this.$store.dispatch("ActUL");
  },
  methods:{
    goBackFirst () {
      this.$router.replace({path:'/'});
    }
  }
};
</script>

<style scoped>
.maphome {
  height: 50px;
  widows: 50px;
  background: #c20e0e;
}
#mainwin{
  height: 97%;
}
.el-header{
  height: 50px;
  background: rgb(0, 40, 77);
}
.bgimg{
  position: absolute;
  z-index: -1;
  top: 0;
  width: 100%;
  height: 100%;
}
.sys-title{
  height: 60px;
  margin-left: 63px;
  display: inline-block;
  line-height : 60px;
  letter-spacing : -1px;
  font-weight: bold;
  font-size: 21px;
  vertical-align:middle; 
  color: #D8DEE4;
}
.sys-icon{
  position: absolute;
  font-size: 43px;
  color: #e6e6e6;
  top: 7px;
  left: 33px;
}
/* 这是个人中心的角 */
.sys-center{
  float: right;
  height: 60px;
  padding-right: 70px;
  line-height : 60px;
  font-size: 15px;
  color: #e6e6e6;
  cursor: pointer;
}
.sys-goout{
  position: absolute;
  font-size: 18px;
  color: #e6e6e6;
  top: -1px;
  right: 42px;
  cursor: pointer;
}
/* 地图的div */
.el-main{
  position: relative;
  padding: 0;
  flex-basis: 1%;
}
/* 菜单列表 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
}
.el-menu-vertical-demo{
  float: left;
  min-height: 100%;
}
.sys-outin-collapse{
  position: relative;
  left: 27%;
  top: 7px;
  color: #D8DEE4;
  font-size: 29px;
  cursor: pointer;
}
.sys-outin-notcollapse{
  position: relative;
  left: 82%;
  top: 7px;
  color: #D8DEE4;
  font-size: 29px;
  cursor: pointer;
}
.router-list-icon{
  font-size: 25px;
  color: #D8DEE4;
  padding: 0 8px 0 0;
}
</style>