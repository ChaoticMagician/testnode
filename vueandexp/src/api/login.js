import {service}from './request.js'

export function login(userID, password) {
  let requestdata =  service({
    url: '/api/user/login',
    method: 'post',
    data: {
      passWord: password,
      userId: userID,
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