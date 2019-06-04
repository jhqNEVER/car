<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="验证码登陆" name="first">
        <div class="form_box">
          <yzmlogin></yzmlogin>
        </div>
      </el-tab-pane>
      <el-tab-pane label="密码登陆" name="second">
        <div class="form_box">
          <pwdlogin></pwdlogin>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="forget_pwd_box">
      <router-link to="updata">忘记密码</router-link>
      <a>
        还没有账号?
        <span class="red" @click="changeactive">立即注册</span>
      </a>
    </div>
  </div>
</template>

<script>
import yzmlogin from "./yzm_login.vue";
import pwdlogin from "./pwd_login.vue";
import { getTest } from "@/api/testApi";
//  activeName: "second",

// handleClick(tab, event) {
//   console.log(tab, event);
// }
export default {
  data() {
    return {
      select: 2,
      activeName: "first"
    };
  },
  components: {
    yzmlogin,
    pwdlogin
  },
  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
    },
    changeactive() {
      this.$emit("changeactive1", this.select);
    }
  }
};
</script>
<style scoped>
.l-tab-pane {
  width: 50% !important;
  text-align: center;
}
.form_box {
  width: 90%;
}
.yzm_span {
  width: 30%;
  float: left;
}
.yzm {
  /* width: 30%;
  margin-right: 0.4rem; */
}
.yzm_span2 {
  widows: 70%;
  float: right;
  position: relative;
  top: 0.08rem;
}
.el-button--primary {
  width: 80%;
  margin: 0 auto;
  background: #db0d17;
  border: none;
}
.forget_pwd_box {
  width: 80%;
  margin: 0 auto;
}
.forget_pwd_box a {
  font-size: 0.23rem;
  color: #cdced0;
  cursor: pointer;
}
.red {
  color: red;
}
.forget_pwd_box a:last-child {
  float: right;
}
</style>


