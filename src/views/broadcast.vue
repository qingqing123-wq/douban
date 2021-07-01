<template>
  <div class="broadcast">
    <Header title="广播">
      <template #image-one>
        <img
          src="./../assets/img/Group/ic_chat_green.png"
          class="img-one"
          slot="image-one"
        />
      </template>
      <template #image-two>
        <img
          src="./../assets/img/broadcast/ic_status_search_user.png"
          class="img-two"
        />
      </template>
    </Header>
    <div class="dl">
      <img src="./../assets/img/broadcast/user_normal.jpg" />
      <span>登录发广播</span>
    </div>
    <div class="dou">
      <span>豆</span>
      <span>豆瓣</span>
      <span>写了日记</span>
      <span>2018-05-23 10:39:23</span>
    </div>
    <div class="content">
        <div class="one">
            <span>5月24日凌晨3:00~6:00豆瓣停机维护</span>
        </div>
        <div class="two">
            <span>因业务发展需要,豆瓣计划于5月24日(星期四)凌晨3:00~6:00对服务器进行机房迁移,迁移期间全部豆瓣相关...</span>
        </div>
    </div>
        <Zan></Zan>
    
  </div>
  
</template>

<script>
import Header from "./../components/header/header";
import Zan from "./../components/zan.vue"
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {
    Header,
    Zan,
  },
};
</script>

<style scoped lang="less">
.broadcast{
    height: 100%;
}
.dl {
  font-size: 0.13rem;
  width: 100%;
  height: 0.58rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding: 0.2rem;
  background: white;
  img {
    border-radius: 50%;
    width: 0.35rem;
    height: 0.35rem;
  }
  span {
    color: #ccc;
    padding: 0.1rem;
  }
}
.dou {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 0.75rem;
    text-align: center;
    margin: 0.2rem 0.3rem 0.2rem 0.2rem;
    span:nth-of-type(1) {
    width: 0.45rem;
    height: 0.45rem;
    font-size: 0.26rem;
    line-height: 0.42rem;
    color: #fff;
    border-radius: 50%;
    background: #06c112;

}
span:nth-of-type(2) {
    font-size: .2rem;
    color: #000;
    margin-left:.1rem ;
}
span:nth-of-type(3){
    font-size: .2rem;
    color: #ccc;
    margin-left: .1rem;
}
span:nth-of-type(4){
    position: absolute;
    top: 1.7rem;
    left: .7rem;
    font-size: .1rem;
    color: #ccc;
}
}
.content{
    // font-size: .2rem;
    width: 2.3rem;
    height: 1.1rem;
    background:#F9F9F9 ;
    margin-left:.7rem ;
    .one{
        font-size: .17rem;
        margin: .2rem .1rem 0rem .2rem;
    }
    .two{
        font-size: .1rem;
        margin:.12rem .1rem 0rem .2rem;
        color: #ADADAD;
    }
}
</style>
