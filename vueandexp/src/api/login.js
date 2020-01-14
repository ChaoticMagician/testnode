import {service}from './request.js'

export function login(username, password) {
  let requestdata =  service({
    url: '/api/Token',
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