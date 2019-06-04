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
      <span>一口价销售</span>
    </div>
    <div class="testing_box">
      <el-row type="flex" :gutter="10" class="row-bg" justify="center">
        <el-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20">
          <div class="grid-content bg-purple i">
            <!-- <div class="car_info_nav">首页 > 服务保障 > 一口价销售</div> -->
            <div class="top_box">
              <div class="top_box_main">
                <!-- <img src="@/assets/image/sale_car.png"> -->
                <div class="top_box_title">一口价</div>
                <div class="top_box_font">
                  <p>车纬空间的一口价是综合了车辆收购价</p>
                  <p>格、车况及市场行情等综合因素后确定的透明、公正的价格。</p>
                </div>
                <div class="banner">
                  <img src="@/assets/image/ykj.png">
                </div>
                <div class="clear"></div>
                <div class="ykj_cs">
                  <div class="ykj_cs_title">车纬空间的一口价是怎样产生的？</div>
                  <div class="ykj_cs_main">
                    <ul>
                      <li>
                        <p>
                          <img src="@/assets/image/ykj1.png">
                        </p>
                        <p>
                          以全网二手车拍卖价格、车
                          纬空间收购价、零售价为价
                          格参考数据
                        </p>
                      </li>
                      <li>
                        <p>
                          <img src="@/assets/image/ykj2.png">
                        </p>
                        <p>
                          建立车纬空间独有的二手车
                          价格数据模型，形成不同车
                          型的收购价格、零售价为价
                          格参考数据
                        </p>
                      </li>
                      <li>
                        <p>
                          <img src="@/assets/image/ykj3.png">
                        </p>
                        <p>
                          在ERP根据不同的车型确立
                          不同的K值，设置预警系统
                        </p>
                      </li>
                      <li>
                        <p>
                          <img src="@/assets/image/ykj4.png">
                        </p>
                        <p>确定透明、公正的销售价格</p>
                      </li>
                      <li>
                        <p>
                          <img src="@/assets/image/ykj5.png">
                        </p>
                        <p>
                          根据市场行情及销售状况
                          实际应用
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div class="clear"></div>
                  <div class="ykj_cs_bottom">
                    <p>
                      车纬空间在超市业态经营模式的基础上，采用顾客随意自选，销售顾问随时提供一对一全程贴心的服务方式，力争为客户提供安全、舒适、美观的放
                      心二手车。我们拒绝水分，拒绝蒙、骗、议。我们谢绝议价，操作规范、透明公正，提供优质的产品、严苛认证，完善售后，让您能明明白白消费。
                      一口价既节约了您的时间，也提高了企业效率，实现大家互利双赢。
                    </p>
                  </div>
                </div>
                <div class="clear"></div>
                <!-- <div class="ykj_modul">
                  <div class="ykj_cs_title">车纬空间收购价模型展示</div>
                  <div class="ykj_modul_img">
                    <img src="@/assets/image/ykj_modul.png">
                  </div>
                </div>-->
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
  padding-bottom: 0.7rem;
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
}
.banner {
  width: 100%;
  margin: 0 auto;
}
.banner img {
  width: 100%;
}
.ykj_cs {
  width: 100%;
}
.ykj_cs_title {
  width: 100%;
  padding: 1rem 0 0.5rem 0;
  text-align: center;
  font-size: 0.31rem;
}
.ykj_cs_main ul li {
  width: 18%;
  float: left;
}
.ykj_cs_main ul li p {
  line-height: 0.4rem;
}
.ykj_cs_main ul li img {
  width: 3rem;
}
.ykj_cs_main ul li p:last-child {
  padding: 0.3rem 0 0 0;
}
.ykj_cs_main ul li:not(:first-child) {
  margin-left: 2%;
}
.ykj_cs_bottom {
  padding: 1.2rem 0 0 0;
  line-height: 0.4rem;
}
.ykj_modul {
  width: 100%;
  margin-top: 1rem;
  border-top: solid 1px #cccccc;
}
.ykj_modul_img img {
  width: 100%;
}
.ykj_modul_table_left {
  width: 49%;
  float: left;
}
.ykj_modul_table_left table {
  width: 100%;
  /* border:  */
  text-align: center;
}
.ykj_modul_table_left table td {
  height: 35px;
}
.ykj_modul_table_right {
  width: 49%;
  float: right;
}
.testing_box_top_box {
  background: #ffffff;
  padding: 0 0 0.2rem 0;
}
</style>