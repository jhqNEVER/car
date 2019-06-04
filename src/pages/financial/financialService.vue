<template>
  <div>
    <div class="testing_box_top_box">
      <home-top></home-top>
    </div>
    <div class="testing_box">
      <el-row type="flex" :gutter="10" class="row-bg" justify="center">
        <el-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20">
          <div class="grid-content bg-purple i">
            <div class="header_title">
              <span>首页</span>
              <span>></span>
              <span>金融服务</span>
            </div>
            <div class="top_box">
              <div class="top_box_title1">
                <img src="@/assets/image/rongzi.png">
              </div>
            </div>
            <div class="jr_jsq">
              <span>融资租赁计算器</span>
            </div>
            <div class="clear"></div>

            <div class="jr_jsq_box">
              <div class="jr_jsq_left">
                <div class="jr_left_couent1">
                  <span>
                    <label>请输入车价:</label>
                    <el-input
                      v-model.number="cartotalinp"
                      @keyup.enter.native="handleClick"
                      class="car_money"
                      ref="num1"
                      placeholder="请输入车价"
                    ></el-input>
                  </span>

                  <span class="sel_box">
                    <span>请选择期限:</span>
                    <span>
                      <el-select v-model="value" @change="getopt()" placeholder="请选择期限">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </span>
                  </span>
                  <span>
                    <el-button type="primary" class="btn1" @click="fenqi()">点击计算</el-button>
                  </span>
                </div>

                <div class="jr_left_couent2">
                  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick1">
                    <el-tab-pane label="一成融" name="first">
                      <div class="table_title">
                        <p>
                          <strong>一成融:</strong>
                          <span>10%</span>
                          <span>超低首付，客户需满足芝麻分</span>
                          <span>700</span>
                          <span>分以上，仅限车纬空间牌照。</span>
                        </p>
                      </div>
                      <div class="table_couent">
                        <el-table :data="tableData1" border style="width: 100%">
                          <el-table-column prop="cartotal" label="车价" width="180"></el-table-column>
                          <el-table-column prop="date" label="首付" width="180"></el-table-column>
                          <el-table-column prop="name" label="月供" width="180"></el-table-column>
                          <el-table-column prop="address" label="期限"></el-table-column>
                        </el-table>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="二成融" name="second">
                      <div class="table_title">
                        <p>
                          <strong>二成融:</strong>
                          <span>20%</span>
                          <span>超低首付，客户需满足芝麻分</span>
                          <span>600-700</span>
                          <span>分</span>
                        </p>
                      </div>
                      <div class="table_couent">
                        <el-table :data="tableData1" border style="width: 100%">
                          <el-table-column prop="cartotal" label="车价" width="180"></el-table-column>
                          <el-table-column prop="date" label="首付" width="180"></el-table-column>
                          <el-table-column prop="name" label="月供" width="180"></el-table-column>
                          <el-table-column prop="address" label="期限"></el-table-column>
                        </el-table>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="付三贷七" name="third">
                      <div class="table_title">
                        <p>
                          <strong>付三贷七:</strong>
                          <span>最低</span>
                          <span>30%</span>
                          <span>首付，灵活的首付选择超低首付</span>
                        </p>
                      </div>
                      <div class="table_couent">
                        <el-table :data="tableData1" border style="width: 100%">
                          <el-table-column prop="cartotal" label="车价" width="180"></el-table-column>
                          <el-table-column prop="date" label="首付" width="180"></el-table-column>
                          <el-table-column prop="name" label="月供" width="180"></el-table-column>
                          <el-table-column prop="address" label="期限"></el-table-column>
                        </el-table>
                      </div>
                    </el-tab-pane>
                  </el-tabs>
                </div>
              </div>
              <div class="jr_jsq_right">
                <div class="jr_jsq_right_top">
                  <div class="jr_jsq_right_top1">融资概要</div>
                  <div class="jr_jsq_right_top2">
                    <ul>
                      <li>
                        <span class="fl">车价</span>
                        <span class="fr">¥{{tableData1[0].cartotal}}</span>
                      </li>
                      <li>
                        <span class="fl">融资金额</span>
                        <span class="fr">¥{{(tableData1[0].cartotal)-(tableData1[0].date)}}</span>
                      </li>
                      <li>
                        <span class="fl">产品名称</span>
                        <span class="fr">{{product}}</span>
                      </li>
                      <li>
                        <span class="fl">首付(含手续费)</span>
                        <span class="fr">¥{{tableData1[0].date}}</span>
                      </li>
                      <li>
                        <span class="fl">月供</span>
                        <span class="fr">¥{{tableData1[0].name}}</span>
                      </li>
                      <li>
                        <span class="fl">期限</span>
                        <span class="fr">{{opt}}期</span>
                      </li>
                    </ul>
                  </div>
                  <div class="jr_jsq_right_top3">去找您的预算车辆</div>
                  <div class="jr_jsq_right_top4">
                    <router-link to="./buyCar">
                      <button>查看符合预算的车源</button>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="clear"></div>
            </div>
          </div>
          <div class="clear"></div>
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

