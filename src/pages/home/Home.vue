<template>
  <div class="index_box">
    <div class="hometop_index">
      <home-top></home-top>
    </div>
    <home-header></home-header>
    <div class="clear"></div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="16">
            <div class="grid-content bg-purple home_brand_left">
              <div class="home_top_buy">
                <div class="mai">买</div>
                <div class="home_top_buy_img">
                  <img src="@/assets/image/small_car.png">
                </div>
              </div>
              <div class="car_name_list">
                <div>
                  <ul>
                    <li
                      @click="httpbrandfun(item.nameCn,item.code)"
                      v-for="(item,index) of brandlist1"
                      v-if="index<9"
                      :key="item.code"
                    >{{item.nameCn}}</li>

                    <li class="more_brand">
                      <span class="blue">更多</span>
                      <div class="more_brand_div">
                        <div class="more_brand_div_list">
                          <div
                            class="more_brand_div_list_left"
                            v-for="(item,index) of brandlist"
                            :key="item.index"
                          >
                            <div class="more_brand_div_ABC">{{item.Letter}}</div>
                            <div class="more_brand_div_name">
                              <ul>
                                <li
                                  @click="httpbrandfun(item.NameCn,item.Code)"
                                  v-for="item of item.BrandList"
                                  :key="item.code"
                                >{{item.NameCn}}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li
                      @click="httppicfun(item)"
                      v-for="(item,index) of demoney"
                      :key="item.index"
                    >{{item}}</li>
                  </ul>
                </div>
                <div class="clear"></div>
                <div>
                  <ul>
                    <li
                      @click="httptypefun(item)"
                      v-for="(item,index) of carsys"
                      :key="item.index"
                    >{{item}}</li>
                  </ul>
                </div>
                <div class="clear"></div>
                <div>
                  <input type="text" class="search" ref="homesearch" placeholder="输入关键字，如宝马x1">
                  <span class="el-icon-search icon-search" @click="httpkeyfun()"></span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <div class="home_top_sale">
                <div>卖</div>
                <div class="home_top_buy_img">
                  <img src="@/assets/image/small_car.png">
                </div>
              </div>
              <div class="home_top_right_list home_top_right_list_box">
                <ul>
                  <li>
                    <span class="ksmc">快速卖车</span>
                  </li>
                  <li>
                    <span class="maiche_num">
                      已有
                      <span class="num">34300</span> 人成功卖车
                    </span>
                  </li>
                  <li>
                    <input
                      type="text"
                      class="phone"
                      placeholder="请输入手机号"
                      v-model="formdate.CustomerPhone"
                      maxlength="11"
                    >
                  </li>
                  <li>
                    <button class="btn mysalebtn" @click="btnappointment()">我要卖车</button>
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <div class="clear"></div>

      <el-main class="main_box">
        <el-tabs type="border-card">
          <p class="rmcx_car_list_p1_more">
            <router-link to="./buyCar">
              更多
              <span class="el-icon-caret-right"></span>
            </router-link>
          </p>
          <el-tab-pane class="rmcx_car_list" label="热门车型">
            <el-row class="rmcx_car_list_li">
              <el-col :span="6" v-for="item of hotCarlist" :key="item.id">
                <div class="grid-content bg-purple" @click="carInfo(item.Id)">
                  <div class="rmcx_list_box">
                    <div class="rmcx_img">
                      <!-- <img src="@/assets/image/car_03.png"> -->
                      <img :src="'http://market.api.yuncaiit.com/'+item.F_Pic1">
                    </div>
                    <div class="cleaar"></div>
                    <div class="rmcx_car_name">
                      <span>{{item.F_CarName}}</span>
                    </div>
                    <div class="rmcx_car_info">
                      <span>{{item.F_PlateFirstDate}} 上牌 | 行驶{{item.F_KM/10000|numFilter}}万公里</span>
                    </div>
                    <div class="rmcx_car_money">
                      <span>全国一口价</span>
                      <span>{{item.F_PreSalePrice/10000}}万</span>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>

            <div class="clear"></div>
          </el-tab-pane>
          <el-tab-pane class="rmcx_car_list" label="最新上架">
            <el-row class="rmcx_car_list_li">
              <el-col :span="6" v-for="item of todayCarlist" :key="item.id">
                <div class="grid-content bg-purple" @click="carInfo(item.Id)">
                  <div class="rmcx_list_box">
                    <div class="rmcx_img">
                      <!-- <img src="@/assets/image/car_03.png"> -->
                      <img :src="'http://market.api.yuncaiit.com/'+item.F_Pic1">
                    </div>
                    <div class="cleaar"></div>
                    <div class="rmcx_car_name">
                      <span>{{item.F_CarName}}</span>
                    </div>
                    <div class="rmcx_car_info">
                      <span>{{item.F_PlateFirstDate}} 上牌 | 行驶{{item.F_KM/10000}}万公里</span>
                    </div>
                    <div class="rmcx_car_money">
                      <span>全国一口价</span>
                      <span>{{item.F_PreSalePrice/10000}}万</span>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="今日特价">
            <el-row class="rmcx_car_list_li">
              <el-col :span="6" v-for="item of tjCarlist" :key="item.id">
                <div class="grid-content bg-purple" @click="carInfo(item.Id)">
                  <div class="rmcx_list_box">
                    <div class="rmcx_img">
                      <!-- <img src="@/assets/image/car_03.png"> -->
                      <img :src="'http://market.api.yuncaiit.com/'+item.F_Pic1">
                    </div>
                    <div class="cleaar"></div>
                    <div class="rmcx_car_name">
                      <span>{{item.F_CarName}}</span>
                    </div>
                    <div class="rmcx_car_info">
                      <span>{{item.F_PlateFirstDate}} 上牌 | 行驶{{item.F_KM/10000}}万公里</span>
                    </div>
                    <div class="rmcx_car_money">
                      <span>全国一口价</span>
                      <span>{{item.F_PreSalePrice/10000}}万</span>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="准新车">
            <el-row class="rmcx_car_list_li">
              <el-col :span="6" v-for="item of znewCarlist" :key="item.id">
                <div class="grid-content bg-purple" @click="carInfo(item.Id)">
                  <div class="rmcx_list_box">
                    <div class="rmcx_img">
                      <!-- <img src="@/assets/image/car_03.png"> -->
                      <img :src="'http://market.api.yuncaiit.com/'+item.F_Pic1">
                    </div>
                    <div class="cleaar"></div>
                    <div class="rmcx_car_name">
                      <span>{{item.F_CarName}}</span>
                    </div>
                    <div class="rmcx_car_info">
                      <span>{{item.F_PlateFirstDate}} 上牌 | 行驶{{item.F_KM/10000}}万公里</span>
                    </div>
                    <div class="rmcx_car_money">
                      <span>全国一口价</span>
                      <span>{{item.F_PreSalePrice/10000}}万</span>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="已售车型">
            <el-row class="rmcx_car_list_li">
              <el-col :span="6" v-for="item of saledCarlist" :key="item.id">
                <div class="grid-content bg-purple" @click="carInfo(item.Id)">
                  <div class="rmcx_list_box">
                    <div class="rmcx_img">
                      <!-- <img src="@/assets/image/car_03.png"> -->
                      <img :src="'http://market.api.yuncaiit.com/'+item.F_Pic1">
                    </div>
                    <div class="cleaar"></div>
                    <div class="rmcx_car_name">
                      <span>{{item.F_CarName}}</span>
                    </div>
                    <div class="rmcx_car_info">
                      <span>{{item.F_PlateFirstDate}} 上牌 | 行驶{{item.F_KM/10000}}万公里</span>
                    </div>
                    <div class="rmcx_car_money">
                      <span>全国一口价</span>
                      <span>{{item.F_PreSalePrice/10000}}万</span>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
        <div class="clear"></div>
      </el-main>
      <div class="clear"></div>
      <!-- 底部容器开始 -->
      <el-footer>
        <el-row>
          <el-col :span="24">
            <div class="grid-content huodong_title bg-purple-dark">
              <span class="cwkjhd">车纬空间活动</span>
              <span class="more" @click="more_huodong()">
                <!-- <router-link to="./aboutcompany"> -->
                更多
                <span class="el-icon-caret-right"></span>
                <!-- </router-link> -->
              </span>
            </div>
          </el-col>
        </el-row>
        <div class="huodong_content">
          <el-row :gutter="20">
            <el-col :span="8" v-for="item of activitylist" :key="item.id">
              <div class="grid-content bg-purple huodong_list_box">
                <div class="huodong_content_img">
                  <img :src="'http://123.58.133.111:52744/'+item.f_CoverFile">
                </div>
                <div class="huodong_content_name">{{item.f_Title}}</div>
                <div class="huodong_content_time">{{item.creationTime}}</div>
                <div class="huodong_content_info">
                  <p>{{item.f_BriefIntroduction}}</p>
                </div>
                <div class="clear"></div>
                <div class="ckxq_btn_box">
                  <p>
                    <button class="ckxq" @click="activityinfo(item.id)">查看详情</button>
                  </p>
                </div>
                <div class="clear"></div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-footer>
      <!-- 底部容器结束 -->
      <div class="clear"></div>
    </el-container>
    <div class="clear"></div>
    <div class="fottom_end">
      <span class="fottom_end_span1">
        选择车纬空间让你拥有
        <span class="better_car">更好的车</span>
      </span>
      <button class="fottom_end_btn1">
        <router-link to="./buyCar">我要买车</router-link>
      </button>
      <button class="fottom_end_btn2">
        <router-link to="./saleCar">我要卖车</router-link>
      </button>
    </div>
    <home-fotter></home-fotter>
  </div>
