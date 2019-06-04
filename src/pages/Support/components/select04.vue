<template>
  <div class="select5">
    <div class="select5_top">常见问题解答</div>
    <div class="select5_main">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="你们的车是否能贷款?" name="1">
          <div class="padding_02">
            我们有丰富的汽车金融产品，融资租赁或银行贷款等，可根据您的条件满足不同需求，金融产品详细介绍请见“我要融资”页面，
            也可到店咨询或致电021-69776066。
          </div>
        </el-collapse-item>
        <el-collapse-item title="请问购车周期，外地的办理手续要多久？" name="2">
          <div>购车时间一般在半小时至两小时之间，外地办理手续时间决定于当地车管所操作流程，详情请电话咨询021-69776066。</div>
        </el-collapse-item>
        <el-collapse-item title="我想有辆车卖掉，流程是怎么样的?" name="3">
          <div>您可登陆官网“我要卖车”的“提交卖车需求”页面了解卖车的手续及流程，具体事宜请到店咨询或致电021-69776066。</div>
        </el-collapse-item>
        <el-collapse-item title="买车后怎么上牌？" name="4">
          <div>车纬空间认证二手车具备购车、保险、上牌、装潢等一站式服务，根据客户的户籍所在地可以安排具体上牌地。详情请电话咨询021-69776066。</div>
        </el-collapse-item>
        <!-- <el-collapse-item title="百里挑一订金规则是什么？" name="5">
          <div>百里挑一活动，只要预付3000元订金，车王便会按你的要求和喜好寻找合适的车源，届时订金直接转为车价款；如没有在二个月内匹对合适车辆，车纬空间将全额退您的订金。</div>
        </el-collapse-item>-->
        <el-collapse-item title="牌照怎么过户？" name="5">
          <div>在车纬空间认证二手车超市购车我们都会代办车辆过户。具体事宜请到店咨询或致电021-69776066。</div>
        </el-collapse-item>
        <el-collapse-item title="置换有什么条件？" name="6">
          <div>您在展厅有选定的车辆后，把您的车辆开到展厅检测中心进行检测并估价，双方确认后签订合同，并补差价就可以过户进行车辆交接。具体事宜请到店咨询或致电021-69776066。</div>
        </el-collapse-item>
        <el-collapse-item title="请问可以优惠吗？" name="7">
          <div>车纬空间明码标准，实行一口价服务。</div>
        </el-collapse-item>
        <el-collapse-item title="一般定金规则是什么？" name="8">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>

        <el-collapse-item title="一元为定规则是什么？" name="9">
          <div>一元为定活动，只要预付1元订金，车纬空间便会按照您的要求和喜好寻找合适的车源，届时订金直接转为车款；如果没有在二个月内匹对合适的车辆，车纬空间将退还您的订金。</div>
        </el-collapse-item>
        <!-- <el-collapse-item title="什么是砍价区？" name="11">
          <div>
            车纬空间自开业以来，为了公平公正和价格透明，一直执行的是一口价的销售政策。但是在业务发展过程中，也看到部分中国消费者喜好讨价还价，因此推出了砍价区，以满足这一部分消费者的需求。
            什么样的车会进入砍价区？
            相对长库龄的车，会进入砍价区。二手车销售本身有淡旺季之分，而各地的限迁政策，也影响一部分二手车的销售。需要特别告知大家的是，并不是因为这部分车的车况有问题导致它们的滞销，而是市场因素所导致。所有砍价车，同样经过了严苛的车王232项检测认证，并可享受车王的质保和延保，消费者可放心购买。而这部分车，因为可以砍价，所以价格上可能会格外优惠。
            砍价区取代了原先的特惠区。
          </div>
        </el-collapse-item>-->
      </el-collapse>
    </div>
  </div>
</template>  
  
<script>
export default {
  data() {
    return {
      activeName: "1"
    };
  }
};
</script> 
<style scoped>
.select5 {
  width: 90%;
  margin: 0 auto;
}
.select5_top {
  padding: 1rem 0 1rem 0;
  font-size: 0.5rem;
}
.select5_main {
  width: 100%;
}
.el-collapse-item__header {
  height: 78px !important;
  line-height: 78px !important;
  background: red;
}

/* .padding_02 {
  padding: 0.2rem 0 0.2rem 0;
} */
.wtjd_img2 img {
  width: 23px;
}
</style>

<style>
.select5_main .el-collapse-item__header {
  border: none;
  font-size: 0.3rem;
  height: 1.5rem;
  line-height: 1.5rem;
  border-top: dashed 1px #cccccc;
}
.select5_main .el-collapse-item__content {
  font-size: 0.28rem;
  color: #666;
}
</style>