<template>
  <div class="select6">
    <div class="select6_top">
      <img src="@/assets/image/mclc1.png">
    </div>
    <div class="select6_bottom">
      <div class="select6_bottom_top">客户置换流程</div>
      <div class="select6_bottom_bottom">
        <img src="@/assets/image/mclc2.png">
      </div>
    </div>
  </div>
</template>  
  
<script>
export default {
  data() {
    return {
      msg: "select03"
    };
  }
};
</script> 
<style scoped>
.select6_top {
  width: 100%;
  padding: 1rem 0 1rem 0;
  background: #ffffff;
  text-align: center;
}
.select6_top img {
  width: 80%;
}
.select6_bottom {
  width: 100%;
  padding: 0 0 1rem 0;
  background: #e7e7e7;
  text-align: center;
}
.select6_bottom_top {
  width: 100%;
  padding: 1.5rem 0 1.5rem 0;
  text-align: center;
  font-size: 0.5rem;
}
.select6_bottom_bottom {
  width: 100%;
  text-align: center;
}
.select6_bottom_bottom img {
  width: 80%;
}
</style>