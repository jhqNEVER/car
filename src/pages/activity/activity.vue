<template>
  <div>
    <div class="testing_box_top_box">
      <home-top></home-top>
    </div>
    <div class="testing_box">
      <el-row type="flex" :gutter="10" class="row-bg" justify="center">
        <el-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20">
          <div class="car_info_nav">首页 > 活动详情</div>
          <div class="grid-content bg-purple i">
            <div class="top_box" v-html="couent">{{couent}}</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="clear"></div>
    <home-fotter></home-fotter>
  </div>
</template>
<script>
import HomeTop from "@/pages/home/components/HomeTop";
import HomeFotter from "@/pages/home/components/HomeFotter";
import { homeActivityinfo } from "@/api/buyCar"; //活动
export default {
  data() {
    return {
      activityId: this.$route.params.id,
      couent: ""
    };
  },
  components: {
    HomeTop,
    HomeFotter
  },
  mounted() {
    this.httpGetactivityinfo();
  },
  methods: {
    //活动
    httpGetactivityinfo() {
      homeActivityinfo(
        "api/ActivityApiService/GetActivityInfo?activityId=" + this.activityId
      ).then(response => {
        // this.alldata = response.data.result;
        this.couent = response.data.result.f_HtmlContent;
      });
    }
  }
};
</script>
<style scoped>
.testing_box {
  min-width: 1200px;
}
.top_box {
  width: 100%;
  background: #ffffff;
  padding: 1rem;
}
.car_info_nav {
  padding: 0.36rem 0 0.5rem 0;
}
.testing_box_top_box {
  background: #ffffff;
  padding: 0 0 0.2rem 0;
}
</style>