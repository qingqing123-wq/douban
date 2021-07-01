<template>
  <swiper ref="mySwiper" :options="swiperOption">
    <slot name="slide"></slot>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "carrousel",
  props: {
    delay: {
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
        // pagination: {
        //   el: ".swiper-pagination",
        // },
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
// .swiper-pagination {
//   bottom: -21px;
// }
</style>
