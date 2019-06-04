<template>
  <div>
    <div class="testing_box_top_box">
      <home-top></home-top>
    </div>
    <div class="header_title">
      <span>首页</span>
      <span>></span>
      <span>服务保障</span>
      <span>></span>
      <span>专业维修整备</span>
    </div>
    <div class="testing_box">
      <el-row type="flex" :gutter="10" class="row-bg" justify="center">
        <el-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20">
          <div class="grid-content bg-purple i">
            <!-- <div class="car_info_nav">首页 > 服务保障 > 专业维修整备</div> -->
            <div class="top_box">
              <div class="top_box_main">
                <!-- <img src="@/assets/image/sale_car.png"> -->
                <div class="top_box_title">专业维修整备</div>
                <div
                  class="top_box_font"
                >我们对预售的每辆二手车都进行全面检查和美容，因此当您买下这台车的时候，无论是外观还是感觉上，都体会不到是用过的。 为保证交到您手中的是安全放心的车辆，车纬空间系统有效的企业执行力将会保证您的满意度，车纬空间专业完善的整备售后服务将让您 一路畅行无忧。</div>
                <div class="banner">
                  <!-- <el-carousel :interval="5000" height="450px" indicator-position="none">
                    <el-carousel-item v-for="item in 4" :key="item">
                      <img src="@/assets/image/rzc1245_2.png">
                    </el-carousel-item>
                  </el-carousel>-->
                  <img src="@/assets/image/rzc1245_2.png">
                </div>
                <div class="clear"></div>
              </div>
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
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  components: {
    HomeTop,
    HomeFotter
  }
};
</script>
<style scoped>
.car_info_nav {
  line-height: 1.2rem;
  font-size: 0.2rem;
}
.testing_box {
  min-width: 1200px;
}
.top_box {
  width: 100%;
  background: #ffffff;
  padding-bottom: 1rem;
}
.top_box_main {
  width: 90%;
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
  line-height: 0.4rem;
  width: 60%;
  margin: 0 auto;
}
.banner {
  width: 100%;
  margin: 0 auto;
}
.banner img {
  width: 100%;
  height: 600px;
}
.testing_box_top_box {
  background: #ffffff;
  padding: 0 0 0.2rem 0;
}
</style>