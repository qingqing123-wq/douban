<template>
  <div class="login">
    <el-form
      :label-position="labelPosition"
      :model="formLabelAlign"
      class="login_form"
      :rules="rules"
      ref="formLabelAlign"
    >
      <el-form-item prop="name">
        <el-input
          v-model="formLabelAlign.name"
          prefix-icon=" el-icon-user"
          class="login_input"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="formLabelAlign.pwd"
          show-password
          prefix-icon="el-icon-unlock"
          class="login_input"
        ></el-input>
      </el-form-item>
      <el-button
        type="primary"
        class="login_btn"
        @click="onSubmit('formLabelAlign')"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>

export default {
  props: {},
  data() {
    return {
      labelPosition: "left",
      formLabelAlign: {
        name: "admin",
        pwd: "123456",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 6到 10 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    onSubmit(formName) {
       this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios
            .post("api/login", {
              username: this.formLabelAlign.name,
              password: this.formLabelAlign.pwd,
            })
            .then((res) => {
              if (res.token === undefined) {
                this.$message({
                  message: "该账号未注册",
                  type: "error",
                });
              } else {
                this.$message({
                  message: "恭喜你,登录成功",
                  type: "success",
                  duration: 1000,
                  onClose: () => {
                    window.sessionStorage.setItem("token", res.token);
                    this.$router.push("/home");
                  },
                });
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
},
  components: {},
  }
</script>

<style  lang="less">
.login {
  z-index: 999;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.3rem;
    background-color: #ccc;
    border-radius: 10px;
    .login_input {
      width: 2.5rem;
    }
    .login_btn {
      width: 45%;
    }
  }
}
</style>
