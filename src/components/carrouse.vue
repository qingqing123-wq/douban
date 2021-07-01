<!--
 * @Author: your name
 * @Date: 2021-04-10 18:42:28
 * @LastEditTime: 2021-04-13 10:33:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \付-豆瓣e:\作业131\Vue\douban\src\components\carrouse.vue
-->
<template>
  <swiper ref="mySwiper" :options="swiperOption" bindchange="swiperChange">
    <slot name="slide"></slot>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "carrouse",
  props: {
    delay: {
      time:3000,
      type: Number,
    },
    effect: {
      type: String,
    },
  },

  data() {
    return {
      swiperOption: {
        // autoplay: {
        //   delay: this.delay,
        //   disableOnInteraction: false,
   
        // },
        slidesPerView: 3,
        spaceBetween: 20,
        effect: this.effect,
     
        pagination: {
          el: ".swiper-pagination",
     
        },
       lazy:{
          loadPrevNext:true
       }
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    this.swiper.slideTo(0, 1000, false);
  },
};

</script>

<style scoped lang="less">
.swiper-pagination {
  bottom: -21px;
}
</style>
