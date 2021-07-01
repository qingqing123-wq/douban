/*
 * @Author: your name
 * @Date: 2021-04-10 18:39:52
 * @LastEditTime: 2021-04-13 20:17:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \付-豆瓣e:\作业131\Vue\douban\vue.config.js
 */
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.1.40:3000',
                pathRewrite: { '^/api': '' }
            },
        },
    },
}