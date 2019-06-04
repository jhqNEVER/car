<template>
  <div class="select4">
    <div class="select4_list_box">
      <div class="clear"></div>
      <div class="select4_list">
        <ul>
          <li v-for="item of activitylist" :key="item.id">
            <p class="img_box">
              <img :src="'http://123.58.133.111:52744/'+item.f_CoverFile">
            </p>
            <p class="title">{{item.f_Title}}</p>
            <p class="time">{{item.creationTime}}</p>
            <p class="couent">{{item.f_BriefIntroduction}}</p>
            <p class="btn">
              <button @click="activityinfo(item.id)">查看详情</button>
            </p>
          </li>
        </ul>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
      <!-- <div class="fenye_box">
        <el-pagination background layout="prev, pager, next" :total="total"></el-pagination>
      </div>-->
    </div>

    <div class="clear"></div>
  </div>
</template>  
  
<script>
import { homeActivity } from "@/api/buyCar"; //活动
export default {
  data() {
    return {
      activitylist: "", //活动
      msg: "select04",
      total: 68, //总页数
      pageindex: 1,
      pagecount: 2
    };
  },
  mounted() {
    this.httpGetactivity();
    this.handleCurrentChange();
  },
  methods: {
    //活动
    httpGetactivity() {
      homeActivity("/api/ActivityApiService/ActivityListTop3").then(
        response => {
          // this.alldata = response.data.result;
          this.activitylist = response.data.result;
          console.log(this.activitylist);
        }
      );
    },
    //点击活动进入详情
    activityinfo(id) {
      this.$router.push({
        name: "activity",
        params: { id: id }
      });
    },
    // 分页效果开始
    handleCurrentChange: function(pageindex) {
      this.pageindex = pageindex;
      this.httpGetactivity();
    }
    //分页效果结束
  }
};
</script> 
<style scoped>
.select4_list_box {
  width: 100%;
  background: #e7e7e7;
  padding: 0.5rem 0 0.5rem 0;
}
.select4_list {
  width: 90%;

  margin: 0 auto;
}
.select4_list ul {
  width: 100%;
}
.select4_list ul li {
  width: 31%;
  padding: 0.2rem;
  float: left;
  margin-left: 2%;
  margin-top: 0.5rem;
  background: #ffffff;
  box-sizing: border-box;
}

.select4_list ul li .img_box {
  padding-bottom: 0.5rem;
  text-align: center;
}
.select4_list ul li .img_box img {
  width: 100%;
  height: 3.8rem;
}
.select4_list ul li .title {
  font-size: 0.35rem;
  color: #717171;
  padding-top: 0.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.select4_list ul li .time {
  font-size: 0.2rem;
  color: #505050;
  padding: 0.7rem 0 0.7rem 0;
}
.select4_list ul li .couent {
  font-size: 0.2rem;
  color: #605c5c;
  line-height: 0.4rem;
  height: 2rem;
  padding-bottom: 0.2rem;
  overflow: hidden;
}
.select4_list ul li .btn {
  text-align: right;
  padding: 0.3rem;
}
.select4_list ul li .btn button {
  padding: 0 0.2rem 0 0.2rem;
  border: solid 1px red;
  border-radius: 0.2rem;
  color: red;
}
.fenye_box {
  text-align: center;
  padding-top: 0.5rem;
}
</style>