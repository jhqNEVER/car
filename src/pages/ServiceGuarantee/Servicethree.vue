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
      <span>3个月质量保证服务</span>
    </div>
    <div class="testing_box">
      <el-row type="flex" :gutter="10" class="row-bg" justify="center">
        <el-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20">
          <div class="grid-content bg-purple i">
            <!-- <div class="car_info_nav">首页 > 服务保障 > 3个月质保及延保服务</div> -->
            <!-- 保证服务开始 -->
            <div class="top_box">
              <div class="top_box_main">
                <div class="top_box_main_title">3个月质量保证服务</div>
                <div class="top_box_main1">
                  <p>
                    选择了车纬空间就拥有了无忧免费质量保证，我们销售的每辆二手车，在质保时间范围内，将为您提供更优质的售后服务。
                    “车纬空间3个月免费质保”是由车纬空间为消费者提供的一种增值售后服务产品。
                  </p>
                  <p>
                    从交车当天起计3个月/5000公里（从交车客户签字提车之日起计算，以先到者为准），享受免费质保，在质保期间，可凭《车纬空间保养手册》
                    享受车纬空间为您提供的专业、完善的免费售后服务。
                  </p>
                </div>
                <div class="top_box_main_img">
                  <img src="@/assets/image/three_yb.png">
                </div>
                <div class="top_box_main2">
                  <div class="top_box_main_title">个性化延长保修服务</div>
                  <div class="top_box_main1">
                    <p>车纬空间延伸服务计划能保护您的爱车，避免意外的修理账单。</p>
                    <p>您只需花少许的钱，您的爱车就能被涵盖进24个月或4万公里的综合保障计划。</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 保证服务结束 -->
            <div class="clear"></div>
            <!-- why延保开始 -->
            <div class="why_yb_box">
              <div class="why_yb">
                <div class="why_yb_left">
                  <div class="why_yb_left_title">什么是延保服务</div>
                  <div class="why_yb_left_font">
                    延保服务，即延长车辆保修期服务。当客户的车辆在整个延长保修期间，
                    只要符合延长保修赔付的要求，便可对于其任何可能出现的车辆机械或
                    者电器故障实施免费保修的保修契约服务。
                  </div>
                </div>
                <div class="why_yb_right">
                  <img src="@/assets/image/bao.png">
                </div>
                <div class="clear"></div>
              </div>
            </div>
            <!-- why延保结束 -->
            <div class="clear"></div>
            <!-- 延保价值开始 -->
            <div class="yb_val_box">
              <div class="yb_val">
                <div class="yb_val_title">延保服务的价值</div>
                <div class="yb_val_main">
                  <div class="yb_val_main_left">
                    <img src="@/assets/image/yb_val1.png">
                  </div>
                  <div class="yb_val_main_right">
                    <img src="@/assets/image/yb_val2.png">
                  </div>
                </div>
              </div>
              <div class="clear"></div>
            </div>
            <!-- 延保价值结束 -->
            <div class="clear"></div>
            <!-- 延保产品开始 -->
            <div class="yb_product_box">
              <div class="yb_product">
                <div class="yb_val_title yb_val_title1">延保产品</div>
                <div class="yb_val_main">
                  <ul>
                    <li class="li1">
                      <p>免费</p>
                      <p>
                        车辆在延保期内发生故障，且为所购
                        买延保方案的保障范围内，所产生的
                        零部件、工时费及拖车费全免
                      </p>
                    </li>
                    <li class="li1">
                      <p class="pospl">保修计划</p>
                      <p class="pospt pospl">
                        根据延保范围不同，
                        为您提供三种延保方案：
                        银牌方案、金牌方案和钻石方案
                      </p>
                    </li>
                    <li class="li1 li3">
                      <p class="pospl">保修期限</p>
                      <p class="pospt pospl">
                        灵活选择延保时长，
                        分别为延长至半年或10000公里、
                        一年或20000公里、两年或40000公里，
                        时限或公里数以先到为准
                      </p>
                    </li>
                    <li class="li2">
                      <p class="pospt1">维修</p>
                      <p class="pospt1">严格采用纯正原厂或品牌部件进行维修</p>
                    </li>
                    <li class="li2">
                      <p class="pospl pospt1">购买灵活</p>
                      <p class="pospt1 pospl">顾客在购车3个月内或行驶5000公里之内（以先到为准）提出申请，并通过车王245项检测之后，即可购买延保产品</p>
                    </li>
                    <li class="li2 li3">
                      <p class="pospl pospt1">随车转让</p>
                      <p class="pospt1 pospl">在延保期内，延保服务可随车转让过户一次</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="clear"></div>
            </div>
            <!-- 延保产品结束 -->
            <div class="clear"></div>
            <!-- 车纬空间延保优势及特点开始 -->
            <div class="yb_td_box">
              <div class="yb_td">
                <div class="yb_td_title">
                  <div class="yb_val_title">车纬空间延保优势及特点</div>
                </div>
                <div class="yb_td_img">
                  <ul>
                    <li class="yb_td_img1">
                      <img src="@/assets/image/yb_youshi.png">
                    </li>
                    <li class="yb_td_img2">
                      <img src="@/assets/image/yb_vs.png">
                    </li>
                    <li class="yb_td_img1">
                      <img src="@/assets/image/yb_tedian1.png">
                    </li>
                  </ul>
                  <div class="clear"></div>
                </div>
                <div class="yb_td_main">
                  <div class="yb_td_main_left">
                    <ul class="yb_td_main_ul">
                      <!-- <li>
                        <span>
                          <img src="@/assets/image/xing_red.png">
                        </span>
                        <span>国内最大二手车经营企业，强大的实力是信誉的保证；</span>
                      </li>-->
                      <li>
                        <span>
                          <img src="@/assets/image/xing_red.png">
                        </span>
                        <span>使用纯正原厂或品牌部件，为您承担高额维修费用；</span>
                      </li>
                      <li>
                        <span>
                          <img src="@/assets/image/xing_red.png">
                        </span>
                        <span>随车转让制度，在您卖车时无需多费口舌，成交价格提高几千元甚至上万元；</span>
                      </li>
                      <li>
                        <span>
                          <img src="@/assets/image/xing_red.png">
                        </span>
                        <span>免费的车纬空间会员增值服务;</span>
                      </li>
                    </ul>
                  </div>
                  <div class="yb_td_main_right">
                    <ul class="yb_td_main_ul">
                      <li>
                        <span>
                          <img src="@/assets/image/xing_green.png">
                        </span>
                        <span>更省心：一次小小投入、给你大大保障</span>
                      </li>
                      <!-- <li>
                        <span>
                          <img src="@/assets/image/xing_red.png">
                        </span>
                        <span>更安心：车纬空间及授权品牌4S店进行维修</span>
                      </li>-->
                      <li>
                        <span>
                          <img src="@/assets/image/xing_green.png">
                        </span>
                        <span>更省钱：无需承担额外维修费用，延保服务合同直接支付</span>
                      </li>
                      <li>
                        <span>
                          <img src="@/assets/image/xing_green.png">
                        </span>
                        <span>更保值：可转让，增加车辆价值和售出机会;</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="clear"></div>
            </div>
            <!-- 车纬空间延保优势及特点结束 -->
            <div class="clear"></div>
            <!-- Q&A开始 -->
            <div class="QA_box">
              <div class="QA">
                <div class="QA_title">
                  <div class="yb_val_title">Q&A</div>
                </div>
                <div class="QA_main">
                  <div class="QA_main_list">
                    <div class="QA_main_list_title">
                      <span>
                        <img src="@/assets/image/yb_fdj.png">
                      </span>
                      <span>延保不就和汽车保险一个意思嘛?</span>
                    </div>
                    <div class="QA_main_list_info">
                      延保全称为延长保修服务，非汽车保险类服务。汽车保险是在汽车发生意外事故时提供的维修保障服务，延保是车辆在正常使用过程中
                      产生故障提供的维修保障服务，与汽车保险共同组合为消费者使用车辆提供全面保障。
                    </div>
                  </div>
                  <div class="QA_main_list">
                    <div class="QA_main_list_title">
                      <span>
                        <img src="@/assets/image/yb_fdj.png">
                      </span>
                      <span>延保真的有意义么？是否能够用得到?</span>
                    </div>
                    <div class="QA_main_list_info">
                      随着车辆使用年限和公里数的不断增加，车辆零部件越发容易损坏，而且道路的复杂、空气的质量都将直接影响车辆的使用。购买了延
                      保，您将无需担心以上问题，仅需进行正常的保养，剩下的事情交给车纬空间即可。而且延保期内转让车辆，大大增加出售的机会，价
                      格也会更高!
                    </div>
                  </div>
                  <div class="QA_main_list">
                    <div class="QA_main_list_title">
                      <span>
                        <img src="@/assets/image/yb_fdj.png">
                      </span>
                      <span>买了延保，车辆出了故障，维修有保障么？</span>
                    </div>
                    <div class="QA_main_list_info">
                      车纬空间销售的认证二手车均通过245项检测及232项认证，这近似苛刻的质量管理体系造就了我们的产品和服务品质。当车辆发生故障
                      时您可以选择在车纬空间或车纬空间授权品牌4S店进行维修，我们将严格采用纯正原厂或品牌部件进行维修，维修完成后须再次通过车
                      纬空间标准认证，您就可以放心用车，高枕无忧。
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Q&A结束 -->
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
  height: auto;
  background: #ffffff;
}
.top_box_main {
  width: 90%;
  margin: 0 auto;
  padding-bottom: 1rem;
}
.top_box_main_title {
  width: 100%;
  padding: 0.8rem 0 0.8rem 0;
  font-size: 0.5rem;
  text-align: center;
}
.top_box_main1 p {
  width: 95%;
  margin: 0 auto;
  line-height: 0.5rem;
  text-align: center;
}
.top_box_main_img {
  padding: 1rem 0 0 0;
}
.top_box_main_img img {
  width: 100%;
}
.top_box_main2 {
  padding-top: 1rem;
}
.why_yb_box {
  width: 100%;
  background: #e7e7e7;
}
.why_yb {
  width: 90%;
  padding: 1rem 0 1rem 0;
  margin: 0 auto;
}
.why_yb_left {
  float: left;
  width: 60%;
}
.why_yb_left_title {
  padding: 0.8rem 0 0.8rem 0;
  font-size: 0.5rem;
}
.why_yb_left_font {
  font-size: 0.29rem;
  line-height: 0.5rem;
  color: #525151;
}
.why_yb_right {
  float: right;
  width: 40%;
  text-align: right;
}
.why_yb_right img {
  width: 4.2rem;
}
.yb_val_box {
  width: 100%;
  padding: 1rem 0 1rem 0;
  background: #ffffff;
}
.yb_val {
  width: 90%;
  margin: 0 auto;
}
.yb_val_title {
  padding: 0.8rem 0 0.8rem 0;
  font-size: 0.5rem;
}
.yb_val_title1 {
  padding-bottom: 1.2rem;
  color: #917c7c;
}
.yb_val_main {
  width: 100%;
}
.yb_val_main_left {
  width: 45%;
  float: left;
}
.yb_val_main_left img {
  width: 9rem;
}
.yb_val_main_right {
  width: 45%;
  float: right;
  text-align: right;
}
.yb_val_main_right img {
  width: 9rem;
}
.yb_product_box {
  width: 100%;
  background: #e7e7e7;
  padding-bottom: 1rem;
}
.yb_product {
  width: 90%;
  margin: 0 auto;
  padding: 1rem 0 1rem 0;
}
.yb_val_main {
  padding: 0 0 0 0;
}
.yb_val_main ul li {
  float: left;
  width: 33%;
  color: #525151;
  padding-bottom: 1.5rem;
}
.yb_val_main ul li p {
  width: 80%;
}
.yb_val_main ul li p:first-child {
  font-size: 0.5rem;
  padding-bottom: 0.5rem;
}
.yb_val_main ul li p:last-child {
  font-size: 0.3rem;
  line-height: 0.4rem;
}
.yb_val_main ul .li1 {
  border-right: dashed 1px #525151;
  border-bottom: dashed 1px #525151;
  height: 1.5rem;
}
.yb_val_main ul .li2 {
  border-right: dashed 1px #525151;
}
.yb_val_main ul .li2 {
  border-bottom: none;
}
.yb_val_main ul .li3 {
  border-right: none;
}
.pospl {
  position: relative;
  left: 0.5rem;
}
.pospt {
  position: relative;
  top: 0.1rem;
}
.pospt1 {
  position: relative;
  top: 0.5rem;
}
.yb_td_box {
  width: 100%;
  padding: 1rem 0 1rem 0;
  background: #ffffff;
}
.yb_td {
  width: 90%;
  margin: 0 auto;
  padding: 0rem 0 1rem 0;
}
.yb_td_img {
  width: 50%;
  margin: 0 auto;
}
.yb_td_img ul li {
  float: left;
  text-align: center;
}

