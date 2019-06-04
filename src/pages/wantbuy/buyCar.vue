<template>
  <div>
    <div class="hometop">
      <home-top></home-top>
    </div>
    <div class="Screening_conditions_box">
      <!-- nav开始 -->
      <div class="buycar_nav">
        <span>首页</span>
        <span>></span>
        <span>我要买车</span>
      </div>
      <!-- nav结束 -->
      <!-- 筛选条件开始 -->
      <div class="Screening_conditions">
        <div class="sc_input">
          <span class="pl5">当前已筛选条件</span>
          <!-- 品牌 -->
          <el-tag
            size="mini"
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >{{tag}}</el-tag>
          <!-- 品牌 -->

          <!-- <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="dataall.keyWords"
            ref="saveTagInput"
            size="mini"
          ></el-input>-->
          <span>
            <input type="text" ref="keywordinp">
            <button class="btn1" @click="getkeyrord">确定</button>
          </span>
          <span class="qctj" @click="clearearch">清除全部条件</span>
        </div>
      </div>
      <!-- 筛选条件结束 -->
      <!-- 品牌开始 -->
      <div class="sc_brand">
        <span class="fl pl5 colora7">品牌:</span>
        <span class="fl">
          <ul>
            <li @click="getbrandinfo1()">不限</li>
            <!-- <li v-for="item of debrand" :key="item.index">{{item}}</li> -->
            <li
              @click="getbrandinfo(item.nameCn,item.code)"
              v-for="(item, index) in brandlist"
              v-if="index<10"
              :key="item.code"
            >
              <span>{{item.nameCn}}</span>
              <span class="disN">{{item.code}}</span>
            </li>
          </ul>
          <div class="clear"></div>
        </span>
        <!-- <select class="sc_brand_sel" @mouseenter="seeDiv">
          <option>更多</option>
        </select>-->
        <span class="sc_brand_span">
          <select class="sc_brand_sel">
            <option>更多</option>
          </select>
          <div class="more_brand_div">
            <div class="more_brand_div_list">
              <div
                class="more_brand_div_list_left"
                v-for="(item,index) of brandlist1"
                :key="item.index"
              >
                <div class="more_brand_div_ABC">{{item.Letter}}</div>
                <div class="more_brand_div_name">
                  <ul>
                    <li
                      @click="getbrandinfo(item.NameCn,item.Code)"
                      v-for="item of item.BrandList"
                      :key="item.Code"
                    >
                      <span>{{item.NameCn}}</span>
                      <span class="disN">{{item.Code}}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
      <!-- <div class="more_brand_list" v-if="seen">
        <ul>
          <li
            @click="getbrandinfo(item.nameCn,item.code)"
            v-for="item of brandlist"
            :key="item.code"
          >
            <span>{{item.nameCn}}</span>
            <span class="disN">{{item.code}}</span>
          </li>
        </ul>
        <div class="clear"></div>
      </div>-->
      <div class="clear"></div>
      <!-- 品牌结束 -->
      <div class="clear"></div>
      <!-- 车系开始 -->
      <div class="sc_system">
        <span class="fl pl5 colora7">车系:</span>
        <span class="fl">
          <ul>
            <li @click="checkcarsys22()">不限</li>
            <li
              @click="checkcarsys2(item.nameCn,item.code)"
              v-for="item of BrandSystem"
              :key="item.code"
            >{{item.nameCn}}</li>
          </ul>
        </span>
      </div>
      <!-- 车系结束 -->
      <!-- 价格开始 -->
      <div class="sc_price">
        <span class="pl5 colora7">价格:</span>
        <span>
          <ul>
            <li @click="checkcarmoney('不限')">不限</li>

            <li @click="checkcarmoney(item)" v-for="item of demoney" :key="item.index">{{item}}</li>
          </ul>
        </span>
        <span class="sc_price_inp_box">
          <input class="pic_inp1" ref="price1">
          <span>-</span>
          <input class="pic_inp2" ref="price2">
          <!-- <el-input v-model="input" class="pic_inp1" placeholder="请输入内容"></el-input>-
          <el-input v-model="input" class="pic_inp2" placeholder="请输入内容"></el-input>-->
          <button class="btn1" @click="getinpBtn">确定</button>
        </span>
      </div>
      <!-- 价格结束 -->
      <!-- 其他开始 -->
      <div class="sc_other">
        <span class="pl5 colora7">其他:</span>
        <span>
          <ul>
            <li>
              <el-select
                @change="checkcarsyse"
                v-model="tagvalues.carsyse"
                filterable
                placeholder="车型"
              >
                <el-option
                  v-for="item in this.carsys"
                  :key="item.index"
                  :label="item"
                  :value="item"
                ></el-option>
              </el-select>
            </li>
            <li>
              <el-select
                @change="checkcarage"
                v-model="tagvalues.carage"
                filterable
                placeholder="车龄"
              >
                <el-option
                  v-for="item in this.carageall"
                  :key="item.index"
                  :label="item"
                  :value="item"
                ></el-option>
              </el-select>
            </li>
            <li>
              <el-select @change="checkcarkm" v-model="tagvalues.carkm" filterable placeholder="里程">
                <el-option
                  v-for="item in this.carkmall"
                  :key="item.index"
                  :label="item"
                  :value="item"
                ></el-option>
              </el-select>
            </li>
            <li>
              <el-select
                @change="checkcarDischarge"
                v-model="tagvalues.carDischarge"
                filterable
                placeholder="排放标准"
              >
                <el-option
                  v-for="item in this.carDischargeeall"
                  :key="item.index"
                  :label="item"
                  :value="item"
                ></el-option>
              </el-select>
            </li>
            <!-- <li>
              <select>
                <option>拍照所属</option>
              </select>
            </li>-->
          </ul>
        </span>
      </div>
      <!-- 其他结束 -->
      <div class="sc_car_list">
        <div class="sc_car_list_left fl">
          <div class="sc_car_list_left_title">
            <span class="pl5">
              为您找到共
              <span class="find_car_num">{{total}}</span>条二手车源
            </span>
            <span class="fr card_show">
              <span class="px">排序</span>
              <span class="sjsj" @click="sjsj">上架时间</span>
              <span class="jg" @click="jg">价格</span>
              <span class="lc" @click="lc">里程</span>
            </span>
          </div>

          <div>
            <div class="sc_car_list_left_main" v-for="item of xrdata" :key="item.id">
              <div class="img_box fl" @click="carInfo(item.id,item.userCollection)">
                <img :src="'http://market.api.yuncaiit.com/'+item.f_Pic1">
              </div>
              <div class="car_img_info fl">
                <div class="car_img_info_box">
                  <div class="car_img_info_box1" @click="carInfo(item.id,item.userCollection)">
                    <span>{{item.f_BrandName}}</span>
                    <span>{{item.f_SeriesName}}</span>
                    <span>{{item.f_StypeName}}</span>
                  </div>
                  <div class="car_img_info_box2">
                    <span>{{item.f_KM/10000|numFilter}}万公里</span>
                    <span>|</span>
                    <span>
                      {{item.f_PlateFirstDate|datefilters}}
                      <span>上牌</span>
                    </span>

                    <span>|</span>
                    <span>排放标准：{{item.emissionStandards}}</span>
                    <span>|</span>
                    <span>牌照属地：{{item.f_Plate}}</span>
                  </div>
                  <div class="car_img_info_box3">
                    <span>一口价：</span>
                    <span>
                      <span class="money">¥{{item.f_PreSalePrice/10000}}</span>
                    </span>
                    <span>万元</span>
                    <span>|</span>
                    <span>新车价：</span>
                    <span>{{item.guidePrice}}万元（含{{(item.guidePrice*0.074074*10000) | numFilter1}}元购置税）</span>
                  </div>
                  <div class="car_img_info_box4">
                    <button class="ljqd sc_btncss" @click="iflogin(item.id)">立即抢订</button>
                    <!-- <button class="jrdb">加入对比</button> -->

                    <button
                      class="sc sc_btncss"
                      @click="carcollection(item)"
                      v-if="item.userCollection === false"
                    >收藏</button>
                    <button
                      class="sc sc_btncss"
                      @click="clearcollection(item)"
                      v-if="item.userCollection === true"
                    >取消收藏</button>

                    <span class="gz">已有{{item.carcollectionCon}}人关注此车</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sc_car_list_right fr">
          <div class="sc_car_list_right_top">
            <img src="@/assets/image/buycarright1.png">
          </div>

          <div class="sc_car_list_right_bottom">
            <div class="sc_car_list_right_bottom1">
              <img src="@/assets/image/help_find_title.png">
            </div>
            <div class="sc_car_list_right_bottom2 pad1">
              <el-input type="text" placeholder="最低预算" v-model="formdata.startPrice" size="small"></el-input>
              <span>-</span>
              <el-input type="text" placeholder="最高预算" v-model="formdata.endPrice" size="small"></el-input>
            </div>
            <div class="sc_car_list_right_bottom3 sc_car_pad2">
              <el-select
                v-model="formdata.f_BrandID"
                filterable
                placeholder="请选择品牌"
                @change="carbrandchange(formdata.f_BrandID)"
                size="small"
              >
                <el-option
                  v-for="(item, index) in brandlist"
                  :key="index"
                  :label="item.nameCn"
                  :value="item.code"
                ></el-option>
              </el-select>
            </div>
            <div class="sc_car_list_right_bottom3 sc_car_pad3">
              <el-select v-model="formdata.f_SeriesID" filterable placeholder="请选择车系" size="small">
                <el-option
                  v-for="(item, index) in SeriesListData"
                  :key="index"
                  :label="item.nameCn"
                  :value="item.code"
                ></el-option>
              </el-select>
            </div>
            <div class="sc_car_list_right_bottom4 pad1">
              <el-input
                type="textarea"
                :rows="3"
                placeholder="其它条件"
                v-model="formdata.f_CustomerIntention"
              ></el-input>
            </div>
            <div class="sc_car_list_right_bottom5 sc_car_pad2">
              <el-input v-model="formdata.f_CustomerName" placeholder="请输入用户姓名(必填)" size="small"></el-input>
            </div>
            <div class="sc_car_list_right_bottom5 sc_car_pad3">
              <el-input v-model="formdata.f_CustomerPhone" placeholder="请输入手机号码(必填)" size="small"></el-input>
            </div>
            <div class="sc_car_list_right_bottom6 pad1">
              <button class="btn_buycarenter" @click="SaveData()">确定</button>
            </div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
      <div class="sc_page_next">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </div>
    <div class="clear"></div>

    <home-fotter></home-fotter>
  </div>
