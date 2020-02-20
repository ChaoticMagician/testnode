import {service}from './request.js'
//产品种类列表、增、删、改、查、
export function getGoodsList() {
  let requestdata =  service({
    url: '/api/goods',
    method: 'get',
  });
  return requestdata;
};
export function addGoogs(goodsInfo) {
  let requestdata =  service({
    url: '/api/goods',
    method: 'post',
    data: goodsInfo
  });
  return requestdata;
};
export function deleteGoogs(goodsCode) {
  let requestdata =  service({
    url: '/api/goods/'+goodsCode,
    method: 'delete',
  });
  return requestdata;
};
export function changeGoogs(goodsInfo) {
  let requestdata =  service({
    url: '/api/goods/'+goodsInfo.goodsCode,
    method: 'put',
    data:goodsInfo
  });
  return requestdata;
};
export function getGoogs(goodsCode) {
  let requestdata =  service({
    url: '/api/goods/'+goodsCode,
    method: 'get',
  });
  return requestdata;
};
//获取用户列表
export function getUseList() {
  let requestdata =  service({
    url: '/api/Value',
    method: 'get',
  });
  return requestdata;
};
//仓库记录列表、增、删、改、
export function getRegisterList() {
  let requestdata =  service({
    url: '/api/Bound',
    method: 'get',
  });
  return requestdata;
};
export function addRegister(registerInfo) {
  let requestdata =  service({
    url: '/api/Bound',
    method: 'post',
    data: registerInfo
  });
  return requestdata;
};
export function deleteRegister(formCode) {
  let requestdata =  service({
    url: '/api/Bound/'+formCode,
    method: 'delete',
  });
  return requestdata;
};
export function changeRegister(registerInfo) {
  let requestdata =  service({
    url: '/api/Bound/'+registerInfo.formCode,
    method: 'put',
    data:registerInfo
  });
  return requestdata;
};
//表单审查的链接
export function Audit(registerInfo) {
  let requestdata =  service({
    url: '/api/Audit/'+registerInfo.goodsCode,
    method: 'put',
    data:registerInfo
  });
  return requestdata;
};
//预警规则列表、增、删、改、
export function getRuleList() {
  let requestdata =  service({
    url: '/api/WarnRule',
    method: 'get',
  });
  return requestdata;
};
export function addRule(ruleInfo) {
  let requestdata =  service({
    url: '/api/WarnRule',
    method: 'post',
    data: ruleInfo
  });
  return requestdata;
};
export function deleteRule(id) {
  let requestdata =  service({
    url: '/api/WarnRule/'+id,
    method: 'delete',
  });
  return requestdata;
};
export function changeRule(ruleInfo) {
  let requestdata =  service({
    url: '/api/WarnRule/'+ruleInfo.id,
    method: 'put',
    data:ruleInfo
  });
  return requestdata;
};
//预警信息列表
export function getRecordList() {
  let requestdata =  service({
    url: '/api/WarnRecord',
    method: 'get',
  });
  return requestdata;
};
//统计数据列表
export function getStatisticsList() {
  let requestdata =  service({
    url: '/api/Statistics',
    method: 'get',
  });
  return requestdata;
};
export function getStatisticsMonth(date) {//按月份查询
  let requestdata =  service({
    url: '/api/Statistics/Month/'+date,
    method: 'get',
  });
  return requestdata;
};
export function getStatisticsSeason(date) {//按季度份查询
  let requestdata =  service({
    url: '/api/Statistics/Season/'+date[0]+'/'+date[1],
    method: 'get',
  });
  return requestdata;
};
export function getStatisticsYear(date) {//按年份查询
  let requestdata =  service({
    url: '/api/Statistics/Year/'+date,
    method: 'get',
  });
  return requestdata;
};
export function getStatisticsDate(date) {//按时段查询
  let requestdata =  service({
    url: '/api/Statistics/Date/'+date[0]+'/'+date[1],
    method: 'get',
  });
  return requestdata;
};
//库存查询
export function getInventoryList() {
  let requestdata =  service({
    url: '/api/Inventory',
    method: 'get',
  });
  return requestdata;
};
