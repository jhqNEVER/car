<template>
  <div>
    <div class="hometop">
      <home-top></home-top>
    </div>
    <div class="testing_box">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20">
          <div class="grid-content bg-purple i">
            <div class="top_box">
              <!-- <img src="@/assets/image/sale_car.png"> -->
              <div class="title">找回密码</div>
              <div class="step_box">
                <el-steps :active="active" finish-status="success">
                  <el-step title="验证身份"></el-step>
                  <el-step title="设置密码"></el-step>
                  <el-step title="完成"></el-step>
                </el-steps>
              </div>
              <div class="form_box">
                <el-form
                  :model="ruleForm2"
                  status-icon
                  :rules="rules2"
                  ref="ruleForm2"
                  class="demo-ruleForm"
                >
                  <el-form-item label prop="age">
                    <el-input v-model.number="ruleForm2.age" placeholder="手机号/用户名（老用户）"></el-input>
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
                  <el-form-item label prop="pass">
                    <span class="yzm_span">
                      <el-input
                        type="text"
                        class="yzm"
                        v-model="ruleForm2.pass"
                        placeholder="输入验证码"
                        auto-complete="off"
                      ></el-input>
                    </span>
                    <span class="yzm_span2">
                      <button class="message" @click="httpGet">获取短信验证码</button>
                    </span>
                  </el-form-item>
                  <el-form-item>
                    <div class="btn_box">
                      <el-button class="btn" type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                    </div>
                  </el-form-item>
                </el-form>
              </div>

              <div class="clear"></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <home-fotter></home-fotter>
  </div>
</template>
<script>
import HomeTop from "@/pages/home/components/HomeTop";
import HomeFotter from "@/pages/home/components/HomeFotter";

import yanzhengma from "./components/yzm3";
import { updatamessage } from "@/api/testApi";

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
        callback(new Error("请输入短信密码"));
      } else if (value !== this.phoneData) {
        callback(new Error("短信密码输入错误！"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (value !== this.user) {
        callback(new Error("手机验证码不正确!"));
      } else {
        callback();
      }
    };
    return {
      active: 0,
      phoneData: "", //短信验证码
      user: "", // 验证码
      ruleForm2: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  components: {
    yanzhengma,
    HomeTop,
    HomeFotter
  },
  methods: {
    // 短信验证码
    httpGet() {
      updatamessage(
        "/api/services/app/cwkjwechatapi/MsgContentSend?usertel=" +
          this.ruleForm2.age
      ).then(response => {
        this.phoneData = response.data.result;
      });
    },
    submitForm(formName, phone) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.active++ > 2) this.active = 0;
          alert("成功!");
          this.$router.push({
            path: "updata1",
            query: {
              formName: "",
              phone: this.ruleForm2.age
            }
          });
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
      console.log("yzm" + msg);
    }
  }
};
</script>
<style scoped>
.testing_box {
  min-width: 1200px;
}
.hometop {
  width: 100%;
  background: #ffffff;
  padding-bottom: 0.2rem;
  /* border-bottom: solid 1px #cccccc; */
}
.title {
  padding-bottom: 0.5rem;
  border-bottom: solid 1px #cccccc;
}
.top_box {
  width: 87.5%;
  margin: 1rem auto;
  background: #ffffff;
  padding: 1rem;
}
.step_box {
  width: 80%;
  margin: 1rem auto;
}
.form_box {
  width: 50%;
  margin: 1rem auto;
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
.message {
  padding: 0.17rem 0.3rem 0.17rem 0.3rem;
  background: #cdced0;
}
.yzm_span2 .message {
  position: relative;
  top: -2px;
  color: #706f6f;
}
.btn_box {
  width: 100%;
}
.btn_box .btn {
  background: #6f1b1e;
  color: #ffffff;
  margin: 0 auto;
  padding: 0.2rem 1rem 0.2rem 1rem;
}
</style>