</template>

<script>
import HomeTop from "@/pages/home/components/HomeTop";
import HomeFotter from "@/pages/home/components/HomeFotter";
import { buyCar } from "@/api/buyCar";
import { carBrand } from "@/api/testApi";
import { brandABC } from "@/api/testApi";
import { BrandSystem } from "@/api/testApi";
import {
  InsertRetailTrack,
  CarCollectionInsert,
  CarCollectionClear
} from "@/api/webapi";

export default {
  name: "BuyCar",
  components: {
    HomeTop,
    HomeFotter
  },
  data() {
    return {
      cookieuserId: this.$cookieStore.getCookie("username"), //userid
      homewordkey: this.$route.params.wordkey, //首页传送的关键字
      homeNameCn: this.$route.params.namecn, //首页传送的品牌名称
      homecode: this.$route.params.code, //首页传送的品牌code
      homepic: this.$route.params.homepic, //首页传送的品牌名称
      hometype: this.$route.params.type, //首页传送的品牌名称
      choosedes: false,
      myVal: 0, //默认选中第一项
      seen: false,
      brandlist: "", //车型
      brandlist1: "", //车型ABC
      BrandSystem: "", //chexi
      carmoney: "",
      xrdata: "",
      SeriesListData: [],
      tagvalues: {
        brandname: "",
        seriesname: "",
        pricename: "",
        carsyse: "",
        carage: "",
        carkm: "",
        carDischarge: ""
      },
      dataall: {
        keyWords: "",
        brandCode: "", //车code
        seriesCode: "",
        carPrice1: 0,
        carPrice2: 0,
        carType: "",
        carYear1: 0,
        carYear2: 0,
        carKM1: 0,
        carKM2: 0,
        carDischarge: "", //国IV
        upperOrder: "", //上架升降序（asc，desc）
        priceOrder: "", //价格升降序
        kmOrder: "", //里程升降序
        UserID: this.$cookieStore.getCookie("username"),
        pageindex: 1,
        pagecount: 10
      },
      collectiondata: {
        userId: this.$cookieStore.getCookie("username"), //userid
        f_CarId: 0
      },
      demoney: [
        "5-8万",
        "8-10万",
        "10-15万",
        "15-20万",
        "20-30万",
        "30-50万",
        "50万以上"
      ], //默认价格
      //默认车类型，比如大中型，小型
      carsys: [
        "小型",
        "紧凑型",
        "中型",
        "大型",
        "豪华型",
        "所有轿车",
        "MPV",
        "SUV",
        "跑车"
      ],
      //默认车龄
      carageall: ["一年以内", "二年以内", "三年以内", "3-5年", "5年以上"],
      //默认里程
      carkmall: [
        "一万公里以内",
        "1-3万公里",
        "3-6万公里",
        "6-10万公里",
        "10万公里以上"
      ],
      //默认排放标准
      carDischargeeall: [
        "国II",
        "国III",
        "国III+OBD",
        "国IV",
        "国IV(国V)",
        "国IV(国V)+OBD",
        "国IV+OBD",
        "国IV/京V",
        "国IV/国V",
        "国V",
        "国V(国VI)",
        "国V+OBD",
        "国VI",
        "欧II",
        "欧III",
        "欧III+OBD",
        "欧IV",
        "欧IV+OBD",
        "欧V",
        "欧V+OBD",
        "欧VI"
      ],

      dynamicTags: [], //筛选添加的条件
      inputVisible: false,
      inputValue: "",
      total: 0, //总页数
      formdata: {
        startPrice: null,
        endPrice: null,
        f_BrandID: null,
        f_SeriesID: null,
        f_CustomerIntention: "",
        f_CustomerName: "",
        f_CustomerPhone: null,
        tenantId: 1,
        typecode: 1
      }
    };
  },
  mounted: function() {
    this.httpGet();
    this.homeHttpdata1();
    this.homeHttpdata2();
    this.homeHttpdata3();
    this.homeHttpdata4();
  },

  methods: {
    //显示隐藏
    seeDiv() {
      this.seen = !this.seen;
    },
    //根据首页传输的的品牌数据进行筛选
    homeHttpdata1() {
      if (this.homeNameCn !== "" && this.homeNameCn !== undefined) {
        this.tagvalues.brandname = this.homeNameCn;
        this.dataall.brandCode = this.homecode;
        this.tagvalues.seriesname = "";
      }
      this.taglist();
      this.httpGet();
    },
    //根据首页传输的的价格数据进行筛选
    homeHttpdata2() {
      if (this.homepic !== "" && this.homepic !== undefined) {
        this.tagvalues.pricename = this.homepic;
        this.dynamicTags.push(this.homepic);
        this.pdprice();
        this.taglist();
        this.httpGet();
      }
    },
    //根据首页传输的的车辆类型数据进行筛选
    homeHttpdata3() {
      if (this.hometype !== "" && this.hometype !== undefined) {
        this.dataall.carType = this.hometype;
        this.tagvalues.carsyse = this.hometype;
      }
      this.taglist();
      this.httpGet();
    },
    //根据首页传输的的车关键字数据进行筛选
    homeHttpdata4() {
      if (this.homewordkey !== "" && this.homewordkey !== undefined) {
        this.dataall.keyWords = this.homewordkey;
        this.$refs.keywordinp.value = this.homewordkey;
        // this.dynamicTags.push(this.hometype);
        this.httpGet();
      }
    },

    //获取点击的品牌信息
    getbrandinfo(title, val) {
      this.tagvalues.brandname = title;
      this.dataall.brandCode = val;
      this.tagvalues.seriesname = "";
      this.dynamicTags = [];
      this.taglist();
      this.httpGet();
    },
    //获取点击的品牌信息(不限按钮)
    getbrandinfo1() {
      this.tagvalues.brandname = "不限";
      this.dataall.brandCode = "";
      this.tagvalues.seriesname = "";
      this.dynamicTags = [];
      this.taglist();
      this.httpGet();
    },
    taglist() {
      this.dynamicTags = [];

      if (this.tagvalues.brandname !== "") {
        this.dynamicTags.push(this.tagvalues.brandname);
        // this.dynamicTags.push(this.homebrand);
      }
      if (this.tagvalues.seriesname !== "") {
        this.dynamicTags.push(this.tagvalues.seriesname);
      }
      if (this.tagvalues.pricename !== "") {
        this.dynamicTags.push(this.tagvalues.pricename);
      }
      //车系
      if (this.tagvalues.carsyse !== "") {
        this.dynamicTags.push(this.tagvalues.carsyse);
      }
      //车龄
      if (this.tagvalues.carage !== "") {
        this.dynamicTags.push(this.tagvalues.carage);
      }
      //里程
      if (this.tagvalues.carkm !== "") {
        this.dynamicTags.push(this.tagvalues.carkm);
      } //排放标准
      if (this.tagvalues.carDischarge !== "") {
        this.dynamicTags.push(this.tagvalues.carDischarge);
      }
    },
    //点击添加车系
    checkcarsys2(title, val) {
      this.dynamicTags = [];
      this.tagvalues.seriesname = title;
      this.dataall.seriesCode = val;

      this.taglist();
      this.httpGet();
    },

    //点击添加车系（不限）
    checkcarsys22() {
      this.dynamicTags = [];
      this.tagvalues.seriesname = "不限";
      this.dataall.seriesCode = "";

      this.taglist();
      this.httpGet();
    },
    //点击添加价格区间
    checkcarmoney(title) {
      this.dynamicTags = [];
      this.tagvalues.pricename = title;
      this.pdprice();
      this.taglist();
      this.httpGet();
    },

    //判断价格区间
    pdprice() {
      var pic = this.tagvalues.pricename;
      if (pic === "不限") {
        this.dataall.carPrice1 = 0;
        this.dataall.carPrice2 = 0;
        this.httpGet();
      }
      if (pic === "5-8万") {
        this.dataall.carPrice1 = 50000;
        this.dataall.carPrice2 = 80000;
        this.httpGet();
      }
      if (pic === "8-10万") {
        this.dataall.carPrice1 = 80000;
        this.dataall.carPrice2 = 100000;
        this.httpGet();
      }
      if (pic === "10-15万") {
        this.dataall.carPrice1 = 100000;
        this.dataall.carPrice2 = 150000;
        this.httpGet();
      }
      if (pic === "15-20万") {
        this.dataall.carPrice1 = 150000;
        this.dataall.carPrice2 = 200000;
        this.httpGet();
      }
      if (pic === "20-30万") {
        this.dataall.carPrice1 = 200000;
        this.dataall.carPrice2 = 300000;
        this.httpGet();
      }
      if (pic === "30-50万") {
        this.dataall.carPrice1 = 300000;
        this.dataall.carPrice2 = 500000;
        this.httpGet();
      }
      if (pic === "50万以上") {
        this.dataall.carPrice1 = 500000;
        this.dataall.carPrice2 = 800000;
        this.httpGet();
      }
    },

    //点击添车系类别
    checkcarsyse() {
      this.dynamicTags = [];
      this.dataall.carType = this.tagvalues.carsyse;

      this.taglist();
      this.httpGet();
    },
    //点击添车龄
    checkcarage(title) {
      this.dynamicTags = [];
      this.tagvalues.carage = title;
      var age = this.tagvalues.carage;

      if (age === "不限") {
        this.dataall.carYear1 = 0;
        this.dataall.carYear2 = 0;
        this.httpGet();
      }
      if (age === "一年以内") {
        this.dataall.carYear1 = 0;
        this.dataall.carYear2 = 1;
        this.httpGet();
      }
      if (age === "二年以内") {
        this.dataall.carYear1 = 0;
        this.dataall.carYear2 = 2;
        this.httpGet();
      }
      if (age === "三年") {
        this.dataall.carYear1 = 0;
        this.dataall.carYear2 = 3;
        this.httpGet();
      }
      if (age === "3-5年") {
        this.dataall.carYear1 = 3;
        this.dataall.carYear2 = 5;
        this.httpGet();
      }

      if (age === "五年以上") {
        this.dataall.carYear1 = 5;
        this.dataall.carYear2 = 0;
        this.httpGet();
      }
      this.taglist();
      this.httpGet();
    },
    //点击添加里程
    checkcarkm(title) {
      this.dynamicTags = [];
      this.tagvalues.carkm = title;
      var km = this.tagvalues.carkm;

      if (km === "一万公里以内") {
        this.dataall.carKM1 = 0;
        this.dataall.carKM2 = 10000;
        this.httpGet();
      }
      if (km === "1-3万公里") {
        this.dataall.carKM1 = 10000;
        this.dataall.carKM2 = 30000;
        this.httpGet();
      }
      if (km === "3-6万公里") {
        this.dataall.carKM1 = 30000;
        this.dataall.carKM2 = 60000;
        this.httpGet();
      }
      if (km === "6-10万公里") {
        this.dataall.carKM1 = 60000;
        this.dataall.carKM2 = 100000;
        this.httpGet();
      }
      if (km === "10万公里以上") {
        this.dataall.carKM1 = 100000;
        this.dataall.carKM2 = 0;
        this.httpGet();
      }
      this.taglist();
      this.httpGet();
    },
    //点击添加排放标准
    checkcarDischarge() {
      this.dynamicTags = [];
      this.dataall.carDischarge = this.tagvalues.carDischarge;
      this.taglist();
      this.httpGet();
    },

    httpGet() {
      buyCar("/api/CarApiService/GetCarListAll", this.dataall).then(
        response => {
          // this.alldata = response.data.result;
          this.xrdata = response.data.result;
          this.total = response.data.pageCount;
        }
      );

      //品牌
      carBrand("/api/services/app/WebApiService/BrandList").then(response => {
        // this.alldata = response.data.result;
        this.brandlist = response.data.result;
      });

      //品牌ABC
      brandABC("/api/services/app/WebApiService/CarBrandList").then(
        response => {
          // this.brandlist = response.data.result;
          this.brandlist1 = response.data.result.CarBrandData;
        }
      );
      //车系
      BrandSystem(
        "/api/services/app/Common/GetSeriesList?brandseid=" +
          this.dataall.brandCode
      ).then(response => {
        // this.alldata = response.data.result;
        this.BrandSystem = response.data.result;
      });
    },
    carbrandchange(BrandId) {
      BrandSystem(
        "/api/services/app/Common/GetSeriesList?brandseid=" + BrandId
      ).then(response => {
        // this.alldata = response.data.result;
        this.SeriesListData = response.data.result;
      });
    },
    // 上架排序
    sjsj(item) {
      let _this = this;
      this.dataall.priceOrder = "";
      this.dataall.kmOrder = "";
      var upperOrder = _this.dataall.upperOrder;
      if (upperOrder === "") {
        _this.dataall.upperOrder = "asc";
      }
      if (upperOrder === "asc") {
        _this.dataall.upperOrder = "desc";
      } else {
        _this.dataall.upperOrder = "asc";
      }

      this.httpGet();
    },
    //价格排序
    jg() {
      this.dataall.upperOrder = "";
      this.dataall.kmOrder = "";
      var _this = this;

      var priceOrder = _this.dataall.priceOrder;
      if (priceOrder === "") {
        _this.dataall.priceOrder = "asc";
      }
      if (priceOrder === "asc") {
        _this.dataall.priceOrder = "desc";
      } else {
        _this.dataall.priceOrder = "asc";
      }
      this.httpGet();
    },
    //里程排序
    lc() {
      this.dataall.upperOrder = "";
      this.dataall.priceOrder = "";
      var _this = this;
      var kmOrder = _this.dataall.kmOrder;
      if (kmOrder === "") {
        _this.dataall.kmOrder = "asc";
      }
      if (kmOrder === "asc") {
        _this.dataall.kmOrder = "desc";
      } else {
        _this.dataall.kmOrder = "asc";
      }
      this.httpGet();
    },
    //清除条件
    clearearch() {
      this.dynamicTags = [];
      this.dataall.keyWords = "";
      this.dataall.brandCode = 0;
      this.dataall.seriesCode = "";
      this.dataall.carType = "";
      this.dataall.carPrice1 = 0;
      this.dataall.carPrice2 = 0;
      this.dataall.carYear1 = 0;
      this.dataall.carYear2 = 0;
      this.dataall.carKM1 = 0;
      this.dataall.carKM2 = 0;
      this.dataall.carDischarge = "";
      this.dataall.upperOrder = "";
      this.dataall.priceOrder = "";
      this.dataall.kmOrder = "";
      //清除tagvalues里面的数据(包含车型，车龄，里程，排放标准)
      this.tagvalues.brandname = "";
      this.tagvalues.seriesname = "";
      this.tagvalues.pricename = "";
      this.tagvalues.carsyse = "";
      this.tagvalues.carage = "";
      this.tagvalues.carkm = "";
      this.tagvalues.carDischarge = "";
      this.$refs.keywordinp.value = ""; //输入框的关键字
      this.$refs.price1.value = ""; //输入框的价格1
      this.$refs.price2.value = ""; //输入框的价格2
      this.httpGet();
    },
    // 分页效果开始
    handleCurrentChange: function(pageindex) {
      this.dataall.pageindex = pageindex;
      this.httpGet();
    },
    //分页效果结束
    //车辆详情跳转
    carInfo(id, userCollection) {
      const routeData = this.$router.resolve({
        name: "car_info",
        params: { id: id, userCollection: userCollection }
      });

      window.open(routeData.href, "_blank");
    },

    handleClose(tag) {
      if (this.tagvalues.brandname === tag) {
        this.tagvalues.brandname = "";
        this.dataall.brandCode = "";
        this.httpGet();
      }
      if (this.homeNameCn === tag) {
        this.homecode = ""; //首页传送的品牌code
        this.tagvalues.brandname = "";
        this.dataall.brandCode = "";
        this.httpGet();
      }

      if (this.tagvalues.seriesname === tag) {
        this.tagvalues.seriesname = "";
        this.dataall.seriesCode = "";
        this.httpGet();
      }
      if (this.tagvalues.pricename === tag) {
        this.tagvalues.pricename = "";
        this.dataall.carPrice1 = 0;
        this.dataall.carPrice2 = 0;
        this.httpGet();
      }
      if (this.tagvalues.carsyse === tag) {
        this.tagvalues.carsyse = "";
        this.dataall.carType = "";
        this.httpGet();
      }
      if (this.tagvalues.carage === tag) {
        this.tagvalues.carage = "";
        this.dataall.carYear1 = 0;
        this.dataall.carYear2 = 0;
        this.httpGet();
      }
      if (this.tagvalues.carkm === tag) {
        this.tagvalues.carkm = "";
        this.dataall.carKM1 = "";
        this.dataall.carKM2 = "";
        this.httpGet();
      }
      if (this.tagvalues.carDischarge === tag) {
        this.tagvalues.carDischarge = "";
        this.dataall.carDischarge = "";
        this.httpGet();
      }

      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    //获取关键字
    getkeyrord() {
      this.dataall.keyWords = this.$refs.keywordinp.value;
      if (this.dataall.keyWords !== "") {
        this.httpGet();
      }
    },
    //获取价格关键字
    getinpBtn() {
      this.dataall.carPrice1 = this.$refs.price1.value * 10000;
      this.dataall.carPrice2 = this.$refs.price2.value * 10000;

      if (this.dataall.carPrice1 !== "" && this.dataall.carPrice2 !== "") {
        this.httpGet();
      }
    },
    //click if logined
    iflogin(id) {
      //this.$router.push({ path: "ljqd", query: { id: 221 } });
      if (this.cookieuserId === "" || this.cookieuserId === undefined) {
        this.$router.push({ name: "home" });
      } else {
        const routeData1 = this.$router.resolve({
          name: "ljqd",
          params: { id: id }
        });
        window.open(routeData1.href, "_blank");
      }
    },
    SaveData() {
      if (
        this.formdata.f_CustomerName === "" ||
        this.formdata.SaveData === null
      ) {
        this.$message({
          message: "请填写用户姓名",
          type: "error"
        });
        return false;
      }
      var numReg = /^[0-9]+$/;
      var numRe = new RegExp(numReg);
      if (
        this.formdata.f_CustomerPhone === null ||
        this.formdata.f_CustomerPhone.length !== 11 ||
        !numRe.test(this.formdata.f_CustomerPhone)
      ) {
        this.$message({
          message: "请填写正确的手机号",
          type: "error"
        });
        return false;
      }

      InsertRetailTrack(this.formdata).then(res => {
        this.$message({
          message: "您已提交成功",
          type: "success"
        });
      });
    },
    carcollection(row) {
      if (
        this.cookieuserId === "" ||
        this.cookieuserId === undefined ||
        this.cookieuserId === null ||
        this.cookieuserId === 0
      ) {
        this.$router.push({ name: "home" });
      } else {
        this.collectiondata.f_CarId = row.id;
        CarCollectionInsert(this.collectiondata).then(res => {
          this.$message({
            message: "您已收藏成功",
            type: "success"
          });
          this.getListData();
        });
      }
    },
    clearcollection(row) {
      if (
        this.cookieuserId === "" ||
        this.cookieuserId === undefined ||
        this.cookieuserId === null ||
        this.cookieuserId === 0
      ) {
        this.$router.push({ name: "home" });
      } else {
        this.collectiondata.f_CarId = row.id;
        CarCollectionClear(this.collectiondata).then(res => {
          this.$message({
            message: "您已取收藏成功",
            type: "success"
          });
          this.getListData();
        });
      }
    },
    getListData() {
      buyCar("/api/CarApiService/GetCarListAll", this.dataall).then(
        response => {
          // this.alldata = response.data.result;
          this.xrdata = response.data.result;
          this.total = response.data.pageCount;
        }
      );
    }
  },
  //过滤函数
  filters: {
    numFilter(value) {
      // 截取当前数据到小数点后两位

      let realVal = parseFloat(value).toFixed(2);

      return realVal;
    },
    numFilter1(value) {
      // 截取当前数据到小数点后两位

      let realVal = parseFloat(value).toFixed(0);

      return realVal;
    },
    datefilters(val) {
      return val.substring(0, 4) + "年" + val.substring(5, 7) + "月";
    }
  }
};
</script>
<style lang="" scoped>
.sc_car_pad2 {
  padding-left: 0.2rem;
  padding-right: 0.2rem;
}
.sc_car_pad3 {
  margin-top: 0.2rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
}
.btn_buycarenter {
  cursor: pointer;
}
.disN {
  display: none;
}
.Screening_conditions_box {
  width: 80%;
  min-width: 1200px;
  margin: 0 auto;
  height: auto;
  color: #807e7e;
  /* font-size: 0.26rem; */
}
.clear {
  clear: both;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 25px;
  line-height: 25px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
input[type="text"] {
  border: solid 1px #efefef;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.pl5 {
  padding-left: 0.5rem;
}
.colora7 {
  color: #a7a6a6;
  font-weight: bold;
}
.find_car_num {
  color: #fa5050;
  padding: 0 0.1rem 0 0.1rem;
  font-size: 0.3rem;
}
.Screening_conditions {
  width: 100%;
}

.qctj {
  position: relative;
  left: 0.3rem;
  top: 0.05rem;
  color: #000000;
  font-size: 0.2rem;
  cursor: pointer;
}
.card_show span {
  display: block;
  float: left;
  padding: 0 0.2rem 0 0.2rem;
  border-left: solid 1px #cccccc;
  cursor: pointer;
}
.card_show .px {
  color: #009899;
  font-weight: bold;
}
.buycar_nav {
  width: 100%;
  font-size: 0.2rem;
  padding: 0.43rem 0 0.23rem 0;
}
.sc_input {
  width: 100%;
  background: #ffffff;
  padding: 0.27rem 0 0.27rem 0;
  border-bottom: solid 1px #f0efef;
}

.sc_input input {
  height: 0.55rem;
  padding-left: 0.3rem;
  border-radius: 4px;
}
.el-tag {
  height: 0.55rem;
  line-height: 0.55rem;
}
.btn1 {
  width: 1rem;
  height: 0.55rem;
  background: #009899;
  font-size: 0.1rem;
  color: #ffffff;
}
.sc_brand {
  width: 100%;
  background: #ffffff;
  display: flex;
  padding: 0.32rem 0 0.27rem 0;
  border-bottom: solid 1px #f0efef;
}
.sc_brand ul {
  width: 100%;

  overflow: hidden;
}
.sc_brand ul li {
  float: left;
  margin-left: 0.38rem;
}
.sc_brand_sel {
  color: #009899;
  background: #ffffff;
  font-weight: bold;
  position: relative;
  top: -0.08rem;
  margin-left: 5%;
}
.more_brand_list {
  width: 20rem;
  right: 0.2rem;
  position: absolute;
  padding-right: 0.2rem;
  background: #ffffff;
  z-index: 999;
  border: solid 1px #eeeeee;
}

.more_brand_list ul li {
  line-height: 0.8rem;
  font-size: 0.27rem;
  float: left;
  margin-left: 0.38rem;
}
.more_brand_list ul li:hover {
  color: red;
  cursor: pointer;
}
.sc_system span:first-child {
  padding-top: 0.28rem;
}
.sc_system {
  width: 100%;
  background: #ffffff;
  display: flex;
  border-bottom: solid 1px #f0efef;
  padding: 0.06rem 0 0.32rem 0;
}
.sc_system ul li {
  float: left;
  margin-left: 0.38rem;
  margin-top: 0.28rem;
}
.sc_brand_span {
  margin-left: 0.2rem;
}
.sc_brand_span:hover .more_brand_div {
  display: block;
}
.more_brand_div {
  display: none;
  position: absolute;
  z-index: 999;
  border: solid 1px #eeeeee;
  background: #ffffff;
  width: 80%;
  padding: 0.5rem;
  left: 8.2%;
  /* display: none;
  position: absolute;
  left: -12rem;
  z-index: 999;
  width: 20rem;
  height: auto;
  padding: 0.5rem;
  background: #ffffff;
  border: solid 1px #cccccc; */
}
.more_brand_div_list {
  width: 100%;
}
.more_brand_div_list_left {
  width: 49%;
  float: left;
}
.more_brand_div_ABC {
  width: 10%;
  float: left;
  text-align: center;
  padding-top: 0.2rem;
}
.more_brand_div_name {
  width: 90%;
  float: left;
}
.more_brand_div_name ul li {
  float: left;
  padding: 0.2rem 0.1rem 0.2rem 0.1rem;
}
.more_brand_div_name ul li:hover {
  background: red;
  color: #ffffff;
}

.more_brand_list {
  width: 20rem;
  right: 0.2rem;
  position: absolute;
  padding-right: 0.2rem;
  background: #ffffff;
  z-index: 999;
  border: solid 1px #eeeeee;
}

.more_brand_list ul li {
  line-height: 0.8rem;
  font-size: 0.27rem;
  float: left;
  margin-left: 0.38rem;
}
.more_brand_list ul li:hover {
  color: red;
  cursor: pointer;
}
.sc_system span:first-child {
  padding-top: 0.28rem;
}
.sc_system {
  width: 100%;
  background: #ffffff;
  display: flex;
  border-bottom: solid 1px #f0efef;
  padding: 0.06rem 0 0.32rem 0;
}
.sc_system ul li {
  float: left;
  margin-left: 0.38rem;
  margin-top: 0.28rem;
}
.sc_price {
  width: 100%;
  background: #ffffff;
  display: flex;
  border-bottom: solid 1px #f0efef;
  padding: 0.06rem 0 0.32rem 0;
}
.sc_price ul li {
  float: left;
  margin-top: 0.28rem;
  margin-left: 0.24rem;
}
.sc_price span:first-child {
  padding-top: 0.28rem;
}
.sc_price input {
  width: 1.09rem;
}
.sc_price input:first-child {
  margin-left: 1rem;
}
.sc_price_inp_box {
  position: relative;
  top: 0.2rem;
  color: #cccccc;
}
.pic_inp1,
.pic_inp2 {
  padding: 0.1rem 0.5rem 0.1rem 0.5rem;
  border: solid 1px #eeeeee;
  border-radius: 4px;
}

.sc_other {
  width: 100%;
  background: #ffffff;
  display: flex;
  padding: 0.06rem 0 0.32rem 0;
}
.sc_other ul li {
  float: left;
  margin-top: 0.28rem;
  margin-left: 0.24rem;
}
.sc_other ul li select {
  padding: 0.28rem 1rem 0.28rem 1rem;
  border: solid 1px #d6d5d5;
  background: #ffffff;
}
.sc_other span:first-child {
  padding-top: 0.48rem;
}
.el-input--suffix .el-input__inner {
  height: 0.65rem;
  line-height: 0.65rem;
}

.sc_car_list {
  margin-top: 0.52rem;
  width: 100%;
}
.sc_car_list_left {
  width: 79%;
}

.sc_car_list_left_title {
  width: 100%;
  padding: 0.28rem 0 0.28rem 0;
  background: #ffffff;
}

.sc_car_list_left_main {
  width: 100%;
  height: 4.1rem;
  position: relative;
  margin-top: 0.4rem;
  background: #ffffff;
}

.img_box {
  width: 6rem;
  height: 4rem;
  position: absolute;
  left: 0;
}
.img_box img {
  width: 100%;
  height: 100%;
}
/* .car_img_info {
  margin-left: 6.5rem;
} */
.car_img_info_box {
  position: absolute;
  right: 0.3rem;
  left: 6.3rem;
  overflow: hidden;
}
.car_img_info_box1 {
  padding: 0.47rem 0 0.35rem 0;
  border-bottom: solid 1px #efefef;
  width: 100%;
  color: #db0d17;
  font-size: 0.32rem;
  cursor: pointer;
}

.car_img_info_box2 {
  padding: 0.35rem 0 0.4rem 0;
  display: flex;
  font-size: 0.25rem;
}
.car_img_info_box2 span:not(:first-child) {
  margin-left: 0.2rem;
}
.car_img_info_box3 {
  padding: 0.25rem 0 0.1rem 0;
  display: flex;
  font-size: 0.25rem;
  border-bottom: solid 1px #efefef;
  width: 100%;
}
.car_img_info_box3 .money {
  font-size: 0.5rem;
  color: red;
}
.car_img_info_box3 span:not(:first-child) {
  margin-left: 0.2rem;
}
.car_img_info_box3 span:nth-child(2) {
  position: relative;
  top: -0.13rem;
}
.car_img_info_box4 {
  padding: 0.35rem 0 0.2rem 0;
  display: flex;
  font-size: 0.25rem;
  width: 100%;
}
.car_img_info_box4 .ljqd {
  width: 1.78rem;
  height: 0.58rem;
  background: #fa5050;
  color: #ffffff;
  border-radius: 5px;
}
.car_img_info_box4 .jrdb {
  width: 1.78rem;
  height: 0.58rem;
  margin-left: 0.2rem;
  background: #ffffff;
  border: solid 1px #cccccc;
  border-radius: 3px;
}
.car_img_info_box4 .sc {
  width: 1.78rem;
  height: 0.58rem;
  margin-left: 0.2rem;
  background: #ffffff;
  border-radius: 5px;
  border: solid 1px #cccccc;
}
.car_img_info_box4 .gz {
  margin-left: 0.44rem;
  color: #2fabac;
  padding-top: 0.18rem;
}
.sc_car_list_right {
  width: 20%;
}
.sc_car_list_right_top {
  width: 100%;
}
.sc_car_list_right_top img {
  width: 100%;
}

.sc_car_list_right_bottom {
  width: 100%;
  height: 8.89rem;
  background: #ffffff;
  margin-top: 0.4rem;
}

.sc_car_list_right_bottom img {
  width: 100%;
}

.pad1 {
  padding: 0.2rem 0.2rem 0.2rem 0.2rem;
}

/* .sc_car_list_right_bottom input {
  border: solid 1px #eeeeee;
  width: 100%;
  height: 0.4rem;
} */
.sc_car_list_right_bottom2 {
  box-sizing: border-box;
}
.sc_car_list_right_bottom2 .el-input {
  width: 47.1% !important;
}
.sc_car_list_right_bottom2 .el-input__inner {
  width: 105px !important;
  display: block !important;
  text-align: center;
}

.sc_car_list_right_bottom3 .el-select {
  width: 100%;
}
.sc_car_list_right_bottom4 textarea {
  width: 100%;
  height: 1.3rem;
  border: solid 1px #eeeeee;
  padding-left: 0.2rem;
  padding-top: 0.2rem;
  box-sizing: border-box;
}
.sc_car_list_right_bottom5 input {
  border: solid 1px #eeeeee;
  width: 100%;
  height: 0.7rem;
  padding-left: 0.2rem;
  border-radius: 4px;
  box-sizing: border-box;
}
.sc_car_list_right_bottom6 button {
  width: 100%;
  height: 0.7rem;
  background: #009899;
  color: #ffffff;
  border-radius: 4px;
  box-sizing: border-box;
}

.sc_page_next {
  margin: 0.39rem auto;
  text-align: center;
}
.el-pagination.is-background .el-pager li {
  background: #ffffff;
  color: #807e7e;
  font-size: 0.2rem;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background: #fa5050;
}

.hometop {
  background: #ffffff;
}
.sc_btncss {
  cursor: pointer;
}
</style>

