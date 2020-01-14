import axios from 'axios'
import { Message } from 'element-ui'
import {getCookie,setCookie} from './cookie'
import router from "../router";
// 创建axios实例
var baseURL = 'http://127.0.0.1:8199';

const service = axios.create({
    baseURL, // api的base_url
    timeout: 120000,// 请求超时时间,
    withCredentials: true, //跨域证书
})

export {service}