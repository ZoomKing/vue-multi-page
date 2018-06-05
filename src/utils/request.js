import axios from 'axios'
import api from '../api'
axios.defaults.baseURL =api.data;


// 添加请求拦截器
axios.interceptors.request.use( (config)=>{
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export function get(options){
    return new Promise((resolve,reject) => {
        axios.get(options.url,{
            params:options.params
        })
          .then(response => {
            resolve(response.data);
          })
          .catch(err => {
            reject(err)
          })
      })
}

export function post(options){
    return new Promise((resolve,reject) => {
        axios.post(options.url,options.data)
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
      })
}


