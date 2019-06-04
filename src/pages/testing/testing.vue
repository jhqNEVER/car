<template>
  <div class="testing_box_test">
    <div class="testing_box_top_box">
      <home-top></home-top>
    </div>

    <div class="clear"></div>
    <div class="testing_body">
      <div class="header_title">
        <span>首页</span>
        <span>></span>
        <span>我要检测</span>
      </div>
      <div class="top_box_test">
        <div class="test_body">
          <div class="top_box_title1">
            <img src="@/assets/image/testing_title.png">
          </div>
          <!-- video开始 -->
          <div class="top_box_video">
            <div class="top_box_video_left">
              <div class="top_box_video_left_title">
                <img src="@/assets/image/ren_title1.png">
              </div>
              <div>
                <ul>
                  <li>
                    <span>立足于使车辆情况更加透明车纬空间严格按照自己的检测标准。</span>
                  </li>
                  <li>
                    <span>检测内容包括7大类245项，包括证件检查、内饰检测、车身外观及 骨架检测、发动机舱检测、车辆附件检查、底盘检测、路试检测。</span>
                  </li>
                  <li>
                    <span>使消费者能明确知道被检车辆的真实状况。</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="top_box_video_right">
              <div class="top_box_video_right_video">
                <img src="@/assets/image/testing.png" class="top_left_img">
              </div>
            </div>
            <div class="clear"></div>
          </div>
          <!-- video结束 -->
          <!-- 优势开始 -->
          <div class="testing_advantage">
            <div class="testing_advantage_title">
              <img src="@/assets/image/web1/jcystitile.png">
            </div>
            <div class="testing_advantage_img2">
              <img src="@/assets/image/test_youshi.png">
            </div>
            <div class="testing_advantage_title2">
              <img src="@/assets/image/web1/whyused.png">
            </div>
            <div class="testing_advantage_main">
              <img src="@/assets/image/test_main_img.png">
            </div>
            <div class="Abnormal_frame">
              <img src="@/assets/image/Abnormalframe.png">
            </div>
            <div class="Soakingwater">
              <img src="@/assets/image/Soakingwater.png">
            </div>
            <div class="fire">
              <img src="@/assets/image/fire.png">
            </div>
            <div class="Charging_standard">
              <img src="@/assets/image/web1/sfbz.png">
            </div>
            <div class="Charging_standard2">
              <ul>
                <li>
                  <span>≤10万</span>
                  <span>199元</span>
                </li>
                <li>
                  <span>10-20万</span>
                  <span>299元</span>
                </li>
                <li>
                  <span>20-30万</span>
                  <span>399元</span>
                </li>
                <li>
                  <span>30-50万</span>
                  <span>599元</span>
                </li>
                <li>
                  <span>50-100万</span>
                  <span>899元</span>
                </li>
                <li>
                  <span>100-200万</span>
                  <span>1299元</span>
                </li>
                <li>
                  <span>≥200万</span>
                  <span>2999元</span>
                </li>
              </ul>
              <div class="add_money">
                <span>*增加路试需+100元</span>
              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <!-- 优势结束 -->
        <!-- 立即预约开始 -->
        <div class="appointment">
          <img src="@/assets/image/test_bottom.png">
          <div class="appointment_inp_box">
            <input type="text" v-model="formdate.f_CustomerPhone" placeholder="请输入手机号">
            <button class="btn_css" @click="testingenter">确定</button>
          </div>
        </div>
        <!-- 立即预约结束 -->
      </div>
    </div>
    <home-fotter></home-fotter>
  </div>
</template>

<script>
import HomeTop from "@/pages/home/components/HomeTop";
import HomeFotter from "@/pages/home/components/HomeFotter";
import { CarDetectionInsert } from "@/api/webapi";
export default {
  components: {
    HomeTop,
    HomeFotter
  },
  data() {
    return {
      formdate: {
        id: 0,
        f_CustomerPhone: ""
      }
    };
  },
  methods: {
    testingenter() {
      CarDetectionInsert(this.formdate).then(res => {
        this.$message({
          message: "恭喜你，提交成功",
          type: "success"
        });
      });
    }
  }
};
</script>
<style scoped>
/* 李倩编辑（2019-05-30） */
.top_box_test {
  background: #ffffff;
}
.top_left_img {
  width: 100%;
}
.test_body {
  width: 90%;
  margin: auto;
}
.testing_body {
  min-width: 1200px;
  margin: auto;
  width: 80%;
}
.btn_css {
  cursor: pointer;
}
.clear {
  clear: both;
}
.testing_box {
  min-width: 1200px;
}

