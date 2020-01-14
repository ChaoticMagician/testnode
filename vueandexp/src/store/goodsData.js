import { getGoodsList } from '../api/dataQueryApi.js';
const state = {
  goodsList:[]
}
const mutations = {
  changeGL(state,newvalue){
    state.goodsList = newvalue;
  },
}
const getters = {
  getGL: state => {
    return stat.goodsList;
  },
};
const actions = {
  //获取商品列表数据数据
  ActGL({state,commit}){
    getGoodsList()
    .then(function (response) {
      commit('changeGL',response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
}
export default {
  state, mutations,getters,actions,
} 