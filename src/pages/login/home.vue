<template>
  <div class="testing_box">
    <homeheader></homeheader>
    <el-row type="flex" :gutter="10" class="row-bg" justify="center">
      <el-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20">
        <div class="grid-content bg-purple i">
          <div class="top_box">
            <div class="top_box_left">
              <img src="@/assets/image/login_img1.png">
            </div>
            <div class="top_box_right">
              <div id="app1">
                <div class="radio-wrap">
                  <div class="home_radio-group" v-model="tabView">
                    <span
                      v-for="(tab ,index) in tabs"
                      :class="{cur:iscur==index}"
                      @click="iscur=index,tabChange('select' + (index + 1))"
                    >{{tab.name}}</span>
                  </div>
                  <!-- <div style="margin:10px 0;"></div> -->
                  <keep-alive class="show_div">
                    <component v-bind:is="tabView" @changeactive1="getselect"></component>
                  </keep-alive>
                </div>
              </div>
            </div>
            <div class="clear"></div>
          </div>
          <div class="clear"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import homeheader from "./components/header.vue";
import select1 from "./components/select1.vue";
import select2 from "./components/select2.vue";

export default {
  name: "app1",

  data() {
    return {
      tabView: "select1",
      iscur: 0,
      tabs: [{ name: "会员登陆" }, { name: "会员注册" }]
    };
  },
  components: {
    homeheader,
    select1,
    select2
  },
  methods: {
    tabChange: function(tab) {
      this.tabView = tab;
    },
    getselect(msg) {
      (this.iscur = 1), (this.tabView = select2);
    }
  }
};
</script>
<style scoped>
.testing_box {
  min-width: 1200px;
}
.top_box {
  width: 80%;
  margin: 1.5rem auto;
  background: #ffffff;
}
.top_box_left {
  width: 50%;
  float: left;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
.top_box_left img {
  width: 110%;
  margin-top: -2rem;
}
.top_box_right {
  width: 45%;
  margin-left: 5%;
  float: left;
}
.home_radio-group {
  width: 100%;
  color: #99999a;
  background: #cdced0;
  height: 0.8rem;
  line-height: 0.8rem;
}
.home_radio-group span {
  /* padding: 0 0.3rem 0 0.3rem; */
  width: 50%;
  height: 0.8rem;
  float: left;
  display: block;
  text-align: center;
}

.cur {
  background: #db0d17;
  color: #ffffff;
}
</style>