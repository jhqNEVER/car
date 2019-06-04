<template>
  <div>
    <div class="testing_box_top_box">
      <home-top></home-top>
    </div>

    <div class="header_title">
      <span>首页</span>
      <span>></span>
      <span>我要卖车</span>
      <span>></span>
      <span>填写卖车需求</span>
    </div>

    <!-- 头部背景图片开始 -->
    <div class="sale_top">
      <div class="sale_top_img">
        <img src="@/assets/image/sale_car.png">
      </div>
      <div class="sale_top_opcity">
        <p class="sale_top_opcity_p1">
          好车卖
          <span class="sale_top_opcity_red">高价</span> 极速打款
        </p>
        <p class="sale_top_opcity_p2">
          已有
          <span class="sale_top_opcity_red">336542</span> 人成功卖车
        </p>
        <p class="p3 p3_input">
          <el-input placeholder="请输入您的手机号" v-model="formdate.CustomerPhone" maxlength="11">
            <el-button slot="append" class="btn_yuyue" @click="btn_appointment()">预约卖车</el-button>
          </el-input>
        </p>
        <div class="sale_top_opcity_bottom">
          <p class="p4">
            <span></span>
            <span>免费咨询热线：021-69776066</span>
          </p>
          <p class="p5">车纬空间拒收结构性损伤车、泡水车、火烧车、公里数不实车以及手续不合法等问题车</p>
        </div>
      </div>
    </div>
    <!-- 头部背景图片结束 -->
    <!-- 买车流程开始 -->
    <div class="sale_process">
      <div class="sale_process_title">卖车流程</div>
      <div class="sale_process_title2">爱车卖高价，原来如此简单！人到 车到 款到，享受极速卖车体验。</div>
      <div class="sale_process_img_box">
        <ul>
          <li>
            <img class="sale_process_img_box_img1" src="@/assets/image/sale_jbxx.png">
            <p class="sale_process_p1">
              <b>提交信息</b>
            </p>
            <p class="sale_process_p2">官网提交卖车需求</p>
          </li>
          <li>
            <img class="sale_process_img_box_img2" src="@/assets/image/diandian_11.png">
          </li>
          <li>
            <img class="sale_process_img_box_img1" src="@/assets/image/sale_car1.png">
            <p class="sale_process_p1">
              <b>人车到店</b>
            </p>
            <p class="sale_process_p2">专业定价，即刻成交</p>
          </li>
          <li>
            <img class="sale_process_img_box_img2" src="@/assets/image/diandian_11.png">
          </li>
          <li>
            <img class="sale_process_img_box_img1" src="@/assets/image/sale_ca2.png">
            <p class="sale_process_p1">
              <b>签约过户</b>
            </p>
            <p class="sale_process_p2">交接完成后1小时到账</p>
          </li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
    <!-- 买车流程结束 -->
    <div class="clear"></div>
    <!-- 卖车指南开始 -->
    <div class="sale_car_guide">
      <div class="sale_process_title">卖车指南</div>
      <div class="sale_process_conent">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="Q1 关于车纬空间二手车？" name="2">
            <div>车纬空间立足于创造诚信而令人喜悦的二手车服务平台，实施品牌化战略管理，以“更多放心、更多选择”为服务宗旨，以产品标准化、管理流程化、发展规模化为企业经营理念，真正实现了认证车辆全程质量控制体系，为消费者提供性价比极高、品质有保障的专业二手车产品及相关服务。</div>
          </el-collapse-item>
          <el-collapse-item title="Q2 出售车辆必须符合的条件？" name="3">
            <div>年限里程需在10年20万公里内，无重大事故，符合车纬空间245项检测</div>
          </el-collapse-item>
          <el-collapse-item title="Q3 如何卖车？" name="4">
            <div>1. 在官网提交卖车需求或拔打021-69776066</div>
            <div>2. 人、车到店</div>
            <div>3. 达成交易，签约过户</div>
          </el-collapse-item>
          <el-collapse-item title="Q4 卖车所需准备的材料？" name="5">
            <div>1. 大品牌、实体店，安全有保障。</div>
            <div>2. 行驶证</div>
            <div>3. 车辆登记证</div>
            <div>4. 购置税本及购置税发票</div>
            <div>5. 交强险单</div>
            <div>6. 购车发票</div>
            <div>7. 车辆钥匙</div>
            <div>8.车辆保养手册</div>
            <div>9.车辆使用说明书</div>
          </el-collapse-item>
          <el-collapse-item title="Q5 为什么把车卖给车纬空间?" name="6">
            <!-- <div>车王二手车是国内超大型的二手车连锁经营企业，作为中国二手车零售行业的领跑者，真正实现了认证车辆全程质量控制体系，成为引领汽车生活新时尚的创新者和改革者。</div> -->

            <div>1. 大品牌、实体店，安全有保障。</div>
            <div>2. 标准定价，拒绝套路。</div>
            <div>3. 极速打款，免遭车辆贬值。</div>
            <div>4. 一站式服务，快捷省心。</div>
            <div>5. 专业顾问全程陪同，讲解细致够贴心。</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <!-- 卖车指南结束 -->
    <div class="clear"></div>
    <div class="fottom_phone">
      <p class="p p3_input">
        <el-input placeholder="请输入您的手机号" v-model="formdate.CustomerPhone" maxlength="11">
          <el-button slot="append" class="btn_yuyue" @click="btn_appointment()">预约卖车</el-button>
        </el-input>
      </p>
    </div>
    <div class="clear"></div>
    <home-fotter></home-fotter>
  </div>
