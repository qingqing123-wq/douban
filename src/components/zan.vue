<template>
  
      <ul class="deng">
    <li>
      <i class="el-icon-thumb" @click="aa(zan)"></i>
      <span> {{ zan }} </span>
    </li>
    <li>
      <i class="el-icon-chat-line-square"></i>
      <span> {{ xin }} </span>
    </li>
    <li>
      <i class="el-icon-refresh"></i>
      <span> {{ zhan }} </span>
    </li>
  </ul>

</template>

<script>
export default {
  props: {},
  data() {
    return {
      zan: 26,
      xin: 14,
      zhan: 25,
    };
  },
  methods: {
    aa(zan) {
      if ((this.zan = zan)) {
        this.zan += 1;
      } else {
        this.zan -= 1;
      }
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
.deng {
  height: 0.68rem;
  font-size: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
  li {
    display: flex;
    flex-direction: inherit;
    justify-content: space-evenly;
    width: 0.6rem;
    i {
      font-size: 0.2rem;
    }
    span {
      font-size: 0.12rem;
    }
  }
}
</style>