<template>
  <div class="login-container">
    <div class="background-image">
      <img src="../assets/login.jpg" class="img-thumbnail login" alt="" />
    </div>
    <div class="login-box">
      <!-- 头像区域 -->
      <div class="text-center avatar-box">
        <img src="../assets/logo.png" class="img-thumbnail avatar" alt="" />
      </div>

      <!-- 表单区域 -->
      <div class="form-login p-4">
        <!-- 登录名称 -->
        <div class="form-group form-inline">
          <label for="username">登录名称</label>
          <input
            type="text"
            class="form-control ml-2"
            id="username"
            v-model="userName"
            placeholder="请输入登录名称"
            autocomplete="off"
          />
        </div>
        <!-- 登录密码 -->
        <div class="form-group form-inline">
          <label for="password">登录密码</label>
          <input
            type="password"
            class="form-control ml-2"
            id="password"
            v-model="passWord"
            placeholder="请输入登录密码"
          />
        </div>
        <!-- 登录和重置按钮 -->
        <div
          class="form-group form-inline d-flex justify-content-end my-button"
        >
          <button
            type="button"
            class="btn btn-secondary mr-2"
            style="margin-top: 10px; margin-right: 10px"
            @click="onClearInputText"
          >
            重置
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style="margin-top: 10px; margin-right: 10px"
            @click="onLoginClick"
          >
            登录
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/login";
// import { request1 } from "@/util/request1.js";
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      passWord: "",
    };
  },
  methods: {
    async onLoginClick() {
      let paramData = {
        userName: this.userName,
        passWord: this.passWord,
      };
      let axiosResponse = login(paramData);
      if (axiosResponse) {
        localStorage.setItem("token", axiosResponse.token);
        await this.$router.push("/userInfo");
      }
    },
    onClearInputText() {
      this.userName = "";
      this.passWord = "";
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  background-color: #35495e;
  height: 100%;
  .background-image {
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
  }
  .login-box {
    width: 400px;
    height: 250px;
    background-color: #cb9c9c;
    border-radius: 15px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
    .form-login {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      box-sizing: border-box;
    }
  }
}

.form-control {
  flex: 1;
}

.avatar-box {
  position: absolute;
  width: 100%;
  top: -65px;
  left: 0;
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50% !important;
    box-shadow: 0 0 6px #efefef;
  }
}
</style>
