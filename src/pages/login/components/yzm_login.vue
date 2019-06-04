<template>
  <div>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
      <el-form-item label prop="pass">
        <el-input
          type="text"
          v-model="ruleForm2.pass"
          auto-complete="off"
          placeholder="手机号/用户名（老用户）"
        ></el-input>
      </el-form-item>
      <el-form-item label prop="checkPass">
        <span>
          <el-input
            class="yzm"
            type="text"
            v-model="ruleForm2.checkPass"
            auto-complete="off"
            placeholder="输入验证码"
          ></el-input>
        </span>
        <span class="yzm_img">
          <yanzhengma @transferUser1="getUser1"></yanzhengma>
        </span>
      </el-form-item>
      <el-form-item label prop="age">
        <span>
          <el-input class="phone" v-model="ruleForm2.age" placeholder="手机图形验证码"></el-input>
        </span>
        <span>
          <input type="button" class="phone_btn" @click="httpGet()" value="获取手机验证码">
          <!-- <div class="phone_btn" @click="httpGet()">获取手机验证码</a> -->
          <!-- <p>{{phoneData}}</p> -->
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
import yanzhengma from "./yzm1.vue";
import { getTest } from "@/api/testApi";
import { usermesslogin } from "@/api/testApi";
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机验证码不能为空"));
      } else if (value != this.phoneData) {
        callback(new Error("验证码输入不正确"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号/用户名"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        this.httpdata.f_Account = value;
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (value !== this.user1) {
        callback(new Error("验证码不正确!"));
      } else {
        callback();
      }
    };
    return {
      user1: "",
      phoneData: "",
      ruleForm2: {
        pass: "",
        checkPass: "",
        age: ""
      },
      httpdata: {
        f_Password: "",
        f_Account: "",
        type: "TEL",
        loginClientType: "PC"
      },

      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  components: {
    yanzhengma
  },
  methods: {
    httpGet() {
      getTest(
        "/api/services/app/cwkjwechatapi/MsgContentSend?usertel=" +
          this.ruleForm2.pass
      ).then(response => {
        this.phoneData = response.data.result;
      });
    },
    // 点击登陆
    httpGet1() {
      console.log(this.httpdata.keyCode);
      usermesslogin(
        "/api/services/app/WeChatUser/UserLoginApi",
        this.httpdata
      ).then(response => {
        if (response.data.result === false) {
          alert("用户名不存在或者错误");
          return false;
        } else if (response.data.result === 2001) {
          alert("用户被禁用");
          return false;
        } else {
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
          this.httpGet1();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getUser1(msg) {
      this.user1 = msg;
    }
  }
};
</script>
<style scoped>
.yzm {
  width: 30%;
  float: left;
}
.yzm_img {
  box-sizing: border-box;
  width: 70%;
  padding-left: 10px;
  float: left;
}
.phone {
  width: 50%;
  border: none;
}
.phone_btn {
  padding: 9px;
  background: #cdced0;
  color: #696868;
  cursor: pointer;
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

