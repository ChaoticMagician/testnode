import { getUseList } from '../api/dataQueryApi.js';
const state = {
  userType: [
    {value: 1,label: '管理员'},
    {value: 2,label: '游客'}, 
    {value: 3,label: '守秘人'},
    {value: 4,label: '调查员'},
    {value: 5,label: '观众'}
  ],
  seasonType: [
    {value:['202001','202003'],label: '第一季度'},
    {value:['202004','202006'],label: '第二季度'}, 
    {value:['202007','202009'],label: '第三季度'},
    {value:['2020010','2020012'],label: '第四季度'},
  ],
  registerStatus:[
    {value:'待审核',keyid:0},
    {value:'已确认',keyid:1},
    {value:'已驳回',keyid:2},
  ],
  registerType:[
    {value:'入库',keyid:0},
    {value:'出库',keyid:1},
    {value:'货损',keyid:2},
  ],
  userList:[

  ],
  thisUser:{
    userId:'7'
  }
}
const mutations = {
  changeUL(state,newvalue){
    state.userList = newvalue;
  },
  changeThisUser(state,newvalue){
    state.thisUser = newvalue;
  },
}
const getters = {
};
const actions = {
  //获取商品列表数据数据
  ActUL({state,commit}){
    getUseList()
    .then(function (response) {
      commit('changeUL',response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
}
export default {
  state,mutations,getters,actions
} 