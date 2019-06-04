<template>
  <div>
    <div class="testing_box_top_box">
      <home-top></home-top>
    </div>
    <div class="testing_box" v-if="listQuery.userId > 0">
      <el-row type="flex" :gutter="10" class="row-bg" justify="center">
        <el-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20">
          <div class="grid-content bg-purple i">
            <!-- <div class="car_info_nav">首页 > 个人中心</div> -->

            <div class="top_box">
              <div class="top_box_main">
                <!-- <img src="@/assets/image/sale_car.png"> -->
                <div class="userinfo">
                  <div class="userinfo_left">
                    <div class="userinfo_left_img">
                      <img
                        src="@/assets/image/web1/touxiang.png"
                        v-if="userInfoData.f_WeChatUserPhoto === '' || userInfoData.f_WeChatUserPhoto === null"
                      >
                      <img :src="userInfoData.f_WeChatUserPhoto" v-else>
                    </div>
                  </div>
                  <div class="userinfo_right">
                    <p class="userinfo_right_p1">欢迎您，尊敬的会员</p>
                    <p class="userinfo_right_p2">
                      <span>手机号：</span>
                      <span class="phone_number">{{userInfoData.f_Mobile}}</span>
                    </p>
                    <div class="clear"></div>
                  </div>
                </div>
                <div class="banner">
                  <el-carousel :interval="5000" height="227px" indicator-position="none">
                    <el-carousel-item v-for="item in 4" :key="item">
                      <img src="@/assets/image/bxfw1.png">
                    </el-carousel-item>
                  </el-carousel>
                </div>
                <div class="clear"></div>
                <div class="banner_info"></div>
                <div class="clear"></div>
                <div class="banner_info1">
                  <div id="app1">
                    <div class="radio-wrap">
                      <div class="clear_radio-group" v-model="tabView">
                        <span
                          v-for="(tab ,index) in tabs"
                          :class="{cur:iscur==index}"
                          @click="iscur=index,tabChange('select' + (index + 1))"
                        >{{tab.name}}</span>
                      </div>
                      <!-- <div style="margin:10px 0;"></div> -->
                      <keep-alive class="show_div">
                        <component v-bind:is="tabView"></component>
                      </keep-alive>
                    </div>
                  </div>
                </div>
                <div class="clear"></div>
              </div>
              <div class="clear"></div>
              <div></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div v-else class="weilogin">
      <span>未登陆状态</span>
      <a class="weilogin_go" @click="gologin()">点此登陆</a>
    </div>
    <div class="clear"></div>
    <home-fotter></home-fotter>
  </div>
</template>
<script>
import HomeTop from "@/pages/home/components/HomeTop";
import HomeFotter from "@/pages/home/components/HomeFotter";
import select1 from "./components/comclearCar1.vue";
import select2 from "./components/comclearCar2.vue";
import select3 from "./components/comclearCar3.vue";
import { GetUserInfo } from "@/api/webapi";
export default {
  name: "app1",
  data() {
    return {
      tabView: "select1",
      iscur: 0,
      listQuery: {
        userId: this.$cookieStore.getCookie("username")
      },
      userInfoData: null,
      tabs: [{ name: "我的需求" }, { name: "我的卡券" }, { name: "账户管理" }]
    };
  },
  components: {
    select1,
    select2,
    select3,
    HomeTop,
    HomeFotter
  },
  created() {
    this.GetUserInfo();
  },
  methods: {
    tabChange: function(tab) {
      this.tabView = tab;
    },
    getuserphoto(data) {
      if (data === "" || data === null) {
        return "@/assets/image/web1/touxiang.png";
      } else {
        return data;
      }
    },
    GetUserInfo() {
      GetUserInfo(this.listQuery).then(res => {
        if (res.data.result.length > 0) {
          this.userInfoData = res.data.result[0];
        }
      });
    },
    gologin() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
<style scoped>
.weilogin {
  text-align: center;
  height: 270px;
  line-height: 270px;
  font-size: 0.6rem;
}
.weilogin_go {
  cursor: pointer;
  margin-left: 10px;
}
.top_box_main {
  position: relative;
  color: white;
}
.userinfo {
  position: absolute;
  padding: 0.5rem;

  top: 1rem;
  left: 1rem;
  z-index: 999;
}
.userinfo_left {
  float: left;
}
.userinfo_left_img {
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 1.3rem;
  background: #6f1b1f;
  text-align: center;
  overflow: hidden;
  line-height: 1.3rem;
}

.userinfo_left_img img {
  width: 1.3rem;
  height: 1.3rem;
}
.userinfo_right {
  float: left;
  padding: 0.3rem 0 0 0.3rem;
}
.userinfo_right_p1 {
  font-size: 0.3rem;
}
.userinfo_right_p2 {
  font-size: 0.2rem;
  padding-top: 0.15rem;
}
.car_info_nav {
  font-size: 0.2rem;
}
.testing_box {
  min-width: 1200px;
}
.top_box {
  width: 100%;
  background: #ffffff;
}
.top_box_main {
  width: 100%;
  margin: 0 auto;
}
.top_box_title {
  width: 100%;
  padding: 1.5rem 0 0 0;
  text-align: center;
  font-size: 0.5rem;
}
.top_box_font {
  padding: 0.5rem 0 0.5rem 0;
  text-align: center;
}
.banner {
  width: 100%;
  margin: 0 auto;
}
.banner img {
  width: 100%;
  height: 227px;
}
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
} */
.banner_info {
  width: 90%;
  height: 1rem;
  margin-left: 5%;
  background: #000000;
  opacity: 0.4;
  margin-top: -1rem;
  position: relative;
  z-index: 998;
}
.banner_info1 {
  width: 100%;

  color: #fff;
  margin-top: -1rem;
  position: relative;
  z-index: 1000;
  font-size: 0.2rem;
  overflow: hidden;
}
#app1 {
  position: relative;
  z-index: 1000;
  color: #000;
}
.clear_radio-group {
  width: 90%;
  margin-left: 5%;
  height: 1rem;
  line-height: 1rem;
}
.clear_radio-group span {
  padding: 0 0.3rem 0 0.3rem;
  height: 1rem;
  float: left;
  display: block;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
}

.cur {
  background: #6f1b1e;
}
.car_info_nav {
  padding: 0.36rem 0 0rem 0;
}
.testing_box_top_box {
  background: #ffffff;
  padding: 0 0 0.2rem 0;
}
</style>