</template>

<script>
import HomeTop from "./components/HomeTop";
import HomeHeader from "./components/HomeHeader";
import HomeFotter from "./components/HomeFotter";
import { carBrand } from "@/api/testApi";
import { homehot } from "@/api/buyCar";
import { brandABC } from "@/api/testApi";
import { homeActivity } from "@/api/buyCar"; //活动
import { PurchasingCluesInsert } from "@/api/webapi";
export default {
  name: "Home",
  components: {
    HomeTop,
    HomeHeader,
    HomeFotter
  },
  data() {
    return {
      activeName2: "first",
      brandlist1: "", //品牌名称
      brandlist: "", //品牌名称ABC
      hotCarlist: "", //热门车型
      todayCarlist: "", //最新上架
      tjCarlist: "", //今日特价
      znewCarlist: "", //准新车
      saledCarlist: "", //已售车型
      activitylist: "", //活动
      formdate: {
        CustomerPhone: "",
        marketID: 1,
        sourceClue: 2
      },
      demoney: [
        "5-8万",
        "8-10万",
        "10-15万",
        "15-20万",
        "20-30万",
        "30-50万",
        "50万以上"
      ], //默认价格
      //默认车类型，比如大中型，小型
      carsys: ["所有轿车", "MPV", "SUV", "跑车"]
    };
  },

  methods: {
    //品牌名称
    httpGet2() {
      carBrand("/api/services/app/WebApiService/BrandList").then(response => {
        // this.brandlist = response.data.result;

        this.brandlist1 = response.data.result;
      });
    },
    //品牌名称ABC
    httpGet() {
      brandABC("/api/services/app/WebApiService/CarBrandList").then(
        response => {
          // this.brandlist = response.data.result;
          this.brandlist = response.data.result.CarBrandData;
        }
      );
    },
    //热门车型
    httpGet1() {
      homehot("/api/CarApiService/GetShowTypeList").then(response => {
        // this.alldata = response.data.result;

        this.hotCarlist = response.data.result.CarListData[0].CarDataList; //热门车型
        this.todayCarlist = response.data.result.CarListData[1].CarDataList; //最新上架
        this.tjCarlist = response.data.result.CarListData[2].CarDataList; //今日特价
        this.znewCarlist = response.data.result.CarListData[3].CarDataList; //准新车
        this.saledCarlist = response.data.result.CarListData[4].CarDataList; //已售车型
      });
    },
    //活动
    httpGetactivity() {
      homehot("/api/ActivityApiService/ActivityListTop3").then(response => {
        // this.alldata = response.data.result;
        this.activitylist = response.data.result;
      });
    },

    //跳转车辆详情
    //车辆详情跳转

    carInfo(id, userCollection) {
      this.$router.push({
        name: "car_info",
        params: { id: id, userCollection: "false" }
      });
    },
    //点击关键字图标跳转我要买车页面
    httpkeyfun() {
      this.$router.push({
        name: "buyCar",
        params: { wordkey: this.$refs.homesearch.value }
      });
    },
    //点击品牌名称跳转我要买车页面
    httpbrandfun(namecn, code) {
      this.$router.push({
        name: "buyCar",
        params: { namecn: namecn, code: code }
      });
    },
    //点击价格跳转我要买车页面
    httppicfun(money) {
      this.$router.push({
        name: "buyCar",
        params: { homepic: money }
      });
    },
    //点击车辆类型跳转我要买车页面
    httptypefun(type) {
      this.$router.push({
        name: "buyCar",
        params: { type: type }
      });
    },

    //点击活动进入详情
    activityinfo(id) {
      this.$router.push({
        name: "activity",
        params: { id: id }
      });
    },
    //点击更多活动
    more_huodong() {
      this.$router.push({
        name: "aboutcompany"
        // params: { id: "select4" }
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    btnappointment() {
      var numReg = /^[0-9]+$/;
      var numRe = new RegExp(numReg);
      if (
        this.formdate.CustomerPhone === "" ||
        this.formdate.CustomerPhone.length !== 11 ||
        !numRe.test(this.formdate.CustomerPhone)
      ) {
        this.$message({
          message: "请输入正确的手机号",
          type: "error"
        });
      } else {
        PurchasingCluesInsert(this.formdate).then(res => {
          this.$message({
            message: "恭喜你，提交成功",
            type: "success"
          });
        });
      }
    }
  },
  //过滤函数
  filters: {
    numFilter(value) {
      // 截取当前数据到小数点后两位

      let realVal = parseFloat(value).toFixed(2);

      return realVal;
    },
    numFilter1(value) {
      // 截取当前数据到小数点后0位

      let realVal = parseFloat(value).toFixed(0);

      return realVal;
    },
    datefilters(val) {
      return val.substring(0, 4) + "年" + val.substring(5, 7) + "月";
    }
  },
  mounted: function() {
    this.httpGet();
    this.httpGet1();
    this.httpGet2();
    this.httpGetactivity();
  }
};
</script>
<style scoped>
.index_box .companyname {
  color: #ffffff !important;
}
.clear {
  clear: both;
}
ul {
  list-style: none;
}
.index_box {
  min-width: 1200px;
}
.hometop_index {
  position: absolute;
  width: 100%;
  top: 0;
}
.hometop_index .header_nav_right a {
  color: #983436;
}
.home_all {
  width: 100%;

  margin: 0;
  padding: 0;
}
.el-container {
  width: 80%;
  height: auto;
  margin: 0 auto;
  position: relative;
  top: 3rem;
}
.el-tabs--border-card > .el-tabs__content {
  padding: 0;
}
.el-header {
  width: 100%;
  height: 4rem !important;
  /* padding: 1rem 0 1rem 0 !important; */
  background: #ffffff;
  position: relative;
  top: -0.7rem;
}
.home_top_buy {
  float: left;
  padding-left: 10px;
  padding-right: 10px;
}
.home_top_buy .mai {
  font-size: 0.9rem;
  color: #db0d17;
  padding: 0.6rem 0.2rem 0.4rem 0.2rem;
}
.home_top_buy_img {
  text-align: center;
}
.home_top_buy_img img {
  position: relative;
  top: 0.3rem;
  width: 0.45rem;
}
.home_brand_left {
  min-width: 700px;
}
.home_top_right_list_box {
  width: 60%;
  margin-left: 10px;
}
.car_name_list,
.home_top_right_list {
  float: left;
  padding-top: 0.62rem;
  /* font-size: 0.27rem; */
}
.car_name_list ul li {
  float: left;
  margin-left: 10px;
  padding-bottom: 0.35rem;
}
.search {
  width: 60%;
  height: 0.5rem;
  border: solid 1px #eeeeee;
  margin-top: 0.1rem;
  margin-left: 0.2rem;
  height: 0.7rem;
  border-radius: 5px;
  padding-left: 8px;
}
.icon-search {
  position: relative;
  left: -40px;
  top: 5px;
  cursor: pointer;
}
.home_top_sale {
  float: left;
  font-size: 0.9rem;
  color: #009899;
  padding: 0.6rem 0.4rem 0.4rem 0.2rem;
}
.home_top_right_list {
  float: left;
}
.home_top_right_list ul li {
  font-size: 0.24rem;
  width: 100%;
}
.ksmc {
  font-size: 0.33rem;
  color: #fa5b5b;
  display: block;
  font-weight: bold;
  padding-bottom: 0.2rem;
}
.maiche_num {
  color: #939393;
}
.maiche_num .num {
  color: #fa5b5b;
}
.phone {
  width: 100%;
  height: 0.7rem;
  border-radius: 5px;
  border: solid 1px #cccccc;
  margin-top: 0.2rem;
  padding-left: 8px;
}
.btn {
  width: 100%;
  height: 0.65rem;
  background: #fa5050;
  color: #ffffff;
  margin-top: 0.3rem;
}

.el-main {
  padding: 0;
}
.main_box {
  width: 100%;
  height: auto;
  margin-top: -0.2rem;
  box-sizing: border-box;
}
.rmcx {
  width: 100%;
  height: auto;
  font-size: 12px;
}
.rmcx_list_box {
  font-size: 0.24rem;
}
.rmcx_list_box:hover {
  background: #07aeaf;
}
.rmcx_list_box:hover .rmcx_car_name {
  color: white !important;
}
.rmcx_list_box:hover .rmcx_car_info {
  color: white !important;
}
.rmcx_list_box:hover .rmcx_car_money {
  color: white !important;
}
.cwkjhd {
  font-size: 0.42rem;
  padding-left: 0.4rem;
}
.rmcx_img {
  width: 260px;
  height: 170px;
  overflow: hidden;
  box-sizing: border-box;
}
.rmcx_img img {
  width: 100%;
  /* height: 100%; */
  /* width: 100%;
  max-width: 75vw;
  max-height: 75vh;
  text-align: center; */
}
.rmcx_car_name {
  font-size: 0.28rem;
  padding: 0.6rem 0 0.2rem 0.2rem;
  color: #505050;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rmcx_car_info {
  font-size: 0.2rem;
  color: #7d7d7d;
  padding-left: 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rmcx_car_money {
  font-size: 0.28rem;
  padding: 0.5rem 0 0.3rem 0.2rem;
  color: #525151;
}
.rmcx_car_money span:last-child {
  color: #db0d17;
  font-size: 0.4rem;
}
/* 车列表开始 */
.rmcx_car_list .el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.rmcx_car_list .el-col {
  border-radius: 4px;
}
.rmcx_car_list_p1_more {
  text-align: right;
  padding: 0.3rem 0.5rem 0rem 0;
}
.rmcx_car_list_p1_more a {
  cursor: pointer;
  position: relative;
  top: 0.3rem;
  z-index: 999;
}
.rmcx_car_list_li {
  background: #ffffff;
}
.rmcx_car_list_li .bg-purple {
  padding: 1rem 0.2rem 0 0.2rem;
}

.rmcx_car_list .grid-content {
  min-height: 36px;
}
.rmcx_car_list .row-bg {
  padding: 10px 0;
}
.rmcx_car_list_li {
  padding-bottom: 0.1rem;
}
/* 车列表结束 */
/* 底部容器开始 */
.el-footer {
  width: 100%;
  height: auto !important;
  padding: 0;
  background: #eeeeee;
}
.huodong_title {
  font-size: 0.35rem;
  padding: 0.7rem 0 0.7rem 0;
}
.huodong_content {
  font-size: 0.28rem;
  padding: 0 0 1rem 0;
}
.huodong_content_name {
  font-size: 0.35rem;
  color: #717171;
  padding-top: 0.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huodong_content_time {
  font-size: 0.2rem;
  color: #505050;
  padding: 0.7rem 0 0.7rem 0;
}
.huodong_content_info p:first-child {
  line-height: 0.4rem;
  padding-bottom: 0.5rem;
  font-size: 0.27rem;
}
.ckxq_btn_box {
  padding: 0.5rem 0.25rem 0.5rem 0.25rem;
}
.ckxq {
  border: solid #ec2f2f 1px;
  background: #ffffff;
  border-radius: 1rem;
  padding: 0.05rem 0.25rem 0.05rem 0.25rem;
  font-size: 0.25rem;
  float: right;
  color: #ec2f2f;
}
.huodong_content .el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.huodong_content .el-col {
  border-radius: 4px;
}

.huodong_content .bg-purple {
  background: #ffffff;
}

.huodong_content .grid-content {
  min-height: 36px;
}
.huodong_content .row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.huodong_list_box {
  padding: 0.4rem;
}
.huodong_content_img {
  width: 100%;
  height: 4rem;
  overflow: hidden;
}
.huodong_content_img img {
  width: 100%;
}
.huodong_content_time {
  width: 100%;
  padding: 15px 0 15px 0;
}
.huodong_content_info {
  width: 100%;
  height: 2rem;
  overflow: auto;
  overflow: hidden;
  text-overflow: ellipsis;
}
.more {
  float: right;
  font-size: 0.27rem;
  color: #009899;
  font-weight: bold;
  position: relative;
  top: 0.1rem;
  right: 0.4rem;
}
.fottom_end {
  padding: 1.5rem 0 1.5rem 0;
  background: #e0e0e0;
  margin-top: 3rem;
  text-align: center;
}
.fottom_end_span1 {
  font-size: 0.5rem;
  padding-right: 1rem;
  position: relative;
  top: 0.1rem;
}
.better_car {
  color: red;
}
.fottom_end button {
  padding: 0.2rem 0.4rem 0.2rem 0.4rem;
  color: #ffffff;
  font-size: 0.31rem;
  margin-right: 0.3rem;
}
.fottom_end .fottom_end_btn1 {
  background: #db0d17;
}
.fottom_end .fottom_end_btn2 {
  background: #009899;
}
.fottom_end a {
  color: #ffffff;
}
.blue {
  color: #009899;
  font-weight: bold;
}
.more_brand {
  position: relative;
}
.more_brand_div {
  display: none;
  position: absolute;
  left: -12rem;
  z-index: 999;
  width: 20rem;
  height: auto;
  padding: 0.5rem;
  background: #ffffff;
  border: solid 1px #cccccc;
}
.more_brand_div_list {
  width: 100%;
}
.more_brand_div_list_left {
  width: 49%;
  float: left;
}
.more_brand_div_ABC {
  width: 10%;
  float: left;
  text-align: center;
  padding-top: 0.2rem;
}
.more_brand_div_name {
  width: 90%;
  float: left;
}
.more_brand_div_name ul li {
  float: left;
  padding: 0.2rem 0.1rem 0.2rem 0.1rem;
}
.more_brand_div_name ul li:hover {
  background: red;
  color: #ffffff;
}

.more_brand_div_list_right {
  width: 49%;
  float: right;
}

.more_brand:hover .more_brand_div {
  display: block;
}
.mysalebtn {
  background: #db0d17;
  font-size: 16px;
}
/* 底部容器结束 */
</style>