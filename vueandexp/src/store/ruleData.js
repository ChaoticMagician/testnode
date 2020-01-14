import { getRuleList,getRecordList } from '../api/dataQueryApi.js';
const state = {
  ruleList:[],
  warnList:[]
}
const mutations = {
  changeRuL(state,newvalue){
    state.ruleList = newvalue;
  },
  changeWL(state,newvalue){
    state.warnList = newvalue;
  },
}
const getters = {
  getRuL: state => {
    return stat.ruleList;
  },
  getWL: state => {
    return stat.warnList;
  },
};
const actions = {
  //获取预警规则数据
  ActRuL({state,commit}){
    getRuleList()
    .then(function (response) {
      commit('changeRuL',response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  //获取预警信息数据
  ActWL({state,commit}){
    getRecordList()
    .then(function (response) {
      commit('changeWL',response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
}
export default {
  state, mutations,getters,actions,
} 