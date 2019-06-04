<template>
  <div>
    <div class="hometop">
      <home-top></home-top>
    </div>
    <div class="testing_box">
      <el-row type="flex" :gutter="10" class="row-bg" justify="center">
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
                  label-width="100px"
                  class="demo-ruleForm"
                >
                  <el-form-item label="您的手机号码" prop="age">
                    <el-input
                      class="phone"
                      ref="phone"
                      :disabled="true"
                      v-model.number="ruleForm2.age"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
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
import { newpwd } from "@/api/testApi";
export default {
  data() {
    // var checkAge = (rule, value, callback) => {
    //   this.httpdata.tel = value;
    //   if (!value) {
    //     return callback(new Error("手机号不能为空"));
    //   } else {
    //     callback();
    //   }
    // };
    var validatePass = (rule, value, callback) => {
      this.httpdata.f_Password = value;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      active: 1,
      phone: "",
      httpdata: {
        f_Mobile: "",
        f_Password: ""
      },
      ruleForm2: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
        // age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  components: {
    HomeTop,
    HomeFotter
  },
  created() {
    this.getParams();
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    $route: "getParams"
  },

  methods: {
    // 发送新密码
    httpGet() {
      newpwd(
        "/api/services/app/WeChatUser/UpdateRetrieveUserPwd",
        this.httpdata
      ).then(response => {
        console.log("11" + response.data.result);
      });
    },

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.active++ > 2) this.active = 0;
          this.httpGet();
          alert("submit!");
          this.$router.push("updataok");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getParams() {
      // 取到路由带过来的参数
      const routerParams = this.$route.query.phone;
      this.ruleForm2.age = routerParams;
      this.httpdata.f_Mobile = routerParams;
    }
  }
};
</script>
<style scoped>
.testing_box {
  min-width: 1200px;
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
.phone {
  border: none !important;
}
.form_box {
  width: 50%;
  margin: 1rem auto;
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
.hometop {
  width: 100%;
  background: #ffffff;
  padding-bottom: 0.2rem;
  /* border-bottom: solid 1px #cccccc; */
}
</style>
