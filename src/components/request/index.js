// 数据请求相关api
import axios from 'axios'
export default function(config) {
    const instance = axios.create({
        baseURL: '/api',

    });
    //添加请求拦截器
    instance.interceptors.request.use(function(config) {
        //在发送请求之前做点什么
        let token = sessionStorage.getItem('token');
        if (token) {
            config.headers['token'] = token;
        }
        return config;
    }, function(error) {
        return Promise.reject(error)

    });
    //添加响应拦截器
    instance.interceptors.response.use(function(response) {
        //对响应数据做点什么
        return response.data;
    }, function(err) {
        //对响应错误做点什么
        return Promise.reject(error);

    })
    return instance(config);
}