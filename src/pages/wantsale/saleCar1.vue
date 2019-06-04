<template>
  <div class="sale_car_conent">
    <!-- 头部开始 -->
    <div class="sale_header">
      <!-- 背景图片开始 -->
      <div class="header_img_box1" ref="header_img_box1">
        <img src="@/assets/image/sale_car.png">
      </div>
      <!-- 背景图片结束 -->
      <!-- 背景图片遮罩层开始 -->
      <div class="header_img_box2" :style="{height:header_img_box1H}"></div>
      <!-- <div class="header_img_box2"></div> -->
      <!-- 背景图片遮罩层结束 -->
    </div>
    <!-- 头部结束 -->
    <div style="clear"></div>
    <!-- 买车流程开始 -->
    <div class="sale_process">444</div>

    <!-- 买车流程结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      header_img_box1H: 0
    };
  },

  methods: {
    getheight() {
      this.header_img_box1H = this.$refs.header_img_box1.offsetHeight + "px";
      console.log(this.$refs.header_img_box1.offsetHeight);
    }
  },
  mounted() {
    this.getheight();
  },
  created() {
    window.addEventListener("resize", this.getheight);
  }
};
</script>

<style scoped>
.clear {
  clear: both;
}
.sale_car_conent {
  width: 80%;
  height: auto;
  margin: 0 auto;
}
.sale_header {
  width: 100%;
  height: auto;
  position: relative;
}
.header_img_box1 {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.header_img_box1 img {
  width: 100%;
}
.header_img_box2 {
  width: 100%;
  height: auto;
  background: #cccccc;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.5;
  z-index: 999;
}
.sale_process {
  width: 100%;
  height: 10rem;
  background: red;
}
</style>

