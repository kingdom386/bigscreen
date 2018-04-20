import axios from 'axios';
import { Message } from 'element-ui';

const baseURL = 'http://192.168.3.26:6126/';
const timeout = 5000;

// 创建axios请求实例
const instance = axios.create({
  baseURL,
  timeout
});

// 请求拦截器
instance.interceptors.request.use(config => {
  return config;
}, error => {
  Promise.reject(error);
});

instance.interceptors.response.use(config => config, error => {
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  });
  return Promise.reject(error);
});

export default instance;
