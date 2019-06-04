<template>
  <!-- 会员登陆 -->
  <div class="vip">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
      <el-form-item label prop="age">
        <el-input v-model.number="ruleForm2.age" placeholder="手机号(登录账号)"></el-input>
      </el-form-item>
      <el-form-item label prop="name">
        <el-input v-model="ruleForm2.name" placeholder="登录名"></el-input>
      </el-form-item>
      <el-form-item label prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" placeholder="输入密码" auto-complete="off"></el-input>
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
      <el-form-item label prop="phoneNumber">
        <span class="yzm_span">
          <el-input
            type="text"
            class="yzm"
            v-model="ruleForm2.phoneNumber"
            placeholder="输入手机验证码"
            auto-complete="off"
          ></el-input>
        </span>
        <span class="yzm_span2">
          <input type="button" class="message" @click="httpGet()" value="获取手机验证码">
          <!-- <button class="message" @click="httpGet">{{message}}1</button> -->
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
import yanzhengma from "./yzm4.vue";
import { getTest } from "@/api/testApi";
import { userRegistration } from "@/api/testApi";
import { hasRegistration } from "@/api/testApi";

export default {
  data() {
    var checkAge = (rule, value, callback) => {
      this.registration.f_Mobile = value;
      // this.hasTel();
      // console.log("header" + this.hasTelcount);
      if (!value) {
        return callback(new Error("请输入手机号(登录账号)"));
      } else if (value.length < 11) {
        return callback(new Error("请输入11位手机号码"));
      } else {
        hasRegistration(
          "api/services/app/WeChatUser/GetWeChatUserIsExist?type=" +
            2 +
            "&keyCode=" +
            value
        ).then(response => {
          if (response.data.result === false) {
            return callback();
          } else if (response.data.result === true) {
            return callback(new Error("手机号码已经存在"));
          }
        });
      }
    };
    var validatePass = (rule, value, callback) => {
      this.registration.f_Password = value;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6) {
        callback(new Error("密码长度不能小于6位"));
      } else {
        callback();
      }
    };
    var username = (rule, value, callback) => {
      this.registration.f_UserName = value;

      if (value === "") {
        callback(new Error("请输入登陆名"));
      } else {
        hasRegistration(
          "/api/services/app/WeChatUser/GetWeChatUserIsExist?type=" +
            1 +
            "&keyCode=" +
            value
        ).then(response => {
          if (response.data.result === false) {
            return callback();
          } else if (response.data.result === true) {
            return callback(new Error("用户名已经存在"));
          }
        });
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
    var phonenum = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输手机验证码"));
      } else if (value !== this.phoneData) {
        callback(new Error("手机验证码错误"));
      } else {
        callback();
      }
    };
    return {
      //返回参数开始
      registration: {
        f_Account: "",
        f_UserName: "",
        f_Password: "",
        f_Mobile: "",
        f_Plate: "",
        f_PlateFirstDate: "",
        f_ExpiredBX: "",
        f_WeChateOpenID: ""
      },
      //返回参数结束
      hasUsercount: "", //存储用户名是否存在
      hasTelcount: 0, //存储电话号码是否存在
      daojishi: 60,
      message: "获取手机验证码",
      user: "",
      phoneData: "",
      ruleForm2: {
        pass: "",
        name: "",
        checkPass: "",
        age: "",
        phoneNumber: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        name: [{ validator: username, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
        phoneNumber: [{ validator: phonenum, trigger: "blur" }]
      }
    };
  },
  components: {
    yanzhengma
  },
  mounted: function() {
    // httpError() {
    //   return this.$store.state.httpError;
    // }
  },

  methods: {
    // 短信验证
    httpGet() {
      getTest(
        "/api/services/app/cwkjwechatapi/MsgContentSend?usertel=" +
          this.ruleForm2.age
      ).then(response => {
        this.phoneData = response.data.result;
      });
    },
    //注册接口
    userregist() {
      userRegistration(
        "/api/services/app/WeChatUser/UserRegisterAdd",
        this.registration
      ).then(response => {
        // console.log(response.data.result);
      });
    },

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.userregist();
          alert("注册成功!");
        } else {
          console.log("error submit!!");
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
.vip {
  width: 90%;
  padding-top: 0.7rem;
}
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
  width: 100%;
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
.yzm_span2 .message {
  padding: 0.17rem 0.3rem 0.17rem 0.3rem;
  background: #cdced0;
  position: relative;
  top: -2px;
  color: #706f6f;
}
</style>

