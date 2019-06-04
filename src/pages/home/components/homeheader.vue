<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content home_header bg-purple-dark">
          <img src="@/assets/image/index_banner.png">
        </div>
        <!-- <div class="header_nav">
          <div class="header_nav_left">
            <span>
              <img src="@/assets/image/logo_header.png">
            </span>
            <span class="companyname">
              <i>车纬空间</i>
            </span>
          </div>
          <div class="header_nav_right">
            <p>
              <router-link to="/home">
                <span>登陆</span>
              </router-link>

              <span>|</span>
              <router-link to="/aboutcompany">
                <span>关于我们</span>
              </router-link>
             
              <span>
                <img src="@/assets/image/tel_pic.png">
                021-69776066
              </span>
            </p>
            <p>
              <router-link to="/">
                <span>首页</span>
              </router-link>
              <router-link to="/buyCar">
                <span>我要买车</span>
              </router-link>
              <router-link to="/saleCar">
                <span>我要卖车</span>
              </router-link>
              <router-link to="/">
                <span>办证大厅</span>
              </router-link>
              <router-link to="/testing">
                <span>我要检测</span>
              </router-link>
              <router-link to="/">
                <span>金融服务</span>
              </router-link>

              <span>服务保障</span>
            </p>
          </div>
         
        </div>-->
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "HomeHeader"
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.home_header {
  width: 100%;
  height: 7.2rem;
}
.home_header img {
  width: 100%;
}
.header_nav {
  width: 80%;

  padding: 0.5rem 0 1rem 0;

  position: absolute;
  z-index: 999;
  top: 0;
  left: 10%;
}
.header_nav_left {
  float: left;
}
.companyname {
  font-size: 0.6rem;
  color: #ffffff;
  padding: 0rem 0 0 0.5rem;
}
.header_nav_right {
  float: right;
  cursor: pointer;
}
.header_nav_right p:first-child {
  text-align: right;
  color: #9f3836;
  font-size: 0.25rem;
  font-weight: bold;
}
.header_nav_right p:first-child span {
  margin-left: 0.2rem;
}
.header_nav_right p:last-child {
  position: relative;
  top: 0.35rem;
}
.header_nav_right p:last-child span {
  margin-left: 0.4rem;
  color: #ffffff;
}
.header_nav_right p:last-child span:hover {
  color: red;
}
</style>