export default {
  data() {
    return {
      product: "一成融",
      howrz: 0.9,
      lilv: 1.035,
      cartotalinp: "",
      rongzi: "",
      opt: "",
      value8: 36000,
      activeName2: "first",

      tableData1: [
        {
          cartotal: 0,
          date: 0,
          name: 0,
          address: 0
        }
      ],
      options: [
        {
          value: "12",
          label: "12"
        },
        {
          value: "24",
          label: "24"
        },
        {
          value: "36",
          label: "36"
        }
      ],
      value: ""
    };
  },
  components: {
    HomeTop,
    HomeFotter
  },

  methods: {
    handleClick() {
      this.cartotalinp.replace(/[^\w]/g, "");
    },

    handleClick1(tab, event) {
      this.product = tab.label;
      let opt = this.opt;

      if (tab.label === "一成融") {
        this.howrz = 0.9;
        this.fenqi();
      }

      if (tab.label === "二成融") {
        this.howrz = 0.8;
        this.fenqi();
      }
      if (tab.label === "付三贷七") {
        this.howrz = 0.7;
        this.fenqi();
      }
    },

    getopt(val) {
      this.opt = this.value;
      if (this.opt === "12") {
        this.lilv = 1.035;
      }
      if (this.opt === "24") {
        this.lilv = 1.065;
      }
      if (this.opt === "36") {
        this.lilv = 1.135;
      }
      this.fenqi();
    },
    cllabnum(num) {},

    fenqi() {
      var zongjia = this.$refs.num1.value;
      this.tableData1[0].cartotal = zongjia;
      this.tableData1[0].address = this.opt;
      this.tableData1[0].date = (zongjia - zongjia * this.howrz).toFixed(2);
      this.tableData1[0].name = (
        (zongjia * this.howrz * this.lilv) /
        this.opt
      ).toFixed(0);
    }
  }
};
</script>
<style scoped>
.clear {
  clear: both;
}
.testing_box {
  min-width: 1200px;
}
.header_title {
  padding: 0.78rem 0 0.48rem 0;
}

.top_box {
  width: 100%;
  /* height: 5rem;
  overflow: hidden; */
}
.top_box img {
  width: 100%;
}

.jr_jsq {
  width: 100%;
  margin-top: 1rem;
}
.jr_jsq_box {
  width: 100%;

  height: auto;
  padding-top: 0.3rem;
  padding-bottom: 1rem;
}
.jr_jsq_left {
  width: 79%;
  float: left;
  background: #fff;
  padding: 0.5rem;
  box-sizing: border-box;
}
.jr_left_couent1 {
  /* font-size: 1rem; */
  padding: 0.5rem 0 0.8rem 0;
}
.jr_left_couent1 .car_money {
  width: 5rem;
}
.table_couent {
  padding-bottom: 1rem;
}
.sel_box {
  margin-left: 1rem;
}

.table_title {
  padding: 0.5rem 0 0.7rem 0;
  font-size: 0.28rem;
}
.btn1 {
  margin-left: 0.5rem;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.jr_jsq_right {
  width: 20%;
  float: right;
  background: #fff;
}
.jr_jsq_right_top {
  width: 100%;
  background: #009899;
  padding: 0.2rem;
  box-sizing: border-box;
  color: #fff;
}
.jr_jsq_right_top1 {
  padding: 0.3rem 0 0.3rem 0;
  font-size: 0.4rem;
}
.jr_jsq_right_top2 {
  padding: 0.3rem 0 0.1rem 0;
  font-size: 0.3rem;
  border-bottom: 1px #eeeeee solid;
}
.jr_jsq_right_top2 ul li {
  width: 100%;
  height: 0.7rem;
  font-size: 0.26rem;
}
.jr_jsq_right_top3 {
  padding: 0.3rem 0 0.3rem 0;
  font-size: 0.3rem;
}
.jr_jsq_right_top4 {
  padding: 0.3rem 0 0.55rem 0;
  font-size: 0.3rem;
}
.jr_jsq_right_top4 button {
  width: 100%;
  padding: 0.2rem 0 0.2rem 0;
  background: #26adae;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.testing_box_top_box {
  background: #ffffff;
  padding: 0 0 0.2rem 0;
}
</style>
