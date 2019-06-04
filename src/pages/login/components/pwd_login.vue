<template>
  <div>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
      <el-form-item label prop="f_Account">
        <el-input v-model="ruleForm2.f_Account" placeholder="手机号/用户名（老用户）"></el-input>
      </el-form-item>
      <el-form-item label prop="f_Password">
        <el-input
          type="password"
          v-model="ruleForm2.f_Password"
          placeholder="输入密码"
          auto-complete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label prop="checkPass">
        <span class="yzm_span">
          <el-input
            type="text"
            class="yzm"
            v-model="ruleForm2.checkPass"
            placeholder="输入验证码"
            auto-complete="off"
          ></el-input>
        </span>
        <span class="yzm_span2">
          <yanzhengma @transferUser2="getUser2" class="yzm_span_img"></yanzhengma>
        </span>
      </el-form-item>
      <el-form-item>
        <div class="btn_box">
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import yanzhengma from "./yzm2.vue";
import { userpwdlogin } from "@/api/testApi";
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入手机号/用户名"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (value !== this.user) {
        callback(new Error("验证码不正确!"));
      } else {
        callback();
      }
    };
    return {
      logindata: "",
      user: "",
      checkPass: "",
      ruleForm2: {
        f_Password: "",
        f_Account: "",
        type: "",
        loginClientType: "PC"
      },
      rules2: {
        f_Password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        f_Account: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  components: {
    yanzhengma
  },
  methods: {
    httpGet() {
      userpwdlogin(
        "/api/services/app/WeChatUser/UserLoginApi",
        this.ruleForm2
      ).then(response => {
        if (response.data.result === false) {
          alert("用户名或密码错误");
          return false;
        } else if (response.data.result === 2001) {
          alert("用户被禁用");
          return false;
        } else {
          //alert("登陆成功!");
          //console.log(response.data.result[0].id);
          this.$cookieStore.setCookie(
            "username",
            response.data.result[0].id,
            7200
          );
          this.$router.push({ name: "buyCar" });
        }
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // console.log("111" + this.logindata);

          this.httpGet();
        } else {
          //console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getUser2(msg) {
      this.user = msg;
    }
  }
};
</script>
<style scoped>
.form_box {
  width: 90%;
}
.yzm_span {
  width: 30%;
  float: left;
}
.yzm {
  width: 100%;
}
.yzm_span2 {
  width: 68%;
  float: right;
  position: relative;
  top: 2px;
}
.btn_box {
  width: 100%;
  padding-top: 0.2rem;
}
.el-button--primary {
  width: 90%;
  margin-left: 10%;
  background: #db0d17;
  border: none;
}
.forget_pwd_box {
  width: 90%;
  margin-left: 10%;
}
.forget_pwd_box a {
  font-size: 0.13rem;
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

