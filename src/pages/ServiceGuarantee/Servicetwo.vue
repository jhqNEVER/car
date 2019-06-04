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
      <span>245项检测，232项认证</span>
    </div>
    <div class="testing_box">
      <el-row type="flex" :gutter="10" class="row-bg" justify="center">
        <el-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20">
          <!-- <div class="car_info_nav">首页 > 服务保障 > 245项检测，232项认证</div> -->
          <div class="grid-content bg-purple i">
            <!-- 头部开始 -->
            <div class="top_box">
              <div class="top_box_font">
                <p>
                  车纬空间对所有车辆进行全程质量控制，每辆售出的车都会经过严格检测。
                  车纬空间的理念是一切透明化，价格透明化，服务透明化，给客户更多放心。车纬空间销售的车分为
                </p>
                <div class="top_box_btn">
                  <input type="button" value="认证车">
                  <input type="button" value="优选车">
                  <input type="button" value="非认证车">
                  <!-- <button>认证车</button>
                  <button>优选车</button>
                  <button>非认证车</button>-->
                </div>
              </div>
            </div>
            <!-- 头部结束 -->
            <!-- 认证车开始 -->
            <div class="rzc">
              <div class="rzc_title">
                <p>认证车</p>
              </div>
              <div class="rzc_font">
                <p>245项检测杜绝结构性损伤车、泡水车和尽最大可能规避里程数不实等问题车辆， 232项认证为您提供客观真实的车辆技术状况;</p>
                <!-- <p>
                  <a>如需了解详细内容请点击《认证车标准》。</a>
                </p>-->
              </div>
              <div class="rzc_img">
                <img src="@/assets/image/rzc1.png">
              </div>
              <div class="rzc_bottom">
                <div class="rzc_bottom_left">
                  <p class="rzc_bottom_title">我们承诺提供安全、可靠、放心的认证二手车</p>
                  <p class="rzc_bottom_font">
                    通过车纬空间232项认证的车辆，都是符合6年以内/12万公里以下的标准，我们保证所销售的二手车无结构性损伤，非泡水车、
                    火烧车、营运车、抵押车等，并都是法律上合法且手续齐全的车辆。认证内容包括7大类232项，包括证件检查、内饰检测、车身外观及骨架检测、发动机舱检测、车辆附件检查、底盘检测、路试检测。
                  </p>
                </div>
                <div class="rzc_bottom_right">
                  <p class="rzc_bottom_title">认证报告</p>
                  <p class="rzc_bottom_font">
                    展厅内每一辆在售的认证车都是由专业的检测技师认证，车辆均通过了245项检测，经过机电、漆面、美容等环节的整备，还要经过232项权威认证标准的
                    考验，获得车纬空间“认证车”标签才能销售。车纬空间认证报告可以使消费者在买车时，明确知道这辆车的真实现状，使普通消费者在交易时，基于透明
                    共同约定的基础上，真正实现有章可循，有据可依。除了这份报告，我们还有7天可退换、3个月质保、个性化延保等一系列的服务作保障，让消费者不仅买 得放心，用得也放心。
                  </p>
                </div>
                <div class="clear"></div>
              </div>
            </div>
            <!-- 认证车结束 -->
            <div class="clear"></div>
            <!-- 优选车开始 -->
            <div class="yxc">
              <div class="rzc">
                <div class="rzc_title">
                  <p>优选车</p>
                </div>
                <div class="rzc_font">
                  <p>245项检测杜绝结构性损伤车、泡水车和尽最大可能规避里程数不实等问题车辆， 232项认证为您提供客观真实的车辆技术状况;</p>
                  <!-- <p>
                    <a>如需了解详细内容请点击《认证车标准》。</a>
                  </p>-->
                </div>
                <div class="rzc_img">
                  <img src="@/assets/image/rzc1245_2.png">
                </div>
                <div class="rzc_bottom">
                  <div class="rzc_bottom_left">
                    <p class="rzc_bottom_title">我们承诺提供安全、可靠、放心的认证二手车</p>
                    <p class="rzc_bottom_font">
                      通过车纬空间232项认证的车辆，都是符合6年以内/12万公里以
                      下的标准，我们保证所销售的二手车无结构性损伤，非泡水车、
                      火烧车、营运车、抵押车等，并都是法律上合法且手续齐全的车
                      辆。认证内容包括7大类232项，包括证件检查、内饰检测、车身
                      外观及骨架检测、发动机舱检测、车辆附件检查、底盘检测、路
                      试检测。
                    </p>
                  </div>
                  <div class="rzc_bottom_right">
                    <p class="rzc_bottom_title">认证报告</p>
                    <p class="rzc_bottom_font">
                      展厅内每一辆在售的认证车都是由专业的检测技师认证，车辆均通过了245项
                      检测，经过机电、漆面、美容等环节的整备，还要经过232项权威认证标准的
                      考验，获得车纬空间“认证车”标签才能销售。车纬空间认证报告可以使消费
                      者在买车时，明确知道这辆车的真实现状，使普通消费者在交易时，基于透明
                      共同约定的基础上，真正实现有章可循，有据可依。除了这份报告，我们还有
                      7天可退换、3个月质保、个性化延保等一系列的服务作保障，让消费者不仅买
                      得放心，用得也放心。
                    </p>
                  </div>
                </div>
                <div class="clear"></div>
              </div>
            </div>
            <!-- 优选车结束 -->
            <div class="clear"></div>
            <!-- 非认证车开始 -->
            <div class="frzc">
              <p>非认证车</p>
              <p>
                凡是不符合车纬空间认证车标准、优选车标准的车辆即为非认证车，
                <br>车纬空间秉着诚信源于透明的原则，将车辆的现状在检测报告上予以披露。
              </p>
            </div>
            <!-- 非认证车结束 -->
            <div class="clear"></div>
            <!-- 车纬空间检测、认证、PDI流程展示开始 -->
            <div class="pdi">
              <div class="pdi_title">车纬空间检测、认证、PDI流程展示开始</div>
              <div class="pdi_img_box">
                <img src="@/assets/image/pdi.png">
              </div>
            </div>
            <!-- 车纬空间检测、认证、PDI流程展示结束 -->
          </div>
          <div class="clear"></div>
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
  components: {
    HomeTop,
    HomeFotter
  }
};
</script>
<style scoped>
.clear {
  clear: both;
}

