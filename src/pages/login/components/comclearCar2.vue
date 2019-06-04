
<template>
  <div class="box1">
    <div class="main">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <!-- <el-tab-pane label="我的卡劵" name="first"></el-tab-pane> -->
        <el-tab-pane label="可用洗车劵" name="second">
          <div class="xcj">
            <el-table :data="tableData3" border style="width: 100%">
              <el-table-column prop="id" label="编号" width="180" align="center"></el-table-column>
              <el-table-column prop="f_CreateDate" label="发放日期" width="180" align="center">
                <template slot-scope="scope">{{scope.row.f_CreateDate | datefilters}}</template>
              </el-table-column>
              <el-table-column prop="f_OverDate" label="到期日期" align="center">
                <template slot-scope="scope">{{scope.row.f_OverDate | datefilters}}</template>
              </el-table-column>
            </el-table>
            <div class="washpage">
              <el-pagination background layout="prev, pager, next" :total="totalCount"></el-pagination>
            </div>
            <div class="washbottom"></div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { GetCarWashingTicketList } from "@/api/webapi";
export default {
  data() {
    return {
      activeName2: "second",
      activeName: "first",
      tableData3: [],
      listQuery: {
        id: 0,
        userid: this.$cookieStore.getCookie("username"),
        isType: 0,
        SkipCount: 0,
        MaxResultCount: 10
      },
      totalCount: 0
    };
  },
  created() {
    this.GetTicketList();
  },
  filters: {
    datefilters(val) {
      return (
        val.substring(0, 4) +
        "年" +
        val.substring(5, 7) +
        "月" +
        val.substring(8, 10) +
        "日"
      );
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    GetTicketList() {
      GetCarWashingTicketList(this.listQuery).then(res => {
        this.tableData3 = res.data.result.items;
        this.totalCount = res.data.result.totalCount;
      });
    }
  }
};
</script>

<style scoped>
.box1 {
  width: 90%;
  margin: 0 auto;
}
.main {
  padding-top: 1rem;
}
.xcj {
  padding-top: 0.2rem;
  font-size: 0.2rem !important;
}
.xcj {
  width: 50%;
}
.washbottom {
  margin-bottom: 50px;
}
.washpage {
  text-align: center;
  margin-top: 0.3rem;
}
</style>
