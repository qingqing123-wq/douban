/*
 * @Author: your name
 * @Date: 2021-04-10 18:42:27
 * @LastEditTime: 2021-04-13 14:20:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \付-豆瓣e:\作业131\Vue\douban\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )


Vue.config.productionTip = false
    //引入样式重置
import './assets/css/common.css'
//引入移动端响应式文件
import { obj } from './assets/js/utils.js'

//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//添加请求拦截器
axios.interceptors.request.use(function(config) {
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
axios.interceptors.response.use(function(response) {
    //对响应数据做点什么
    return response.data;
}, function(err) {
    //对响应错误做点什么
    return Promise.reject(error);

})
new Vue({
    router,
    mounted() {
        obj.setRem();
        window.onresize = obj.setRem
    },
    store,
    render: h => h(App)
}).$mount('#app')