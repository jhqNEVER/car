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
      <span>提供上牌、保险、精品等一站式服务</span>
    </div>
    <div class="testing_box">
      <el-row type="flex" :gutter="10" class="row-bg" justify="center">
        <el-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20">
          <div class="grid-content bg-purple i">
            <!-- <div class="car_info_nav">首页 > 服务保障 > 提供上牌、保险、精品等一站式服务</div> -->
            <div class="top_box">
              <div class="top_box_main">
                <!-- <img src="@/assets/image/sale_car.png"> -->
                <div class="top_box_title">提供上牌、保险、精品等一站式服务</div>
                <div class="top_box_font">
                  <p>当您在车纬空间买到称心如意的车时，不必担心还要为复杂的后续手续而东奔西跑，我们会为您提供过户、上牌、保险、汽车精品等的一站式配套服务，解决您的后顾之忧。</p>
                  <p></p>
                </div>
                <div class="banner">
                  <img src="@/assets/image/guohu3.png">
                </div>
                <div class="clear"></div>

                <div class="clear"></div>

                <div class="jtbz">在车纬空间购买二手车-解决您的后顾之忧</div>
                <div class="jtbz_list">
                  <div class="jtbz_list_left jtbz_list1">
                    <div class="jtbz_list1_top">
                      <img src="@/assets/image/guohu1.png">
                    </div>
                    <div class="jtbz_list1_bottom">
                      <div class="jtbz_list1_bottom_xian">
                        <span>过户、上牌</span>
                      </div>
                      <div class="jtbz_list1_bottom_font">
                        <p>使全国各地的客户免去为复杂的后续手续的奔波之苦，整个流程清晰，保障证件安全，为客户提供快速及时的车辆过户、上牌服务。</p>
                      </div>
                    </div>
                  </div>
                  <div class="jtbz_list_center jtbz_list1">
                    <div class="jtbz_list1_top">
                      <img src="@/assets/image/guohu2.png">
                    </div>
                    <div class="jtbz_list1_bottom">
                      <div class="jtbz_list1_bottom_xian">
                        <span>保险</span>
                      </div>
                      <div class="jtbz_list1_bottom_font">
                        <p>车纬空间与各大保险公司合作，为您提供多种保险套餐。您也可以根据自身的实际需求灵活选择，为爱车选购适合的保险服务，在享受驾驶乐趣的</p>
                      </div>
                    </div>
                  </div>
                  <div class="jtbz_list_right jtbz_list1">
                    <div class="jtbz_list1_top">
                      <img src="@/assets/image/serve1.png">
                    </div>
                    <div class="jtbz_list1_bottom">
                      <div class="jtbz_list1_bottom_xian">
                        <span>汽车精品</span>
                      </div>
                      <div class="jtbz_list1_bottom_font">
                        <p>我们为客户提供完善的汽车美容服务，包括车身美容、内部美容、漆面处理、汽车防护和汽车精品等。我们丰富的产品与服务给您多种汽车生活文化选择，致力于为车主营造舒适温馨的流动汽车生活空间，传递车纬空间贴身的关怀。</p>
                      </div>
                    </div>
                  </div>
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
      shangpai: ""
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

.jtbz {
  font-size: 0.55rem;
  padding: 1.3rem 0 1rem 0;
  text-align: center;
}

.jtbz_list {
  width: 100%;
}
.jtbz_list1 {
  float: left;
  width: 32%;
  background: #dddddd;
  height: 10rem;
}
.jtbz_list1_top {
  width: 100%;
  height: 5rem;
}
.jtbz_list1_top img {
  width: 100%;
}
.jtbz_list1_bottom {
  width: 90%;
  margin: 0 auto;
}
.jtbz_list1_bottom_xian {
  width: 100%;
  padding-top: 0.6rem;
  text-align: center;
  border-bottom: solid 1px #939292;
  color: #525151;
}
.jtbz_list1_bottom_xian span {
  position: relative;
  top: 0.18rem;
  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  background: #dddddd;
}
.jtbz_list1_bottom_font {
  color: #8f8d8d;
  padding: 1rem 0 0 0;
  line-height: 0.4rem;
}
.jtbz_list_center,
.jtbz_list_right {
  margin-left: 2%;
}
.testing_box_top_box {
  background: #ffffff;
  padding: 0 0 0.2rem 0;
}
</style>