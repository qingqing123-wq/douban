<template>
  <div>
    <Header>
      <template #image-t>
        <div class="home">
          <img
            src="./../assets/img/Home/img/ic_group_search_small.png"
            class="img-t"
            slot="image-t"
          />
          <input type="text" />
          <img
            src="./../assets/img/Home/img/ic_scan_gray.png"
            class="image-one"
            slot="image-one"
          />
          <template>
            <img
              src="./../assets/img/Home/img/ic_chat_white.png"
              class="image-two"
              slot="image-two"
            />
          </template>
        </div>
        <button>
          <template>
            <img
              src="./../assets/img/Home/img/1.png"
              class="image-1"
              slot="img-1"
            />
          </template>
        </button>
      </template>
    </Header>
    <Carrouse :delay="time" effect="cube">
      <template #slide>
        <swiper-slide>
          <img src="./../assets/img/Home/img/01.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./../assets/img/Home/img/02.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./../assets/img/Home/img/03.jpg" alt="" />
        </swiper-slide>
      </template>
    </Carrouse>
      <ul class="center">
        <li v-for="item in list.recommend_feeds" :key="item.id">
          <div>
            <p>{{item.title}}</p>
            <span>{{item.target.desc}}</span>
            <i>作者:{{item.target.author.name}}</i>
          </div>
          
          <img :src="item.target.cover_url" alt="">
        </li>
       
      </ul>
    </div>
</template>

<script>
import Header from "./../components/header/header";
import Carrouse from "./../components/carrouse";
import request from "./../components/request/index.js";
export default {
  props: {},
  data() {
    return {
      time: 2000,
    list:[{
 
    }]
    };
  },
  methods: {
  
  },
  components: {
    Header,
    Carrouse,
  },
  mounted() {
    request({
      url: "/home",
      method: "get",
    }).then((res) => {
     console.log(res);
     this.list=res
    });
  },
};

</script>

<style scoped lang="less">
.header {
  background: #48bd5a;
}
.home {
  position: relative;
  left: 0.6rem;
  top: 0.08rem;
  width: 2rem;
  height: 0.3rem;
  background: #fff;
  border-radius: 0.05rem;

  .img-t {
    position: absolute;
    left: 0.1rem;
  }
  .image-one {
    position: absolute;
    left: 1.7rem;
  }
  .image-two {
    position: absolute;
    left: 2.2rem;
  }
}
button {
  width: 0.3rem;
  height: 0.25rem;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  background: #48bd5a;
}
.center{
 font-size: 0;
  padding: 0.12rem;
  padding-bottom: 0;
  li {
    width: 100%;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 1.95rem;
      height: 1rem;
      p {
        font-size: 0.15rem;
      }
      span {
        display: -webkit-box;
        font-size: 0.12rem;
        color: #aaa;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: wrap;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      i {
        font-size: 0.12rem;
        color: #ccc;
      }
    }
    img {
      width: 1rem;
      height: 1rem;
    }
  }
}

</style>
