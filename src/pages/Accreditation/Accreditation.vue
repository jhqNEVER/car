<template>
  <div>
    <div class="testing_box_top_box">
      <home-top></home-top>
    </div>
    <div class="select3">
      <div class="header_title">
        <span>首页</span>
        <span>></span>
        <span>办证大厅</span>
      </div>
      <!-- 列表开始 -->
      <div class="select3_list1">
        <div class="select3_list1_left">
          <p class="p1">过户所需材料</p>
          <p class="p2">
            1. 身份证，外地户口需有效期内暂住证，单位则需要统一社会信用代码证原件及公章。
            <br>2. 机动车登记证书、行驶证、牌照。
            <br>3. 交港局开具的额度转移证明。
            <br>注：过户只能在直系亲属中进行。
          </p>
        </div>
        <div class="select3_list1_right">
          <img src="@/assets/image/bzdt1.png">
        </div>
        <div class="clear"></div>
      </div>
      <!-- 列表结束 -->
      <div class="clear"></div>
      <!-- 列表开始 -->
      <div class="select3_list2">
        <div class="select3_list2_left">
          <img src="@/assets/image/bzdt2.png">
        </div>
        <div class="select3_list2_right">
          <p class="p1">转籍所需材料</p>

          <p class="p2">
            1. 身份证需和转入地地址一致，单位则需要统一社会信用代码证原件及公章。
            <br>2. 机动车登记证书、行驶证、牌照。
          </p>
        </div>
        <div class="clear"></div>
      </div>
      <!-- 列表结束 -->
      <div class="clear"></div>
      <!-- 列表开始 -->
      <div class="select3_list1">
        <div class="select3_list1_left">
          <p class="p1">退牌上牌所需材料</p>

          <p class="p2">
            1. 身份证，外地户口需有效期内暂住证，单位则需要统一社会信用代码证原件及公章。
            <br>2. 机动车登记证书、行驶证、牌照。
            <br>3. 买方需提供机动车额度业务办结凭证（额度单）。
          </p>
        </div>
        <div class="select3_list1_right">
          <img src="@/assets/image/bzdt3.png">
        </div>
        <div class="clear"></div>
      </div>
      <!-- 列表结束 -->
      <div class="clear"></div>
      <!-- 列表开始 -->
      <div class="select3_list2">
        <div class="select3_list2_left huc">
          <img src="@/assets/image/bzdt4.png">
        </div>
        <div class="select3_list2_right">
          <p class="p1">退牌沪C所需材料</p>
          <p class="p2">
            1. 身份证，上海户口需提供外环线外的户口本；外地户口需有效期内暂住证
            并居住地址在外环以外，单位则需要统一社会信用代码证原件及公章（地址
            外环以外）。
            <br>2. 机动车登记证书、行驶证、牌照。
          </p>
        </div>
        <div class="clear"></div>
      </div>
      <!-- 列表结束 -->
      <div class="clear"></div>
      <!-- 列表开始 -->
      <div class="select3_list1 select3_list1_bottom">
        <div class="select3_list1_left">
          <p class="p1">违章查询网站</p>
          <p class="p2" @click="tiaozhuan1()">交通安全综合服务管理平台!</p>
        </div>
        <div class="select3_list1_right">
          <img src="@/assets/image/bzdt5.png">
        </div>
        <div class="clear"></div>
      </div>
      <!-- 列表结束 -->
      <div class="clear"></div>
    </div>
    <div class="clear"></div>
    <home-fotter></home-fotter>
  </div>
</template>  
  
<script>
import HomeTop from "@/pages/home/components/HomeTop";
import HomeFotter from "@/pages/home/components/HomeFotter";
export default {
  data() {
    return {
      msg: "select03"
    };
  },
  components: {
    HomeTop,
    HomeFotter
  },
  methods: {
    tiaozhuan1() {
      window.open("https://sh.122.gov.cn/", "_blank");
    }
  }
};
</script> 
<style scoped>
.bgfff {
  background: #ffffff;
}
.select3 {
  width: 84%;
  min-width: 1200px;
  margin: 0 auto;
}
.car_info_nav {
  padding: 0.36rem 0 0.5rem 0;
}
/* 列表1开始 */
.select3_list1 {
  width: 100%;
  padding: 1.5rem 0 1rem 0;
  background: #ffffff;
}
.select3_list1_left {
  float: left;
  width: 60%;
  padding-left: 0.5rem;
}
.select3_list1_left p {
  width: 90%;
  margin-left: 10%;
  font-size: 0.3rem;
  color: #525151;
  line-height: 0.6rem;
}
.select3_list1_left .p1 {
  width: 100% !important;
  font-size: 0.5rem;
  padding: 0.5rem 0 0.5rem 0rem;
  color: #010101;
}
.select3_list1_left .p2:hover {
  color: #0dcef8;
  cursor: pointer;
}
.select3_list1_right {
  width: 30%;
  float: left;
  text-align: center;
}
.select3_list1_right img {
  width: 3.5rem;
  margin-top: 1rem;
}
/* 列表1结束 */
/* 列表2开始 */
.select3_list2 {
  width: 100%;
  padding: 1.5rem 0 1rem 0;
  background: #e7e7e7;
}
.select3_list2_left {
  float: left;
  width: 30%;
  text-align: center;
  margin-left: 10%;
}
.select3_list2_left img {
  width: 3.5rem;
}
.select3_list2_right {
  width: 50%;
  float: left;
}
.select3_list2_right p {
  width: 100%;
  margin: 0 2rem;
  font-size: 0.3rem;
  color: #525151;
  line-height: 0.6rem;
}
.select3_list2_right .p1 {
  font-size: 0.5rem;
  padding: 0.5rem 0 0.5rem 0rem;
  color: #010101;
}
.p2 {
  width: 70% !important;
}
.p3 {
  font-size: 0.35rem !important;
  color: #686666 !important;
  padding-bottom: 0.5rem;
}
.select3_list1_bottom .select3_list1_left {
  width: 40%;
  margin-left: 12%;
}
.huc img {
  margin-top: 1.5rem;
}
.select3_list1_bottom .select3_list1_right img {
  width: 3rem;
  margin-top: -0.3rem;
}
.testing_box_top_box {
  background: #ffffff;
  padding: 0 0 0.2rem 0;
}
/* 列表2结束 */
</style>