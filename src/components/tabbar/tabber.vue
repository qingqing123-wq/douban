<template>
<ul class="tabbar">
    <li v-for="item in navlist" :key="item.text">
        <router-link :to="item.path">
            <img :src="item.normal" class="normal">
            <img :src="item.active" class="active">
            <span>{{item.text}}</span>
        </router-link>
    </li>
    
</ul>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
navlist:[{
    path:'/home',
    text:'首页',
    active:require('./../../assets/img/footer/ic_tab_home_active.png'),
    normal:require('./../../assets/img/footer/ic_tab_home_normal.png')
},{
    path:'/audio_b',
    text:'书影音',
    active:require('./../../assets/img/footer/ic_tab_subject_active.png'),
    normal:require('./../../assets/img/footer/ic_tab_subject_normal.png'),
    children:{
        
    }
},{
    path:'/broadcast',
    text:'广播',
    active:require('./../../assets/img/footer/ic_tab_status_active.png'),
    normal:require('./../../assets/img/footer/ic_tab_status_normal.png')
},{
    path:'/group',
    text:'小组',
    active:require('./../../assets/img/footer/ic_tab_group_active.png'),
    normal:require('./../../assets/img/footer/ic_tab_group_normal.png')
},{
    path:'/mine',
    text:'我的',
    active:require('./../../assets/img/footer/ic_tab_profile_active.png'),
    normal:require('./../../assets/img/footer/ic_tab_profile_normal.png')
},]
        };
    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="less">
.tabbar{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: .49rem;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    background: #fff;
    
    li{
        font-size: 0;
        flex: 1;
        a{
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #666;
            font-size:.12rem ;
            img{
                width: .3rem;
            }
            .normal{
                display: block;
            }
            .active{
                display: none;
            }
            &.router-link-active{
                color:#42bd56 ;
                .normal{
                display: none;
            }
            .active{
                display: block;
            }
            }
        }
    }
}
</style>
