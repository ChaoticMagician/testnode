import { getStatisticsList,getStatisticsMonth,getStatisticsSeason,getStatisticsYear,getStatisticsDate } from '../api/dataQueryApi.js';
const state = {
  statisticsList:[],
}
const mutations = {
  changeSL(state,newvalue){
    state.statisticsList = newvalue;
  },
}
const getters = {
  getSL: state => {
    return stat.statisticsList;
  },
};
const actions = {
  //获取数据统计数据
  ActSL({state,commit}){
    getStatisticsList()
    .then(function (response) {
      if(response.data.data==''){response.data.data=[]}
      commit('changeSL',response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  ActSLMonth({state,commit},date){//获取月数据统计数据
    getStatisticsMonth(date)
    .then(function (response) {
      if(response.data.data==''){response.data.data=[]}
      commit('changeSL',response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  ActSLSeason({state,commit},date){
    getStatisticsSeason(date)
    .then(function (response) {
      if(response.data.data==''){response.data.data=[]}
      commit('changeSL',response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  ActSLYear({state,commit},date){
    getStatisticsYear(date)
    .then(function (response) {
      if(response.data.data==''){response.data.data=[]}
      commit('changeSL',response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  ActSLDate({state,commit},date){
    getStatisticsDate(date)
    .then(function (response) {
      if(response.data.data==''){response.data.data=[]}
      commit('changeSL',response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
}
export default {
  state, mutations,getters,actions,
} 