.testing_box {
  min-width: 1200px;
}
.car_info_nav {
  line-height: 1.2rem;
  font-size: 0.2rem;
}
.top_box {
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  background: #ffffff;
}
.top_box_font {
  width: 60%;
  margin: 0 auto;
  line-height: 0.4rem;
}
.top_box_btn {
  padding-top: 0.5rem;
  width: 100%;
  text-align: center;
}
.top_box_btn input {
  width: 2.12rem;
  height: 0.5rem;
  background: #fa5050;
  margin-left: 1rem;
  color: white;
}
.rzc {
  width: 90%;
  margin: 0 auto;
  margin-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
}
.rzc_title {
  font-size: 0.5rem;
  padding: 0rem 0 0.5rem 0;
}
.rzc_font p:last-child {
  padding-top: 0.2rem;
}
.rzc_img {
  width: 100%;
  padding-top: 0.8rem;
}
.rzc_img img {
  width: 100%;
}
.rzc_bottom {
  width: 100%;
  padding-top: 1rem;
  text-align: left;
}
.rzc_bottom_left {
  width: 48%;
  float: left;
}
.rzc_bottom_right {
  width: 48%;
  float: right;
}
.rzc_bottom_title {
  font-size: 0.35rem;
  color: #525151;
}
.rzc_bottom_font {
  padding-top: 0.4rem;
  line-height: 0.4rem;
  color: #838181;
}
.yxc {
  background: #ffffff;
  width: 100%;
  padding: 0.2rem 0 0 0;
}
.frzc {
  padding-top: 1rem;
  text-align: center;
  color: #525151;
}
.frzc p:first-child {
  font-size: 0.5rem;
}
.frzc p:last-child {
  padding-top: 0.4rem;
  line-height: 0.45rem;
  font-size: 0.3rem;
}
.pdi {
  width: 100%;
  background: #ffffff;
  margin-top: 1rem;
}
.pdi_title {
  width: 100%;
  padding-top: 1.5rem;
  font-size: 0.5rem;
  text-align: center;
}
.pdi_img_box {
  width: 90%;
  padding-top: 1rem;
  margin: 0 auto;
}
.pdi_img_box img {
  width: 100%;
}
.testing_box_top_box {
  background: #ffffff;
  padding: 0 0 0.2rem 0;
}
</style>
