<template>
  <el-container id="imappbg" >
    <el-container class="blankbg" >
      <el-header height= '70px' class="modelElement" >萤火之森--终章
        <el-button class="heardButton" icon='el-icon-user' ></el-button>
      </el-header>
      <el-container>
        <el-container>
          <el-main  class="modelElement" >
            <div class="pageButton">
              pageButton切换页标签
            </div>
            <div class="pagemain">
              <ul class="imlistUl" ref="imlistUl" >
                <template v-for="(team,index) in messageList">
                  <li  :key="index"   >
                    {{team.message}}
                  </li>
                </template>
              </ul>
            </div>
          </el-main>
          <el-footer  class="modelElement" >
            <el-input
              v-model="input"
              placeholder="请输入内容"
              class="dialogueInput"
            ></el-input>
            <el-button class="inputButton" icon='el-icon-edit' @click="sendTextInfo" >发送</el-button>
            <el-button class="inputButton" icon='el-icon-plus' ></el-button>
          </el-footer>
        </el-container>
        <el-aside  width="260px" class="felxContain">
          <el-main  class="modelElement felxTeamProperty" >
            <el-button class="propertyCheck" icon='el-icon-edit' @click="sendDiceInfo({property:'San',value:70,type:100})" >D100骰子</el-button>
            <el-button class="propertyCheck" icon='el-icon-edit' @click="sendDiceInfo({property:'San',value:50,type:20})" >D20骰子</el-button>
            <el-button class="propertyCheck" icon='el-icon-edit' @click="sendDiceInfo({property:'Mov',value:12,type:3})" >D3骰子</el-button>
          </el-main>
          <el-footer  class="modelElement felxTeamimg" >头像</el-footer>
        </el-aside>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: "homepage",
  components: {

  },
  data() {
    return {
      input:'',
      messageList:[],
    }
  },
  sockets: {// 通过vue实例对象sockets实现组件中的事件监听
    connect: function () {// socket的connect事件
      console.log('socket connected from Page')
    },
    IM_TEST(data) {// 后端按主题名推送的消息数据
      this.messageList.push(data);
      this.input='';
      console.log(this);
      
      this.$refs.imlistUl.scrollTop = this.$refs.imlistUl.scrollHeight+50;
    }
  },
  methods:{
    goBackFirst () {
      this.$router.replace({path:'/'});
    },
    sendTextInfo(){
      this.$socket.emit('IM_TEST', this.input)
    },
    sendDiceInfo(info){
      this.$socket.emit('IM_DICE',info)
    }
  }
};
</script>

<style scoped>
#imappbg{
  background: url('../assets/imghome/loginpage/bgcoc.jpg');
  /* background: rgba(0, 0, 0, 0); */
  background-repeat:no-repeat;
	background-size:100% 100%;
}
.blankbg{
  margin: 10px;
  background: rgba(223, 223, 223, 0.281);
  border-radius: 5px;
}
.modelElement{
  padding: 0;
  background: #565e98a8;
  color: cornsilk;
  border: 5px rgba(209, 209, 209, 0.966) solid;
  margin: 5px;
  border-radius: 5px;
}
.el-header{
  padding: 0 10px;
  line-height: 60px;
  font-size: 27px;
  font-weight: 600;
  font-family: cursive;
}
.heardButton{
  float:right;
}
.pageButton{
  height: 4%;
}
.pagemain{
  position: relative;
  bottom: 0px;
  height: 96%;
  max-height: 96%;
}
.imlistUl{
  margin: 0%;
  height: 100%;
  max-height: 748px;
  overflow-y: auto;
}
  .imlistUl::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  .imlistUl::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #75787a;
  }
  .imlistUl::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: rgb(190, 189, 189);
  }
.inputButton{
  height: -webkit-fill-available;
  font-size: large;
  position: relative;
  top: -2px;
}
.dialogueInput{
  width: 85%;
  height: 100%;
}
.felxTeamProperty{
  flex: 3 1
}
.felxTeamimg{
  flex: 1 1
}
.felxContain{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}
</style>
<style>
.modelElement .el-input__inner{
  height:inherit;
  font-size: x-large;
}
</style>