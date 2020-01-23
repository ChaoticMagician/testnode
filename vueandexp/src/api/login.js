import {service}from './request.js'

export function login(username, password) {
  let requestdata =  service({
    url: '/api/login',
    method: 'post',
    data: {
      id: 0,
      userName: username,
      passWord: password,
      duty: "",
      userId: "",
      role: "",
      other: "",
      realName: "",
      phone: "",
    }
  });
  return requestdata;
};
export function getuserlist() {
  let requestdata =  service({
    url: '/api/user',
    method: 'get',
  });
  return requestdata;
};