<template>
  <div>
    <div class="testing_box">
      <el-row type="flex" :gutter="10" class="row-bg" justify="center">
        <el-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20">
          <div class="grid-content bg-purple i">
            <!-- nav开始 -->
            <div class="buycar_nav">
              <span>首页</span>
              <span>></span>
              <span>我要买车</span>
              <span>></span>
              <span>填写买车需求</span>
            </div>
            <!-- nav结束 -->
            <div class="top_box">
              <img src="@/assets/image/buycarinp.png">
            </div>
            <div class="top_main">
              <div class="top_main_title">只要简单填写您的需求，开始享受免费私人定制吧</div>
              <div class="top_main_table_top">
                <span>车辆信息</span>
              </div>
              <div class="same yusuan">
                <p class="title">预算范围</p>
                <input type="text">
                <span>-</span>
                <input type="text">
              </div>
              <div class="same chexing">
                <p class="title">车型</p>
                <p>
                  <select>
                    <option>请选择车型</option>
                  </select>
                </p>
              </div>
              <div class="same chexi">
                <p class="title">车系</p>
                <p>
                  <select>
                    <option>请选择车系</option>
                  </select>
                </p>
              </div>
              <div class="same area">
                <p class="title">其他条件</p>
                <p>
                  <textarea class="texa"></textarea>
                </p>
              </div>
              <div class="same phone">
                <p class="title">手机号码</p>
                <p>
                  <input placeholder="请输入手机号码（必填）">
                </p>
              </div>
              <div class="same btn_box">
                <button class="btn">提交我的需求</button>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.testing_box {
  min-width: 1200px;
}
.top_box {
  width: 100%;
}
.top_box img {
  width: 100%;
}
.buycar_nav {
  width: 100%;
  font-size: 0.2rem;
  padding: 0.43rem 0 0.23rem 0;
}
.top_main {
  width: 100%;
  background: #ffffff;
  text-align: center;
}
.top_main_title {
  padding: 1rem;
  font-size: 0.5rem;
}

.top_main_table_top {
  width: 42%;
  margin: 0 auto;
  border-bottom: solid 1px #cccccc;
  text-align: center;
}
.top_main_table_top span {
  padding: 0 0.5rem 0 0.5rem;
  position: relative;
  top: 0.15rem;
  background: #ffffff;
}
.same {
  width: 42%;
  margin: 0 auto;
  padding: 0.4rem 0 0 0;
}
.yusuan {
  margin-top: 0.5rem;
}
.yusuan input {
  width: 48%;
  height: 0.6rem;
  border: solid 1px #b0afaf;
}
.title {
  text-align: left;
  padding: 0.3rem 0 0.3rem 0;
}
select {
  width: 100%;
  text-align: left;
  border: solid 1px #b0afaf;
  background: #ffffff;
  height: 0.7rem;
}
.texa {
  width: 100%;
  padding: 0.2rem 0rem 1.5rem 0;
  border: solid 1px #b0afaf;
}
.phone input {
  width: 100%;
  height: 0.6rem;
  border: solid 1px #b0afaf;
}
.btn_box {
  padding: 1rem;
}
.btn {
  background: #fa5050;
  padding: 0.15rem 0.5rem 0.15rem 0.5rem;
  color: #ffffff;
}
</style>