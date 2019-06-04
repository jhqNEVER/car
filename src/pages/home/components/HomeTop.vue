<template>
  <div class="hometop">
    <el-row>
      <el-col :span="24">
        <div class="header_nav">
          <div class="header_nav_left">
            <span>
              <router-link to="/">
                <img src="@/assets/image/logo_header.png">
              </router-link>
            </span>
            <span class="companyname">
              <router-link to="/">车纬空间</router-link>
            </span>
          </div>
          <div class="header_nav_right">
            <p>
              <router-link to="/home" v-if="userId==='' || userId === null || userId=== undefined">
                <span>登陆</span>
              </router-link>
              <span v-if="userId==='' || userId === null || userId=== undefined">|</span>
              <router-link to="/clearCar">
                <span>个人中心</span>
              </router-link>

              <span>|</span>
              <span v-if="userId>0" @click="loginout()">退出</span>
              <span v-if="userId>0">|</span>

              <router-link to="/aboutcompany">
                <span>关于我们</span>
              </router-link>

              <span>|</span>
              <router-link to="/SupportBx">
                <span>服务与支持</span>
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
              <router-link to="/Accreditation">
                <span>办证大厅</span>
              </router-link>
              <router-link to="/testing">
                <span>我要检测</span>
              </router-link>
              <router-link to="/financialService">
                <span>金融服务</span>
              </router-link>
              <router-link to class="fwbz_nav">
                <span>服务保障</span>
                <div class="fwbz_li_box">
                  <div class="fwbz_li_box1"></div>
                  <div class="fwbz_li">
                    <div class="fwbz_li1 fwbz_li_same">
                      <div>
                        <span></span>
                        <router-link to="./Servicetwo">
                          <span>245项检测</span>
                        </router-link>
                      </div>
                      <div>
                        <span></span>
                        <router-link to="./zsfw">
                          <span>上牌、保险、精品一站式服务</span>
                        </router-link>
                      </div>
                      <div>
                        <span></span>
                        <router-link to="./ykj">
                          <span>一口价销售</span>
                        </router-link>
                      </div>
                    </div>
                    <div class="fwbz_li2 fwbz_li_same">
                      <div>
                        <span></span>
                        <router-link to="./Servicewx">
                          <span>专业维修整备</span>
                        </router-link>
                      </div>
                      <div>
                        <span></span>
                        <router-link to="./Serviceserve">
                          <span>7天可退换</span>
                        </router-link>
                      </div>
                      <div>
                        <span></span>
                        <router-link to="./Servicetwo">
                          <span>232项认证标准</span>
                        </router-link>
                      </div>
                    </div>
                    <div class="fwbz_li3 fwbz_li_same">
                      <div>
                        <span></span>
                        <router-link to="./Servicethree">
                          <span>3个月质量保证服务</span>
                        </router-link>
                      </div>
                      <div>
                        <span></span>
                        <router-link to="./Servicegxh">
                          <span>个性化延长保修服务</span>
                        </router-link>
                      </div>
                    </div>
                    <div class="clear"></div>
                  </div>
                </div>
              </router-link>
            </p>
          </div>
          <!--  -->
        </div>
      </el-col>
    </el-row>
    <div class="clear"></div>
  </div>
</template>
<script>
export default {
  name: "HomeTop",
  data() {
    return {
      userId: this.$cookieStore.getCookie("username")
    };
  },
  methods: {
    hoverShow() {},
    loginout() {
      this.$cookieStore.setCookie("username", "", -1);
      location.reload();
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.hometop {
  height: 2rem;
}
.header_nav {
  width: 84%;

  padding: 0.5rem 0 1rem 0;

  position: relative;
  z-index: 999;
  top: 0;
  left: 8%;
}
.header_nav_left {
  float: left;
}
.header_nav_left img {
  width: 1.2rem;
}
.companyname {
  font-size: 0.55rem;

  position: relative;
  top: 0.15rem;
  font-weight: bold;
  padding: 0.5rem 0 0 0.3rem;
}
.companyname a {
  color: #953634;
}
.header_nav_right {
  float: right;
  cursor: pointer;
}
.header_nav_right a {
  color: #9f3836;
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
  color: #000;
}
.header_nav_right p:last-child span:hover {
  color: red;
}
.fwbz_nav:hover .fwbz_li_box {
  display: block;
}
.fwbz_nav {
  position: relative;
}
.fwbz_li_box {
  display: none;
}
.fwbz_li_box1 {
  height: 0.4rem;
}
.fwbz_li {
  width: 12.5rem;
  height: 2.5rem;
  position: absolute;
  padding: 0.3rem 0rem 0.3rem 0rem;
  background: rgba(121, 12, 4, 0.4);
}
.fwbz_li_same {
  float: left;
  text-align: left;
  padding-right: 0.3rem;
  box-sizing: border-box;
}
.fwbz_li_same a span {
  color: #ffffff !important;
}
.fwbz_li_same div {
  line-height: 0.8rem;
}
.fwbz_li_same a span:hover {
  color: #11a091 !important;
  font-weight: bold;
}
</style>