<!--
 * @Author: your name
 * @Date: 2021-04-10 18:42:27
 * @LastEditTime: 2021-04-20 09:56:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \douban\src\App.vue
-->
<template>
    <div id="app">
      <router-view></router-view>
      <Tabbar></Tabbar>
    </div>
</template>
<script>
import Tabbar from './components/tabbar/tabber'
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {

    },
    components: {
Tabbar,
    },
};
</script>

<style scoped lang="less">
#app{
    height: 100%;
}
</style>
