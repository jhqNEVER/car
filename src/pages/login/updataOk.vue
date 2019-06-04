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
              <div class="top_box_img">
                <img src="@/assets/image/ok.png">
              </div>

              <div class="ok_title">恭喜您，密码成功设置！您可以使用新密码登录车纬空间官网！</div>
              <div class="btn_box">
                <el-button class="btn" type="primary" @click="submitForm()">登陆首页</el-button>
              </div>
            </div>
            <div class="clear"></div>
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
export default {
  methods: {
    submitForm() {
      this.$router.push("./#");
    }
  },
  components: {
    HomeTop,
    HomeFotter
  }
};
</script>
<style scoped>
.testing_box {
  min-width: 1200px;
}

.top_box {
  width: 87.5%;
  margin: 1rem auto;
  background: #ffffff;
  padding: 1rem;
  position: relative;
}
.top_box_img {
  padding: 1rem;
  text-align: center;
}
.ok_title {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 43%;
  font-size: 0.45rem;
  color: #6f1b1e;
}
.top_box_img img {
  width: 90%;
}

.btn_box {
  width: 100%;
  position: absolute;
  top: 55%;
  text-align: center;
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
