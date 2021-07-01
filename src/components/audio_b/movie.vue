<template>
  <div>
    <div class="ying">
      <div class="zhen_ying">
        <p class="aaa_p">{{ list.title }}</p>
        <Carrousel class="aaa">
          <template #slide>
            <swiper-slide
              class="aaa_a"
              v-for="item in list.list"
              :key="item.id"
            >
              <img :src="item.cover" alt="" />
              <p>{{ item.title }}</p>
              <span>评分：{{ item.rate }} </span>
            </swiper-slide>
          </template>
        </Carrousel>
      </div>
      <div class="zhen_ying">
        <p class="aaa_p">{{ lists.title }}</p>
        <Carrousel  class="aaa" 
         :spaceBetween="spaceBetween"
          :slidesPerView="slidesPerView"
        :delay="delay">
          <template #slide>
            <swiper-slide
              class="aaa_a"
              v-for="item in lists.list"
              :key="item.id"
            >
              <img :src="item.cover" alt="" />
              <p>{{ item.title }}</p>
              <span>评分：{{ item.rate }} </span>
            </swiper-slide>
          </template>
        </Carrousel>
      </div>
    </div>
  </div>
</template>

<script>
import move from "./../request/index.js";
import Carrousel from "./../carrousel";
export default {
  props: {},
  data() {
    return {
      list: [],
      slidesPerView: 3,
      spaceBetween: 10,
      delay: 1000,
      lists: [],
    };
  },
  methods: {},
  components: {
    Carrousel,
  },
  
  mounted() {
    move({
      url: "/movie_now",
      method: "get",
    }).then((res) => {
      this.list = res.subjects;
      console.log(res);
    });
     move({
      url: "/movie_future",
      method: "get",
    }).then((res) => {
      this.lists = res.subjects;
      console.log(this.lists);
    });
  },
};
</script>

<style scoped lang="less">
.ying {
  font-size: 0;
  padding: 0.11rem;
  padding-right: 0;
  .zhen_ying {
    height: 2.25rem;
    .aaa {
      height: 1.92rem;
      .aaa_a {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        img {
          width: 1.1rem;
          height: 1.43rem;
        }
        p {
          width: 0.8rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 0.14rem;
          text-align: center;
        }
        span {
          text-align: center;
          font-size: 0.12rem;
          color: #ccc;
        }
      }
    }
    .aaa_p {
      font-size: 0.16rem;
      font-weight: bold;
      margin-bottom: 0.1rem;
      margin-left: 0.14rem;
    }
  }
}
</style>