</template>
<script>
import HomeTop from "@/pages/home/components/HomeTop";
import HomeFotter from "@/pages/home/components/HomeFotter";
import { PurchasingCluesInsert } from "@/api/webapi";

export default {
  components: {
    HomeTop,
    HomeFotter
  },
  data() {
    return {
      activeNames: ["1"],
      formdate: {
        CustomerPhone: "",
        marketID: 1,
        sourceClue: 2
      }
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    btn_appointment() {
      if (
        this.formdate.CustomerPhone !== "" &&
        this.formdate.CustomerPhone.length === 11
      ) {
        PurchasingCluesInsert(this.formdate).then(res => {
          this.$message({
            message: "恭喜你，提交成功",
            type: "success"
          });
        });
      } else {
        this.$message({
          message: "请输入正确的手机号",
          type: "error"
        });
      }
    }
  }
};
</script>
<style scoped>
/* 李倩修改（2019-5-30） */
.p3_input .el-input-group {
  width: 400px !important;
}
.p3_input .el-input-group .el-button {
  color: #ffffff;
}
.p3_input .el-input-group__append,
.el-input-group__prepend {
  border: 1px solid #009899 !important;
  background-color: #009899;
}
.p3_input .el-input-group .el-button {
  background: #009899;
  border: none;
}
.clear {
  clear: both;
}
.header_title {
  width: 80%;
  min-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 0 0.5rem 0;
}
.testing_box_top_box {
  background: #ffffff;
  padding: 0 0 0.2rem 0;
}
.sale_top {
  width: 80%;
  margin: 0 auto;
  min-width: 1200px;
  /* height: 5.76rem; */
  position: relative;
}
.sale_top_img {
  position: relative;
}
.sale_top_img img {
  width: 100%;
}
.sale_top_opcity {
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(204, 204, 204, 0.5);
  text-align: center;
}
.sale_top_opcity .sale_top_opcity_p1 {
  font-size: 0.7rem;
  padding: 1rem 0 0.4rem 0;
  color: #009899;
  font-weight: bold;
}
.sale_top_opcity .sale_top_opcity_p2 {
  font-size: 0.3rem;
  color: #009899;
}
.sale_top_opcity .sale_top_opcity_red {
  color: red;
}
.sale_top_opcity .p3 {
  padding: 1rem 0 1rem 0;
}
/* .sale_top_opcity .p3 input {
  height: 0.8rem;
  width: 5.5rem;
  padding-left: 0.2rem;
}
.sale_top_opcity .p3 button {
  height: 0.8rem;
  padding: 0 0.2rem 0 0.2rem;
  background: #009899;
  color: #ffffff;
} */
.sale_top_opcity_bottom {
  position: absolute;
  width: 100%;
  padding: 0.5rem 0 0.5rem 0;
  background: rgba(239, 10, 21, 0.8);
  bottom: 0;
  color: #ffffff;
}
.sale_top_opcity_bottom .p4 {
  font-size: 0.4rem;
}
.sale_top_opcity_bottom .p5 {
  font-size: 0.3rem;
  padding-top: 0.5rem;
}
.sale_process {
  width: 80%;
  min-width: 1200px;
  margin: 0rem auto;
  height: auto;
  background: #ffffff;
}
.sale_process_title {
  text-align: center;
  font-size: 0.6rem;
  padding-top: 1.42rem;
}
.sale_process_title2 {
  text-align: center;
  color: #009899;
  padding-top: 0.62rem;
  padding-bottom: 0.67rem;
  font-size: 0.4rem;
}
.sale_process_img_box {
  width: 74%;
  height: auto;
  margin: 0.4rem auto;
}
.sale_process_img_box ul li {
  float: left;
  width: 20%;
  text-align: center;
}
.sale_process_img_box ul li .sale_process_img_box_img1 {
  width: 3rem;
  height: 3rem;
}
.sale_process_img_box ul li .sale_process_img_box_img2 {
  position: relative;
  top: 1.5rem;
}
.sale_process_p1 {
  padding-top: 0.28rem;
  font-size: 0.35rem;
}
.sale_process_p2 {
  padding-top: 0.28rem;
  color: #7e7d7c;
  font-size: 0.3rem;
  padding-bottom: 1.09rem;
}

.sale_car_guide {
  width: 80%;
  min-width: 1200px;
  background: #ffffff;
  margin: 0.5rem auto 0 auto;
}
.sale_process_conent {
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
}
.el-collapse-item__headed {
  font-size: 15px !important;
}
.fottom_phone {
  padding: 1.5rem 0 1.5rem 0;
  text-align: center;
}
/* .fottom_phone .p3 input {
  height: 0.8rem;
  width: 5.5rem;
  padding-left: 0.2rem;
}
.fottom_phone .p3 button {
  height: 0.8rem;
  padding: 0 0.2rem 0 0.2rem;
  background: #009899;
  color: #ffffff;
} */
</style>
<style>
.sale_process_conent .el-collapse-item__header {
  font-size: 0.35rem;
  padding-left: 1rem;
  height: 1.3rem;
  line-height: 1.3rem;
}
.sale_process_conent .el-collapse-item__content {
  font-size: 0.3rem;
  padding-left: 1rem;
  color: #666;
}
</style>
