import axios from 'axios';
// import Qs from 'qs';
import Cookies from 'js-cookie';
import { Message } from 'element-ui';
import store from '@/store';

const baseURL = 'http://192.168.3.71:8526';
const timeout = 5000;

// 创建axios请求实例
const instance = axios.create({
  baseURL,
  timeout,
  headers: {'Content-Type': 'application/json;charset=utf-8'}
});

// 请求拦截器
instance.interceptors.request.use(config => {
  // 请求的头部都带有token
  if (!store.getters.token) {
    config.headers['Authorization'] = Cookies.get('Token');
  }
  config.data = JSON.stringify(config.data);
  return config;
}, error => {
  Promise.reject(error);
});

instance.interceptors.response.use(config => {
  const code = config.data.code;
  if (code === 200) {
    return config.data.data;
  }
}, error => {
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  });
  return Promise.reject(error);
});

export default instance;
