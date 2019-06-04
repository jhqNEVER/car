<template>
  <div class="aboutcompany_home">
    <div class="hometop">
      <home-top></home-top>
    </div>
    <div class="header_title">
      <span>首页</span>
      <span>></span>
      <span>关于我们</span>
      <!-- <span>></span>
      <span>车纬空间活动</span>-->
    </div>
    <div class="ach_testing_box">
      <el-row type="flex" :gutter="10" class="row-bg" justify="center">
        <el-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20">
          <div class="grid-content bg-purple i">
            <!-- <div class="car_info_nav">首页 > 关于我们 > 车纬空间活动</div> -->
            <div class="top_box">
              <div class="top_box_main">
                <!-- <img src="@/assets/image/sale_car.png"> -->

                <div class="banner">
                  <!-- <el-carousel :interval="5000" height="227px" indicator-position="none">
                    <el-carousel-item v-for="item in 4" :key="item">
                      <img src="@/assets/image/bxfw1.png">
                    </el-carousel-item>
                  </el-carousel>-->
                  <img src="@/assets/image/bxfw1.png">
                </div>
                <div class="clear"></div>
                <div class="banner_info"></div>
                <div class="clear"></div>
                <div class="banner_info1">
                  <div id="app1">
                    <div class="radio-wrap">
                      <div class="about_radio-group" v-model="tabView">
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
                      <div class="clear"></div>
                    </div>
                  </div>
                  <div class="clear"></div>
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
    <home-fotter></home-fotter>
  </div>
</template>
<script>
import HomeTop from "@/pages/home/components/HomeTop";
import HomeFotter from "@/pages/home/components/HomeFotter";
import select1 from "./components/select01.vue";
import select2 from "./components/select02.vue";
import select3 from "./components/select03.vue";
import select4 from "./components/select04.vue";

export default {
  name: "app1",
  data() {
    return {
      // httpselect: this.$route.params.id,
      // select1

      tabView: "select4",
      iscur: 3,
      tabs: [
        { name: "关于车纬空间" },
        { name: "为什么选择车纬空间" },
        { name: "经营理念" },
        { name: "车纬空间活动" }
      ]
    };
  },
  components: {
    select1,
    select2,
    select3,
    select4,
    HomeTop,
    HomeFotter
  },

  methods: {
    tabChange: function(tab) {
      this.tabView = tab;
    },
    //活动
    httpGetactivity() {
      homeActivity("/api/ActivityApiService/ActivityListTop3").then(
        response => {
          // this.alldata = response.data.result;
          this.activitylist = response.data.result;
        }
      );
    }
  }
};
</script>
<style scoped>
.car_info_nav {
  line-height: 1.2rem;
  font-size: 0.2rem;
}
.ach_testing_box {
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
  /* overflow: hidden; */
}
#app1 {
  position: relative;
  z-index: 1000;
  color: #000;
}
.about_radio-group {
  width: 90%;
  margin-left: 5%;
  height: 1rem;
  line-height: 1rem;
}
.about_radio-group span {
  padding: 0 0.5rem 0 0.5rem;
  height: 1rem;
  float: left;
  display: block;
  text-align: center;
  color: #ffffff;
  font-size: 0.265rem;
}

.cur {
  background: #6f1b1e;
}
.hometop {
  background: #ffffff;
}
</style>