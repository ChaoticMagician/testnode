import { getRegisterList } from '../api/dataQueryApi.js';
const state = {
  registerList:[],
  checkRegisterList:[],
  inputRegisterList:[],
  outRegisterList:[],
  damageRegisterList:[],
}
const mutations = {
  changeRL(state,newvalue){
    state.registerList = newvalue;
  },
  changeCRL(state,newvalue){
    state.checkRegisterList = newvalue;
  },
  changeIRL(state,newvalue){
    state.inputRegisterList = newvalue;
  },
  changeORL(state,newvalue){
    state.outRegisterList = newvalue;
  },
  changeDRL(state,newvalue){
    state.damageRegisterList = newvalue;
  },
  
}
const getters = {
  getRL: state => {
    return stat.registerList;
  },

};
const actions = {
  //获取记录列表数据数据
  ActRL({state,commit}){
    getRegisterList()
    .then(function (response) {
      let registerList = response.data.data;
      commit('changeRL',registerList);
      //筛选待审核的记录
      let checkRegisterList = registerList.filter( (value, index) => value.status==0);
      commit('changeCRL',checkRegisterList);
      //筛选input的记录
      let inputRegisterList = registerList.filter( (value, index) => value.type==0);
      commit('changeIRL',inputRegisterList);
      //筛选out的记录
      let outRegisterList = registerList.filter( (value, index) => value.type==1);
      commit('changeORL',outRegisterList);
      //筛选demage的记录
      let damageRegisterList = registerList.filter( (value, index) => value.type==2);
      commit('changeDRL',damageRegisterList);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  //获取筛查入库记录列表数据
  ActQueryIRL({state,commit},Queryinfo){
    console.log(Queryinfo);
    let inputRegisterList = state.inputRegisterList;
    if (Queryinfo.goodsCode !='') {
      inputRegisterList = inputRegisterList.filter( 
        (value, index) => value.goodsCode==Queryinfo.goodsCode
      );
    }
    if (Queryinfo.category !=='') {
      inputRegisterList = inputRegisterList.filter( 
        (value, index) => value.status==Queryinfo.category
      );
    }
    if (Queryinfo.userId !='') {
      inputRegisterList = inputRegisterList.filter( 
        (value, index) => value.userId==Queryinfo.userId
      );
    }
    commit('changeIRL',inputRegisterList);
  },
  //获取筛查出库记录列表数据
  ActQueryORL({state,commit},Queryinfo){
    let outRegisterList = state.outRegisterList;
    if (Queryinfo.goodsCode !='') {
      outRegisterList = outRegisterList.filter( 
        (value, index) => value.goodsCode==Queryinfo.goodsCode
      );
    }
    if (Queryinfo.category!=='') {
      outRegisterList = outRegisterList.filter( 
        (value, index) => value.status==Queryinfo.category
      );
    }
    if (Queryinfo.userId !='') {
      outRegisterList = outRegisterList.filter( 
        (value, index) => value.userId==Queryinfo.userId
      );
    }
    commit('changeORL',outRegisterList);
  },
  //获取筛查货损记录列表数据
  ActQueryDRL({state,commit},Queryinfo){
    let damageRegisterList = state.damageRegisterList;
    if (Queryinfo.goodsCode !='') {
      damageRegisterList = damageRegisterList.filter( 
        (value, index) => value.goodsCode==Queryinfo.goodsCode
      );
    }
    if (Queryinfo.category!=='') {
      damageRegisterList = damageRegisterList.filter( 
        (value, index) => value.status==Queryinfo.category
      );
    }
    if (Queryinfo.userId !='') {
      damageRegisterList = damageRegisterList.filter( 
        (value, index) => value.userId==Queryinfo.userId
      );
    }
    commit('changeDRL',damageRegisterList);
  },
  //获取筛查货损记录列表数据
  ActQueryCRL({state,commit},Queryinfo){
    let checkRegisterList = state.checkRegisterList;
    if (Queryinfo.goodsCode !='') {
      checkRegisterList = checkRegisterList.filter( 
        (value, index) => value.goodsCode==Queryinfo.goodsCode
      );
    }
    if (Queryinfo.userId !='') {
      checkRegisterList = checkRegisterList.filter( 
        (value, index) => value.userId==Queryinfo.userId
      );
    }
    commit('changeCRL',checkRegisterList);
  },
}
export default {
  state, mutations,getters,actions,
} 