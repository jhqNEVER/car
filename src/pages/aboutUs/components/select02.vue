<template>
  <div class="select3">
    <!-- 列表开始 -->
    <div class="select3_list1">
      <div class="select3_list1_left">
        <p class="p1">一口价，价格透明</p>
        <p class="p2">
          秉承车纬空间的公开、透明的经营理念,
          我们拒绝水分，拒绝蒙、骗、议；
          我们谢绝议价；直接把销售底价明示于众，
          让您能明明白白消费。
        </p>
      </div>
      <div class="select3_list1_right">
        <img src="@/assets/image/why_company1.png">
      </div>
      <div class="clear"></div>
    </div>
    <!-- 列表结束 -->
    <div class="clear"></div>
    <!-- 列表开始 -->
    <div class="select3_list2">
      <div class="select3_list2_left">
        <img src="@/assets/image/why_company2.png">
      </div>
      <div class="select3_list2_right">
        <p class="p1">专业认证</p>
        <p class="p3">严苛把关，杜绝结构性损伤车、尽最大可能规避调表车辆</p>
        <p class="p2">
          车纬空间对所有车辆进行全程质量控制，每辆车从展厅
          到售出都会经历3次严格质检，全程保障车辆的健康状况，
          客户可即买即开，放心使用。
        </p>
      </div>
      <div class="clear"></div>
    </div>
    <!-- 列表结束 -->
    <div class="clear"></div>
    <!-- 列表开始 -->
    <div class="select3_list1">
      <div class="select3_list1_left">
        <p class="p1">有保障</p>
        <p class="p3">7天内可退换，两年40000公里保修</p>
        <p class="p2">
          为所有车纬空间的客户提供无忧售后保障，
          您从车纬空间提车当天起7天内，
          您如果有任何异议车纬空间都会为您及时安排退换货!
        </p>
      </div>
      <div class="select3_list1_right">
        <img src="@/assets/image/why_company3.png">
      </div>
      <div class="clear"></div>
    </div>
    <!-- 列表结束 -->
    <div class="clear"></div>
    <!-- 列表开始 -->
    <div class="select3_list2">
      <div class="select3_list2_left">
        <img src="@/assets/image/why_company4.png">
      </div>
      <div class="select3_list2_right">
        <p class="p1">一站式售后服务</p>
        <p class="p2">
          自营维修整备车间，并提供一站式售后服务（过户上牌，保险，装潢，
          维修保养等）
        </p>
      </div>
      <div class="clear"></div>
    </div>
    <!-- 列表结束 -->
    <div class="clear"></div>
    <!-- 列表开始 -->
    <div class="select3_list1">
      <div class="select3_list1_left">
        <p class="p1">灵活的汽车金融解决方案</p>
        <p class="p2">为您量身打造适合您的专属金融计划，助您早日完成购车梦想!</p>
      </div>
      <div class="select3_list1_right">
        <img src="@/assets/image/why_company5.png">
      </div>
      <div class="clear"></div>
    </div>
    <!-- 列表结束 -->
    <div class="clear"></div>
  </div>
</template>  
  
<script>
export default {
  data() {
    return {
      msg: "select03"
    };
  }
};
</script> 
<style scoped>
.bgfff {
  background: #ffffff;
}
/* 列表1开始 */
.select3_list1 {
  width: 100%;
  padding: 1.5rem 0 1rem 0;
  background: #ffffff;
}
.select3_list1_left {
  float: left;
  width: 40%;
  padding-left: 0.5rem;
}
.select3_list1_left p {
  width: 60%;
  margin-left: 30%;
  font-size: 0.25rem;
  color: #525151;
  line-height: 0.4rem;
}
.select3_list1_left .p1 {
  width: 100% !important;
  font-size: 0.5rem;
  padding: 0.5rem 0 0.5rem 0rem;
  color: #010101;
}
.select3_list1_right {
  width: 50%;
  float: left;
  text-align: center;
}
.select3_list1_right img {
  width: 3.5rem;
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
  font-size: 0.25rem;
  color: #525151;
  line-height: 0.4rem;
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
/* 列表2结束 */
</style>