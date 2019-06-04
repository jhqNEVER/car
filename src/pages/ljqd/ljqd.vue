<template>
  <div class="min-width">
    <div class="hometop">
      <home-top></home-top>
    </div>
    <div class="testing_box">
      <el-row type="flex" :gutter="10" class="row-bg" justify="center">
        <el-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20">
          <div class="grid-content bg-purple i">
            <!-- nav开始 -->
            <div class="buycar_nav">
              <span>首页</span>
              <span>></span>
              <span>立即抢订</span>
            </div>
            <!-- nav结束 -->
            <div class="top_box">
              <div class="sc_car_list_left_main">
                <div class="img_box fl">
                  <img
                    :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_LeftFront45Degree_Pic"
                  >
                </div>
                <div class="car_img_info fl">
                  <div class="car_img_info_box">
                    <div class="car_img_info_box1">
                      <span>{{xrdata.f_CarName}}</span>
                      <!-- <span>{{item.f_SeriesName}}</span>
                      <span>{{item.f_StypeName}}</span>-->
                    </div>
                    <div class="car_img_info_box2">
                      <span>行驶：{{xrdata.f_KM/10000 |numFilter}}万公里</span>
                      <span>|</span>
                      <span>
                        <span>上牌时间：</span>
                        {{xrdata.f_PlateFirstDate}}
                      </span>

                      <span>|</span>
                      <span>排放标准：{{xrdata.carBasicInfo.f_EmissionaStandards}}</span>
                      <span>|</span>
                      <span>牌照属地：{{xrdata.f_Plate}}</span>
                    </div>
                    <div class="car_img_info_box3">
                      <span>一口价：</span>
                      <span>
                        <span class="money">¥{{xrdata.f_PreSalePrice/10000}}</span>
                      </span>
                      <span>万元</span>
                      <span>|</span>
                      <span>新车价：{{xrdata.guidePrice}}</span>
                      <span>（含26392元购置税）</span>
                    </div>
                    <div class="car_img_info_box4">
                      <label class="name_lab">姓名</label>
                      <!-- <input class="name" placeholder="请输入您的姓名"> -->
                      <el-input
                        v-model="fromdata.f_CustomerName"
                        placeholder="请输入您的姓名"
                        class="inputwidht220"
                      ></el-input>
                      <label class="phone_lab">手机号码</label>
                      <el-input
                        v-model="fromdata.f_CustomerPhone"
                        placeholder="请输入您的手机号码"
                        class="inputwidht220"
                      ></el-input>
                    </div>
                    <p class="btn_box">
                      <el-button type="primary" @click="SaveData(xrdata)">提交</el-button>
                    </p>
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
import { Carinfo } from "@/api/buyCar";
import { InsertRetailTrack } from "@/api/webapi";
export default {
  data() {
    return {
      xrdata: "",
      CarId: this.$route.params.id,
      fromdata: {
        f_CustomerName: "",
        f_CustomerPhone: "",
        f_BrandID: null,
        f_SeriesID: null,
        f_StyleID: null,
        f_CarId: 0,
        tenantId: 1
      }
    };
  },
  components: {
    HomeTop,
    HomeFotter
  },
  mounted: function() {
    this.httpGet();
  },
  filters: {
    numFilter(value) {
      // 截取当前数据到小数点后两位

      let realVal = parseFloat(value).toFixed(2);

      return realVal;
    }
  },
  methods: {
    httpGet() {
      Carinfo("/api/CarApiService/GetCarInfoViews?CarId=" + this.CarId).then(
        response => {
          this.xrdata = response.data.result;
        }
      );
    },
    SaveData(row) {
      this.fromdata.f_CarId = row.id;
      this.fromdata.typecode = 2;
      if (this.fromdata.f_CustomerName === "") {
        this.$message({
          message: "请输入姓名",
          type: "error"
        });
        return false;
      }
      var numReg = /^[0-9]+$/;
      var numRe = new RegExp(numReg);
      if (
        this.fromdata.f_CustomerPhone === "" ||
        this.fromdata.f_CustomerPhone.length !== 11 ||
        !numRe.test(this.fromdata.f_CustomerPhone)
      ) {
        this.$message({
          message: "请输入正确的手机号",
          type: "error"
        });
        return false;
      }
      InsertRetailTrack(this.fromdata).then(res => {
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
.min-width {
  min-width: 1200px;
}
.top_box {
  padding: 0rem 0 1rem 0;
  width: 100%;
}

.sc_car_list_left_main {
  width: 100%;
  height: 7rem;
  position: relative;
  margin-top: 0.4rem;
  background: #ffffff;
}

.img_box {
  width: 5.77rem;
  height: 4.54rem;
  position: absolute;
  left: 0;
}
.img_box img {
  width: 100%;
  height: 100%;
}
.car_img_info {
  margin-left: 6.87rem;
}
.car_img_info_box {
  position: absolute;
  right: 0.3rem;
  left: 6.5rem;
}
.car_img_info_box1 {
  padding: 0.77rem 0 0.4rem 0;
  border-bottom: solid 1px #efefef;
  width: 100%;
  color: #db0d17;
  font-size: 0.4rem;
  cursor: pointer;
}

.car_img_info_box2 {
  padding: 0.3rem 0 0.3rem 0;
  display: flex;
  font-size: 0.25rem;
}
.car_img_info_box2 span:not(:first-child) {
  margin-left: 0.2rem;
}
.car_img_info_box3 {
  padding: 0.25rem 0 0.1rem 0;
  display: flex;
  font-size: 0.25rem;
  border-bottom: solid 1px #efefef;
  width: 100%;
}
.car_img_info_box3 .money {
  font-size: 0.45rem;
  color: red;
}
.car_img_info_box3 span:not(:first-child) {
  margin-left: 0.2rem;
}
.car_img_info_box3 span:nth-child(2) {
  position: relative;
  top: -0.13rem;
}
.car_img_info_box4 {
  padding: 0.55rem 0 0.5rem 0;
  display: flex;
  font-size: 0.2rem;
  width: 100%;
  border-bottom: solid 1px #eeeeee;
}
.car_img_info_box4 .ljqd {
  width: 1.38rem;
  height: 0.49rem;
  background: #fa5050;
  color: #ffffff;
  border-radius: 3px;
}
.car_img_info_box4 .jrdb {
  width: 1.38rem;
  height: 0.49rem;
  margin-left: 0.2rem;
  background: #ffffff;
  border: solid 1px #cccccc;
  border-radius: 3px;
}
.car_img_info_box4 .sc {
  width: 1.38rem;
  height: 0.49rem;
  margin-left: 0.2rem;
  background: #ffffff;
  border-radius: 3px;
  border: solid 1px #cccccc;
}
.car_img_info_box4 .gz {
  margin-left: 0.44rem;
  color: #2fabac;
  padding-top: 0.1rem;
}
.phone_lab {
  padding: 0.27rem 0.3rem 0.2rem 0.5rem;
  font-weight: bold;
}
.phone {
  border: solid 1px #eeeeee;
  height: 0.7rem;
  width: 5rem;
  border-radius: 5px;
  padding-left: 5px;
}
.name_lab {
  font-weight: bold;
  padding: 0.27rem 0.3rem 0.2rem 0;
}
.name {
  border: solid 1px #eeeeee;
  height: 0.7rem;
  width: 3rem;
  border-radius: 5px;
  padding-left: 5px;
}
.btn_box {
  padding: 0.5rem 0 0.5rem 0;
}
.btn_box .el-button {
  padding: 12px 50px;
}
.hometop {
  background: #ffffff;
}
.buycar_nav {
  width: 100%;
  font-size: 0.2rem;
  padding: 0.43rem 0 0.23rem 0;
}
.inputwidht220 {
  width: 220px;
}
</style>
