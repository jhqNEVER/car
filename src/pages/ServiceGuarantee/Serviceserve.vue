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
      <span>7天可退换</span>
    </div>
    <div class="testing_box">
      <el-row type="flex" :gutter="10" class="row-bg" justify="center">
        <el-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20">
          <div class="grid-content bg-purple i">
            <!-- <div class="car_info_nav">首页 > 服务保障 > 7天可退换</div> -->
            <div class="top_box">
              <div class="top_box_main">
                <!-- <img src="@/assets/image/sale_car.png"> -->
                <div class="top_box_title">7天可退换</div>
                <div class="top_box_font">车纬空间承诺，您从车纬空间提车当天起7天内，您如果有任何异议车纬空间都会为您及时安排退换货!</div>
                <div class="banner">
                  <el-carousel :interval="5000" height="450px" indicator-position="none">
                    <el-carousel-item v-for="item in 4" :key="item">
                      <img src="@/assets/image/tuihuan.png">
                    </el-carousel-item>
                  </el-carousel>
                </div>
                <div class="clear"></div>
                <div class="banner_info"></div>
                <div class="clear"></div>
                <div class="banner_info1">
                  我们知道一辆车不会适合所有的人，您可能会担心买到的车不是您自己想要的、
                  不喜欢或担心存在质量问题，所以会犹豫不决、会忐忑不安。
                  车纬空间承诺，您从车纬空间提车当天起7天内，您如果有任何异议车纬空间都会为您及时安排退换货。
                  凡车纬空间购车客户或潜在购车客户均可在车纬空间享受到三个阶段的退（换）车服务，但根据车辆实际状态需要支付一定的费用。
                </div>
                <div class="clear"></div>

                <div class="jtbz">具体费用标准如下表所示</div>
                <div class="jtbz_table">
                  <div class="jtbz_table1 jtbz_table_bottom">
                    <div class="jtbz_table_li1">
                      <p>阶段</p>
                    </div>
                    <div class="jtbz_table_li2">
                      <p>时间标准</p>
                    </div>
                    <div class="jtbz_table_li3">
                      <p>费用扣除标准</p>
                    </div>
                    <div class="clear"></div>
                  </div>
                  <div class="clear"></div>
                  <div class="jtbz_table2 jtbz_table_bottom">
                    <div class="jtbz_table_li1">
                      <p>预定-全款</p>
                    </div>
                    <div class="jtbz_table_li2">
                      <p>从缴纳定金开始到缴纳车辆全款之前</p>
                    </div>
                    <div class="jtbz_table_li3">
                      <div class="jtbz_table_li3_left">
                        <p>
                          定金标准:车价5%，最低10000；
                          费用扣除标准:车价2%，最低3000；
                        </p>
                      </div>
                      <div class="jtbz_table_li3_right">
                        <p>
                          如因贷款未通过，只收贷款手续费；
                          （贷款手续费为贷款额度的2%）
                        </p>
                      </div>
                    </div>
                    <div class="clear"></div>
                  </div>
                  <div class="jtbz_table3 jtbz_table_bottom">
                    <div class="jtbz_table_li1">
                      <p>全款-提车</p>
                    </div>
                    <div class="jtbz_table_li2">
                      <p>从缴纳车辆全款后到车辆交付之前</p>
                    </div>

                    <div class="jtbz_table_li3">
                      <p>
                        每天车价0.5%，最低3000，
                        时间计算：从预定开始到实际办理退车之日
                      </p>
                    </div>
                    <div class="clear"></div>
                  </div>
                  <div class="jtbz_table4">
                    <div class="jtbz_table_li1">
                      <p>
                        提车之后
                        (七天可退换)
                      </p>
                    </div>
                    <div class="jtbz_table_li2">
                      <p>
                        从车辆交付后7天或700公里以内
                        （以先到为准）
                      </p>
                    </div>
                    <div class="jtbz_table_li3">
                      <p>
                        每天车价0.5%，最低3000，
                        时间计算：从预定开始到实际办理退车之日
                        免费退车条件：如因车辆质量问题（易损件除外），需先经车王售后维修
                        ，若2次依然未修复的，方可退车；
                      </p>
                    </div>
                    <div class="clear"></div>
                  </div>
                </div>
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
    return {};
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
}
.banner {
  width: 100%;
  margin: 0 auto;
}
.banner img {
  width: 100%;
  height: 600px;
}
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
} */
.banner_info {
  width: 100%;
  height: 2rem;
  background: #000000;
  opacity: 0.6;
  margin-top: -2rem;
  position: relative;
  z-index: 998;
}
.banner_info1 {
  width: 90%;
  margin-left: 5%;
  height: 2rem;
  padding-top: 0.5rem;
  line-height: 0.4rem;
  color: #f8f1f1;
  margin-top: -2rem;
  position: relative;
  z-index: 1000;
  font-size: 0.27rem;
}
.jtbz {
  font-size: 0.55rem;
  padding: 1.3rem 0 1rem 0;
  text-align: center;
}
.jtbz_table {
  border: solid 1px #cccccc;
  text-align: center;
  margin-bottom: 1.1rem;
}
.jtbz_table p {
  padding: 0 0.5rem 0 0.5rem;
}

.jtbz_table_bottom {
  border-bottom: solid 1px #cccccc;
}

.jtbz_table table {
  background: #f5f5f5;
}

.jtbz_table1 {
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.27rem;
}
.jtbz_table2 {
  height: 1.2rem;
  font-size: 0.27rem;
}
.jtbz_table2 p {
  margin-top: 0.2rem;
  line-height: 0.4rem;
}
.jtbz_table3 {
  height: 1.2rem;
  font-size: 0.27rem;
}
.jtbz_table3 p {
  margin-top: 0.4rem;
  line-height: 0.3rem;
}
.jtbz_table4 {
  height: 2rem;
  font-size: 0.27rem;
}
.jtbz_table4 p {
  margin-top: 0.4rem;
  line-height: 0.4rem;
}
.jtbz_table_li1 {
  width: 15%;
  float: left;
  height: 100%;
  border-right: solid 1px #cccccc;
  box-sizing: border-box;
}
.jtbz_table_li2 {
  width: 30%;
  height: 100%;
  float: left;
  border-right: solid 1px #cccccc;
  box-sizing: border-box;
}
.jtbz_table_li3 {
  width: 55%;
  height: 100%;
  float: left;
  box-sizing: border-box;
}
.jtbz_table_li3_left {
  width: 50%;
  height: 100%;
  float: left;
  border-right: solid 1px #cccccc;
  box-sizing: border-box;
}
.jtbz_table_li3_right {
  width: 50%;
  height: 100%;
  float: left;
  box-sizing: border-box;
}
.testing_box_top_box {
  background: #ffffff;
  padding: 0 0 0.2rem 0;
}
</style>