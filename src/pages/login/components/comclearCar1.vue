
<template>
  <div>
    <div class="box1">
      <div class="main">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="我的收藏" name="first">
            <div class="my_sc">
              <div class="sc_list">
                <div class="top_box_main" v-for="(item, index) in carList" :key="index">
                  <div class="top_box_left">
                    <img :src="imghost + item.f_Pic1">
                  </div>
                  <div class="top_box_right">
                    <div class="top_box_right_left">
                      <div class="top_box_right_title">{{item.f_CarName}}</div>
                      <div class="top_box_right_left_list">
                        <ul>
                          <li>
                            <span>{{item.f_KM | wanfilters}}万公里</span>
                            <span>|</span>
                            <span>{{item.f_PlateFirstDate | datefilters}}上牌</span>
                            <span>|</span>
                            <span>排放标准：</span>
                            <span>{{item.emissionStandards}}</span>
                            <span>|</span>
                            <span>牌照属地：</span>
                            <span>{{item.f_Plate | platefilters}}</span>
                          </li>
                          <li>
                            一口价：
                            <span class="spanred">￥{{item.f_PreSalePrice | wanfilters}}</span>
                            <span>元</span>
                            <span>|</span>
                            <span>新车价：{{item.guidePrice}}万（含{{gouzhiprice(item.guidePrice)}}元购置税）</span>
                            <span>
                              <button class="qxsc" @click="userClearcollection(item)">取消收藏</button>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="top_box_right_right">
                      <p class="img_qian">
                        <img src="@/assets/image/money_redbag.png">
                      </p>
                      <p class="right_info">此车源正在出售，共有{{item.carcollectionCon}}人关注此车</p>
                      <p>
                        <button class="ljqd" @click="iflogin(item.id)">立即抢订</button>
                      </p>
                    </div>
                  </div>
                  <div class="clear"></div>
                </div>
                <div class="clear"></div>
                <div class="fenye_box">
                  <el-pagination background layout="prev, pager, next" :total="totalCount"></el-pagination>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <!-- <el-tab-pane label="未确定" name="second">
            <div class="xcj"></div>
          </el-tab-pane>-->
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { GetUserCarCollectionList, CarCollectionClear } from "@/api/webapi";
export default {
  data() {
    return {
      activeName2: "first",
      imghost: "http://market.api.yuncaiit.com/",
      listQuery: {
        userId: this.$cookieStore.getCookie("username"),
        pageindex: 1,
        pagecount: 10
      },
      collectiondata: {
        userId: this.$cookieStore.getCookie("username"), //userid
        f_CarId: 0
      },
      totalCount: 0,
      carList: []
    };
  },
  filters: {
    wanfilters(val) {
      return parseFloat(val / 10000).toFixed(2);
    },
    datefilters(val) {
      return val.substring(0, 4) + "年" + val.substring(5, 7) + "月";
    },
    platefilters(val) {
      return val.replace("-", "").substring(0, 2);
    }
  },
  created() {
    this.GetUserCollectionData();
  },
  methods: {
    GetUserCollectionData() {
      GetUserCarCollectionList(this.listQuery).then(res => {
        this.carList = res.data.result;
        this.totalCount = res.data.pageCount;
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    gouzhiprice(price) {
      return (price * 10000 * 0.074074).toFixed(0);
    },
    userClearcollection(row) {
      this.collectiondata.f_CarId = row.id;
      CarCollectionClear(this.collectiondata).then(res => {
        this.$message({
          message: "您已取收藏成功",
          type: "success"
        });
        this.GetUserCollectionData();
      });
    },
    iflogin(id) {
      const routeData1 = this.$router.resolve({
        name: "ljqd",
        params: { id: id }
      });
      window.open(routeData1.href, "_blank");
    }
  }
};
</script>

<style scoped>
.box1 {
  width: 90%;
  margin: 0 auto;
}
.main {
  padding-top: 1rem;
  font-family: "Microsoft Yahei";
}
.xcj {
  padding-top: 0.2rem;
  font-size: 0.2rem !important;
}

.xcj {
  width: 50%;
}
.my_sc {
}
.top_box_main {
  width: 100%;
  margin: 0.5rem auto;
  padding: 0.5rem 0 0.5rem 0;
  border-bottom: solid 1px #dcdfe6;
}
.top_box_left {
  float: left;
  width: 25%;
}
.top_box_left img {
  width: 100%;
}
.top_box_right {
  float: left;
  width: 75%;
  padding: 0 0 0 0.3rem;
  box-sizing: border-box;
}
.top_box_right_left {
  float: left;
  width: 70%;
  border-right: solid 1px #cccccc;
  box-sizing: border-box;
}
.top_box_right_title {
  width: 80%;
  padding: 0.6rem 0rem 0.3rem 0rem;
  font-size: 0.35rem;
  font-weight: bold;
  color: #505050;
  border-bottom: solid 1px #dcdfe6;
}
.top_box_right_left_list {
  margin-bottom: 0.3rem;
  overflow: hidden;
}
.top_box_right_left_list ul li {
  width: 100%;
  color: #807e7e;
  padding-top: 0.4rem;
  overflow: hidden;
}
.top_box_right_left_list ul li span {
  margin-right: 0.2rem;
  font-size: 0.23rem;
}

.spanred {
  font-size: 0.5rem !important;
  color: #db0d17;
  font-weight: bold;
}
.qxsc {
  padding: 0.11rem 0.28rem 0.11rem 0.28rem;
  background: #efefef;
  font-size: 0.2rem;
  font-family: "Microsoft Yahei" !important;
  cursor: pointer;
}
.ljqd {
  padding: 0.18rem 1rem 0.18rem 1rem;
  background: #db0d17;
  font-size: 0.25rem;
  color: #ffffff;
  font-family: "Microsoft Yahei" !important;
  cursor: pointer;
}
.top_box_right_right {
  float: left;
  width: 30%;
  text-align: center;
}
.top_box_right_right p {
  padding-top: 0.4rem;
}
.top_box_right_right p:first-child {
  padding-top: 12%;
}
/* .top_box_right_right p button {
  padding: 0.1rem 0.5rem 0.1rem 0.5rem;
  background: red;
  color: white;
} */
.fenye_box {
  text-align: center;
}
</style>