.yb_td_img1 {
  width: 30%;
}
.yb_td_img1 img {
  width: 2.5rem;
}
.yb_td_img2 {
  width: 30%;
}
.yb_td_img2 img {
  width: 1.8rem;
}
.yb_td_main {
  width: 100%;
}
.yb_td_main_left {
  width: 48%;
  float: left;
}
.yb_td_main_left img {
  width: 0.3rem;
}
.yb_td_main_ul {
  padding-top: 1rem;
}
.yb_td_main_ul li {
  padding-top: 0.2rem;
  line-height: 0.5rem;
}
.yb_td_main_ul li span:first-child {
  display: block;
  float: left;
  position: relative;
  top: -3px;
  padding-right: 5px;
}
.yb_td_main_right {
  width: 48%;
  float: right;
}
.yb_td_main_right img {
  width: 0.3rem;
}
.QA_box {
  width: 100%;
  padding: 1rem 0 1rem 0;
  background: #e7e7e7;
}
.QA {
  width: 90%;
  margin: 0 auto;
}
.QA_main_list {
  width: 100%;
  padding-bottom: 1rem;
}
.QA_main_list_title {
  width: 100%;
  font-size: 0.5rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
}
.QA_main_list_title img {
  width: 0.7rem;
  position: relative;
  top: -3px;
}
.QA_main_list_info {
  line-height: 0.5rem;
}
.testing_box_top_box {
  background: #ffffff;
  padding: 0 0 0.2rem 0;
}
</style>
