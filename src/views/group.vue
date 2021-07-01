<template>
    <div>
 <Header title="小组">
    <template #image-one>
         <img src="./../assets/img/Group/ic_chat_green.png" class="img-one" slot="image-one">
    </template>
    <template #image-two>
         <img src="./../assets/img/Group/ic_actionbar_search_icon.png" class="img-two" >
    </template>
 </Header>
  <div class="team" v-for="item in group" :key="item.title">
      <p class="title">{{ item.title}}</p>
      <div class="center" v-for="ite in item.group_list" :key="ite.gtoup_name">
        <div class="content">
          <div>
            <img :src="ite.img_url" alt="" />
            <span class="img_a"> {{ ite.group_name }} </span>
          </div>
          <span> {{ ite.group_member }} </span>
        </div>
        <p>{{ ite.topic_title }}</p>
      </div>
    </div>
  </div>
   
</template>

<script>
import Header from './../components/header/header'
import request from './../components/request/index'
export default {
    props: {

    },
    data() {
        return {
    group:[{

}]
        };
    },
    methods: {

    },
    components: {
 Header,
    },
     mounted() {
    request({
      url: "/group",
      method: "get",
    }).then((res) => {
     console.log(res);
     this.group=res.group
    });
  },
};
</script>

<style scoped lang="less">
.team{
  font-size: 0;
  padding: 0.1rem;
  .title {
    font-size: 0.15rem;
    margin-left: 0.15rem;
  }
  .center {
    height: 0.98rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .content {
      display: flex;
      flex-direction: initial;
      justify-content: space-between;
      align-items: center;
      div {
        height: 0.55rem;
        display: flex;
        align-items: center;
        img {
          width: 0.4rem;
          height: 0.4rem;
          margin-right: 0.1rem;
        }
        .img_a {
          font-size: 0.12rem;
        }
      }
      span {
        font-size: 0.12rem;
        color: #ccc;
      }
    }
    p {
      font-size: 0.13rem;
      color: #ccc;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}

</style>
