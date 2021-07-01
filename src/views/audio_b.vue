<template>
<div class="audio_b">
    <Header title="书影音">
    <template #image-one>
        <img
        src="./../assets/img/Group/ic_chat_green.png"
        class="img-one"
        slot="image-one"
        />
    </template>
    <template #image-two>
        <img
        src="./../assets/img/Group/ic_actionbar_search_icon.png"
        class="img-two"
        />
    </template>
    </Header>
    <ul class="nlist">
    <li v-for="item in navlist" :key="item.text">
        <router-link :to="item.path">
        <span>{{ item.text }}</span>
        </router-link>
    </li>
    </ul>
    <router-view></router-view>
</div>
</template>

<script>
import Header from "./../components/header/header";
export default {
props: {},
data() {
    return {
    navlist: [
        {
        path: "/audio_b/movie",
        text: "电影",
        },
        {
        path: "/audio_b/book",
        text: "读书",
        },
        {
        path: "/audio_b/tv",
        text: "电视",
        },
        {
        path: "/audio_b/city",
        text: "城市",
        },
        {
        path: "/audio_b/music",
        text: "音乐",
        },
    ],
    };
},
methods: {},
components: {
    Header,
},
};
</script>

<style scoped lang="less">
.audio_b{
    .nlist{
        height:.29rem ;
        display: flex;
        li{
            flex: 1;
            a{
                display: flex;
                height: 100%;
                justify-content: center;
                align-items: center;
                font-size: .12rem;
                color: #999;
                border-bottom: 1px solid #ccc;
                &.router-link-active{
                    background: #07d614;
                    color: #fff;
                    border-bottom: #07d614 ;
                }
            }
        }
    }
}
</style>
