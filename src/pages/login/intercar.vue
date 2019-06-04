<template>
  <div class="testing_box">
    <el-row type="flex" :gutter="10" class="row-bg" justify="center">
      <el-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20">
        <div class="car_info_nav">首页 > 我要买车 > 网上订车</div>
        <div class="grid-content bg-purple i">
          <div class="top_box">
            <div class="top_box_main">
              <div class="top_box_left">
                <img src="@/assets/image/car_info_img1.png">
              </div>
              <div class="top_box_right">
                <div class="top_box_right_title">观致 观致3 2015款 都市SUV 1.6T 自动炫动派</div>
                <div class="top_box_right_list">
                  <ul>
                    <li>
                      <p>
                        <span class="block sp1">一口价</span>
                        <span class="block sp2 post3">
                          <span class="red">¥</span>
                          <span class="red">8.5</span> 万
                        </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <span class="block sp1">上牌时间</span>
                        <span class="block sp2">2010年06月</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <span class="block sp1">行驶公里</span>
                        <span class="block sp2">13.15万公里</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <span class="block sp1">排量</span>
                        <span class="block sp2">1.6L</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <span class="block sp1">排放标准</span>
                        <span class="block sp2">国4</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <span class="block sp1">牌照属地2</span>
                        <span class="block sp2">沪C</span>
                      </p>
                    </li>
                  </ul>
                  <div class="clear"></div>
                </div>
                <div class="top_box_right_inp">
                  <input type="text" placeholder="请输入您的手机号">
                  <button>提交订单</button>
                </div>
              </div>
              <div class="clear"></div>
            </div>
            <!-- <img src="@/assets/image/sale_car.png"> -->
          </div>
          <div class="clear"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.car_info_nav {
  line-height: 1.2rem;
  font-size: 0.2rem;
}
.testing_box {
  min-width: 1200px;
}
.top_box {
  margin: 0 auto;
  background: #ffffff;
  padding: 1rem;
}
.top_box_main {
  width: 100%;
  margin: 0 auto;
}
.top_box_left {
  float: left;
  width: 40%;
}
.top_box_left img {
  width: 95%;
}
.top_box_right {
  float: left;
  width: 60%;
  padding: 0 0 0 1rem;
  box-sizing: border-box;
}
.top_box_right_title {
  width: 100%;
  padding: 0.7rem 0rem 0.5rem 0rem;
  font-size: 0.4rem;
  color: #929292;
  border-bottom: solid 1px #929292;
}
.top_box_right_list {
  widows: 100%;
}
.top_box_right_list ul {
  margin-top: 0.5rem;
}
.top_box_right_list ul li {
  float: left;
  width: 16%;
  height: 1rem;
  box-sizing: border-box;
  font-size: 0.25rem;
  border-right: solid 1px #929292;
}
.top_box_right_list ul li:not(:last-child) {
}
.top_box_right_list ul li:not(:first-child) {
  padding-left: 0.2rem;
}
.top_box_right_list ul li .sp1 {
  color: #c5c5c5;
  padding-top: 0.1rem;
}
.top_box_right_list ul li .sp2 {
  color: #807e7e;
  padding-top: 0.3rem;
}
.block {
  display: block;
}
.red {
  color: red;
  font-size: 0.45rem;
}
.post3 {
  position: relative;
  top: -8px;
}
.top_box_right_inp {
  margin-top: 1rem;
}
.top_box_right_inp input {
  background: #efefef;
  width: 4rem;
  height: 0.8rem;
  padding-left: 1rem;
  font-size: 0.3rem;
}
.top_box_right_inp button {
  margin: 5px;
  background: #009899;
  padding: 0 0.4rem 0 0.4rem;
  color: #ffffff;
  height: 0.8rem;
}
</style>
