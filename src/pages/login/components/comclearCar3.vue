
<template>
  <div class="box1">
    <div class="main">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="个人资料管理" name="first">
          <div class="my_sc">
            <el-form
              :model="ruleForm2"
              status-icon
              :rules="rules2"
              ref="ruleForm2"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="登录名">
                <el-input v-model="userInfoData.f_Account" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="姓名" prop="f_UserName">
                <el-input v-model="userInfoData.f_UserName"></el-input>
              </el-form-item>
              <el-form-item label="手机号" prop="f_Mobile">
                <el-input v-model.number="userInfoData.f_Mobile" :disabled="true"></el-input>
              </el-form-item>
              <!-- <el-form-item label="验证码" prop="f_Mobile">
                <el-input v-model.number="ruleForm2.f_Mobile"></el-input>
              </el-form-item>-->
              <el-form-item label="车牌" prop="f_Plate">
                <el-input v-model="userInfoData.f_Plate"></el-input>
              </el-form-item>
              <!-- <el-form-item label="品牌" prop="age">
                <el-input v-model.number="ruleForm2.age"></el-input>
              </el-form-item>-->
              <el-form-item label="首次上牌日期" prop="f_PlateFirstDate">
                <el-date-picker
                  v-model="userInfoData.f_PlateFirstDate"
                  type="date"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="保险到期日期" prop="f_ExpiredBX">
                <el-date-picker v-model="userInfoData.f_ExpiredBX" type="date" placeholder="选择日期"></el-date-picker>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="SaveUserInfo()">更改信息</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="修改密码" name="second">
          <div class="xcj">
            <el-form
              :model="ruleForm2"
              status-icon
              :rules="rules2"
              ref="ruleForm2"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="当前密码" prop="oldpwd">
                <el-input type="password" v-model="ruleForm2.oldpwd" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="新密码" prop="newpwd">
                <el-input type="password" v-model="ruleForm2.newpwd" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认新密码" prop="checkpwd">
                <el-input type="password" v-model="ruleForm2.checkpwd" auto-complete="off"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">修改密码</el-button>
                <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
//   data() {
//     return {
//       activeName2: "first"
//     };
//   },
//   methods: {
//     handleClick(tab, event) {
//       console.log(tab, event);
//     }
//   }
import { GetUserInfo, UpdateWeChatInfo, UpdataUserPwdOld } from "@/api/webapi";
export default {
  data() {
    var newpwdpass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.newpwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      activeName2: "first",
      ruleForm2: {
        oldpwd: "",
        checkpwd: "",
        newpwd: "",
        userid: this.$cookieStore.getCookie("username")
      },
      listQuery: {
        userId: this.$cookieStore.getCookie("username")
      },
      rules2: {
        oldpwd: [
          { required: true, message: "当前密码不能为空", trigger: "blur" }
        ],
        checkpwd: [{ validator: validatePass2, trigger: "blur" }],
        newpwd: [{ validator: newpwdpass, trigger: "blur" }]
      },
      userInfoData: {
        id: 0,
        f_Account: "",
        f_ExpiredBX: null,
        f_Mobile: null,
        f_PlateFirstDate: null,
        f_UserName: "",
        f_UserPhone: ""
      }
    };
  },
  created() {
    this.GetUserInfo();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          UpdataUserPwdOld(this.ruleForm2).then(res => {
            console.log(res.data.result);
            if (res.data.result === "修改成功") {
              this.$message({
                message: "您已修改成功",
                type: "success"
              });
              this.$cookieStore.setCookie("username", "", -1);
              location.reload();
            } else {
              this.$message({
                message: "输入的当前密码有误",
                type: "error"
              });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    GetUserInfo() {
      GetUserInfo(this.listQuery).then(res => {
        if (res.data.result.length > 0) {
          this.userInfoData = res.data.result[0];
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    SaveUserInfo() {
      UpdateWeChatInfo(this.userInfoData).then(res => {
        this.$message({
          message: "您已经提交成功",
          type: "success"
        });
      });
    }
  }
};
</script>

<style scoped>
.box1 {
  width: 90%;
  margin: 0 auto;
}
.main {
  padding-top: 1rem;
}
.xcj {
  padding-top: 0.2rem;
  font-size: 0.2rem !important;
}

.xcj {
  width: 50%;
}
.my_sc {
  width: 50%;
}
.top_box_main {
  width: 100%;
  margin: 0.5rem auto;
  padding: 0.5rem 0 0.5rem 0;
  border-bottom: solid 1px #cccccc;
}
.top_box_left {
  float: left;
  width: 202px;
  height: 173px;
  overflow: hidden;
  /* width: 25%; */
}
.top_box_left img {
  width: 90%;
}
.top_box_right {
  float: left;
  width: 75%;
  padding: 0 0 0 0.3rem;
  box-sizing: border-box;
}
.top_box_right_left {
  float: left;
  width: 72%;
  border-right: solid 1px #cccccc;
  box-sizing: border-box;
}
.top_box_right_title {
  width: 80%;
  padding: 0.6rem 0rem 0.3rem 0rem;
  font-size: 0.3rem;
  color: #505050;
  border-bottom: solid 1px #c8c2c2;
}
.top_box_right_left_list ul li {
  width: 100%;
  color: #807e7e;
  padding-top: 0.4rem;
  overflow: hidden;
}
.top_box_right_left_list ul li span {
  margin-right: 0.3rem;
}

.red {
  font-size: 0.5rem;
  color: red;
  font-weight: bold;
}
.qxsc {
  padding: 0.1rem 0.3rem 0.1rem 0.3rem;
  background: #efefef;
  font-size: 0.27rem;
}
.top_box_right_right {
  float: left;
  width: 28%;
  text-align: center;
}
.top_box_right_right p {
  padding-top: 0.4rem;
}
.top_box_right_right p:first-child {
  padding-top: 12%;
}
.top_box_right_right p button {
  padding: 0.1rem 0.5rem 0.1rem 0.5rem;
  background: red;
  color: white;
}
.fenye_box {
  text-align: center;
}
</style>