.testing_box_top_box {
  background: #ffffff;
  padding: 0 0 0.2rem 0;
}
.companyname {
  font-size: 0.6rem;
  color: red !important;
  padding: 0rem 0 0 0.5rem;
}
.header_nav_right p:last-child span {
  color: #000 !important;
}
.header_nav_right p:last-child span:hover {
  color: red !important;
}
.header_title {
  padding: 0.78rem 0 0.48rem 0;
}
.top_box {
  width: 100%;
  height: auto;
  background: white;
}
.top_box_title1 {
  padding-top: 1.24rem;
  text-align: center;
}
.top_box_title1 img {
  width: 850px;
}
.top_box_video {
  margin: 1.26rem auto;
  /* padding: 1.26rem 0 1.78rem 0; */
}
.top_box_video_left {
  float: left;
  width: 60%;
  font-size: 0.3rem;
}
.top_box_video_left ul {
  margin-top: 0px;
  padding-left: 0.55rem;
  width: 90%;
}
.top_box_video_left ul li {
  margin-top: 0.22rem;
  list-style: square inside url("../../assets/image/web1/icolist.jpg");
}
.top_box_video_left ul li span {
  line-height: 0.4rem;
}

.top_box_video_right {
  float: right;
  width: 40%;
}
.top_box_video_right_video {
  height: 4.5rem;
  margin-top: 0.6rem;
  overflow: hidden;
}

.testing_advantage {
  width: 100%;
  height: auto;
  padding: 1.38rem 0 0 0;
}
.testing_advantage_title {
  text-align: center;
}
.testing_advantage_title img {
  width: 850px;
}
.testing_advantage_img2 {
  padding-top: 0.9rem;
  text-align: center;
}
.testing_advantage_title2 {
  padding-top: 1.98rem;
  text-align: center;
}
.testing_advantage_title2 img {
  width: 850px;
}
.testing_advantage_main {
  padding-top: 1.42rem;
  text-align: center;
}
.Abnormal_frame {
  padding-top: 1.42rem;
  text-align: center;
}
.Soakingwater {
  padding-top: 1.42rem;
  text-align: center;
}
.fire {
  padding-top: 1.42rem;
  text-align: center;
}
.Charging_standard {
  padding: 2rem 0 1rem 0;
  text-align: center;
}
.Charging_standard img {
  width: 850px;
}
.Charging_standard2 {
  width: 850px;
  margin: 0 auto;
}
.Charging_standard2 ul li {
  width: 100%;
  height: 0.7rem;
  line-height: 0.7rem;
  margin-top: 0.2rem;
  font-weight: bold;
}
.Charging_standard2 ul li:nth-child(odd) {
  background: #f8e6e8;
}
.Charging_standard2 ul li:nth-child(even) {
  background: #fa5050;
}
.Charging_standard2 ul li span:first-child {
  padding-left: 1rem;
}
.Charging_standard2 ul li span:last-child {
  float: right;
  padding-right: 1rem;
}
.add_money {
  font-weight: bold;
  float: right;
  font-size: 0.3rem;
  padding: 0.54rem 0 2rem 0;
}
.appointment {
  width: 100%;
  position: relative;
  padding-bottom: 0.5rem;
  /* background: url("@/image/test_bottom.png"); */
}
.appointment img {
  width: 100%;
}
.appointment_inp_box {
  position: absolute;
  left: 2.7rem;
  top: 1.74rem;
}
.appointment_inp_box input {
  width: 4.6rem;
  height: 0.8rem;
  padding-left: 0.3rem;
  border-radius: 0.1rem;
}
.appointment_inp_box button {
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  height: 0.8rem;
  color: #ffffff;
  background: #fa5050;
  border-radius: 0.1rem;
}
</style>