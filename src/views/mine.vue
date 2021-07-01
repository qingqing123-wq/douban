<template>
  <div>
    <Header title="我的">
      <template #image-two>
        <img src="./../assets/img/Mine/ic_settings.png" class="img-two" />
      </template>
    </Header>

    <ul class="top">
      <li>
        <a @click="dl()">
          <i class="el-icon-lock"></i>
          <span>密码管理</span>
        </a>
      </li>
      <li>
        <a href="##">
          <i class="el-icon-bank-card"></i>
          <span>银行卡密码</span>
          <!-- <i class="el-icon-arrow-right"></i> -->
        </a>
      </li>
    </ul>
    <ul class="bt">
      <li>
        <a href="##">
          <i class="el-icon-notebook-2"></i>
          <span>风险承受能力评估</span>
          <i class="el-icon-arrow-right"></i>
        </a>
      </li>
      <li>
        <a href="##">
          <i class="el-icon-document-add"></i>
          <span>安全保障</span>
          <i class="el-icon-arrow-right"></i>
        </a>
      </li>
      <li>
        <a href="##">
          <i class="el-icon-user"></i>
          <span>我的关注</span>
          <i class="el-icon-arrow-right"></i>
        </a>
      </li>
      <li>
        <a href="##">
          <i class="el-icon-phone-outline"></i>
          <span>帮助中心</span>
          <i class="el-icon-arrow-right"></i>
        </a>
      </li>
      <li>
        <a href="##">
          <i class="el-icon-user"></i>
          <span>关于我们</span>
          <i class="el-icon-arrow-right"></i>
        </a>
      </li>
      <li>
        <a href="##">
          <i class="el-icon-search"></i>
          <span>检查更新</span>
          <i class="el-icon-arrow-right"></i>
        </a>
      </li>
      <li>
        <a href="##">
          <i class="el-icon-headset"></i>
          <span>联系客服</span>
          <i class="el-icon-arrow-right"></i>
        </a>
      </li>
    </ul>

    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Header from "./../components/header/header";

export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    dl(){
      console.log(1)
      this.$router.replace('/login')
    }
  },
  components: {
    Header,
  
  },
};
</script>

<style scoped lang="less">
.header {
  position: relative;
  font-size: 0;
  .img-two {
    position: absolute;
    right: 0.1rem;
    font-size: 0.12rem;
  }
}
.top {
  display: flex;
  font-size: 0.12rem;
  border-bottom: 1px solid #ccc;
  li {
    flex: 1;
    > a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 0.8rem;
      i {
        color: #42bd56;
      }
    }
  }
}
.bt {
  font-size: 0.15rem;

  li {
    flex: 1;

    border-bottom: 1px solid #ccc;
    a {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 0.45rem;
      color: #c7c7c7;
      i {
        color: #42bd56;
      }
    }
  }
}
</style>
