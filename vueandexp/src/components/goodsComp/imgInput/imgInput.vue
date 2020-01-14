<template>
  <div>
    <p>
      <input v-show="ChangeGoodsType!=4" type="file" id="file_input" />
    </p>
    <div id="result"> 
      
    </div>
  </div>
</template>

<script>
import { Image } from 'element-ui';
export default {
  name:"imgInput",
  props: ['imgDadaObj','ChangeGoodsType'],
  data() {
    return {
      result:{},
      input:{},
      imgDom:{}
    }
  },
  mounted() {
    var result = document.getElementById("result");
    var input = document.getElementById("file_input");
    this.imgDom = document.createElement("img");
    let that = this;
    //添加input事件
    if(typeof FileReader === 'undefined'){
      result.innerHTML = "抱歉，你的浏览器不支持 FileReader";
      input.setAttribute('disabled','disabled');
    }else{
      input.addEventListener('change',readFile,false);
    }
    //图片对象样式
    this.imgDom.style = "height:100%;width:100%;"
    
    if (this.imgDadaObj.img!=='') {
      this.imgDom.src= this.imgDadaObj.img;
      result.appendChild(that.imgDom);
    }
    function readFile(){
      var file = this.files[0];
      if(!/image\/\w+/.test(file.type)){
          alert("请确保文件为图像类型");
          return false;
      }
      var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e){
          that.imgDadaObj.img = this.result
          that.imgDom.src= that.imgDadaObj.img;
          result.appendChild(that.imgDom);
        }
    }
  },
}
</script>

<style scoped>
#result{
  height: 300px;
  width: 300px;
}
</style>