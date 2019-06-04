<template>
  <div class="home_fotter">
    <div class="home_fotter_box">
      <div class="home_fotter_box_left">
        <img src="@/assets/image/fotter_logo.png">
      </div>
      <div class="home_fotter_box_center">
        <p class="p1">咨询电话：021-69776066</p>
        <p class="p2">免费咨询（咨询、建议、投诉)</p>
        <p
          class="home_fotter_box_centerp3"
        >Copyright@2018-2022,上海大众车纬空间汽车销售服务有限公司，All Right Reserved.</p>
        <p class="p4">沪ICP备10039007号</p>
      </div>
      <div class="home_fotter_box_right">
        <img src="@/assets/image/wx_pic.png">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeFotter"
};
</script>
<style scoped>
.home_fotter {
  width: 100%;
  height: 4.8rem;
  background: #2a2c37;
}
.home_fotter_box {
  width: 83%;
  margin: 0 auto;
}
.home_fotter_box_left {
  float: left;
}
.home_fotter_box_left img {
  width: 2.2rem;
  padding: 1rem;
}
.home_fotter_box_center {
  width: 60%;
  float: left;
  color: #ffffff;
  line-height: 0.55rem;
}
.home_fotter_box_center .p1 {
  padding-top: 1.2rem;
}
.home_fotter_box_center .home_fotter_box_centerp3 {
  padding-top: 0.7rem;
  font-size: 0.2rem;
}
.home_fotter_box_center .p4 {
  font-size: 0.2rem;
}
.home_fotter_box_right {
  float: left;
  width: 20%;
}
.home_fotter_box_right img {
  width: 2.5rem;
  padding: 1rem;
}
</style>

