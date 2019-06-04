<template>
  <div class="testing_box">
    <el-row type="flex" :gutter="10" class="row-bg" justify="center">
      <el-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20">
        <div class="grid-content bg-purple i">
          <div class="top_box">
            <div class="top_box_left">
              <router-link to="./">
                <img src="@/assets/image/logo.png">
              </router-link>
            </div>
            <div class="top_box_right">
              <img src="@/assets/image/phone.png">
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.testing_box {
  min-width: 1200px;
  background: white;
}
.top_box {
  width: 80%;
  margin: 0 auto;
  padding: 0.4rem 0 0.4rem 0;
}
.top_box_left {
  float: left;
  width: 50%;
}
.top_box_left img {
  width: 40%;
}
.top_box_right {
  width: 50%;
  float: left;
  text-align: right;
}
.top_box_right img {
  width: 65%;
  position: relative;
  top: 0.2rem;
}
</style>