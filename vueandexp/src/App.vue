<template>
  <div id="app">
    <router-view class="homepage" />
  </div>
</template>

<script>
export default {

}
</script>

<style>
html,
body,
#app,
.homepage{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
<style >
  .el-upload {
    border: 1px dashed #242424;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border:1px solid #242424;
  }
  .is-scrolling-none::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  .is-scrolling-none::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #75787a;
  }
  .is-scrolling-none::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: rgb(190, 189, 189);
  }
</style>