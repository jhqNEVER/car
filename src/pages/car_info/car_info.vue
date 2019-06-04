<template>
  <div>
    <div class="testing_box_top_box">
      <home-top></home-top>
    </div>
    <div class="carinfo_testing_box">
      <el-row type="flex" :gutter="10" class="row-bg" justify="center">
        <el-col :xs="24" :sm="24" :md="24" :lg="21" :xl="20">
          <div class="grid-content bg-purple i">
            <!-- <div class="car_info_nav">首页 > 我要买车 > 日产二手车 > 观致 观致3 2015款 都市SUV 1.6T 自动炫动派</div> -->
            <div class="car_info_nav">首页 > 我要买车 > {{xrdata.f_CarName}}</div>
            <div class="car_info_title1">{{xrdata.f_CarName}}</div>
            <div class="top_box">
              <div class="top_box_left">
                <div class="top_box_left_top">
                  <img
                    :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_LeftFront45Degree_Pic"
                  >
                </div>
                <div class="top_box_left_bottom">
                  <div class="li1"><</div>
                  <div class="li_main">
                    <ul>
                      <li>
                        <img
                          :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_LeftFront45Degree_Pic"
                        >
                      </li>
                      <li>
                        <img
                          :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_CarKey_Pic"
                        >
                      </li>
                      <li>
                        <img
                          :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_CarSide_Pic"
                        >
                      </li>
                      <li>
                        <img
                          :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_CentralControl_Pic"
                        >
                      </li>
                      <li>
                        <img
                          :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_Copilot_Pic"
                        >
                      </li>
                      <li>
                        <img
                          :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_Dashboard_Pic"
                        >
                      </li>
                      <li>
                        <img
                          :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_EngineCompartment_Pic"
                        >
                      </li>
                      <li>
                        <img
                          :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_FamousBrand_Pic"
                        >
                      </li>
                      <li>
                        <img
                          :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_FrontHubTire_Pic"
                        >
                      </li>
                      <li>
                        <img
                          :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_FrontRow_Pic"
                        >
                      </li>
                      <li>
                        <img
                          :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_LeftFront45Degree_Pic"
                        >
                      </li>
                      <li>
                        <img
                          :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_LiftingKey_Pic"
                        >
                      </li>
                      <li>
                        <img
                          :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_RightBack45Degree_Pic"
                        >
                      </li>
                      <li>
                        <img
                          :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_RightFront45_Pic"
                        >
                      </li>
                      <li>
                        <img
                          :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_SpareTire_Pic"
                        >
                      </li>
                      <li>
                        <img :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_Trunk_Pic">
                      </li>
                      <!-- <li v-for="item of xrdata.carimglist" :key="xrdata.id">
                        <img
                          :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_LeftFront45Degree_Pic"
                        >
                      
                      </li>-->
                      <!-- <li>
                      <img src="@/assets/image/car_info_img1.png">
                    </li>
                    <li>
                      <img src="@/assets/image/car_info_img1.png">
                    </li>
                    <li>
                      <img src="@/assets/image/car_info_img1.png">
                    </li>
                    <li>
                      <img src="@/assets/image/car_info_img1.png">
                    </li>
                    <li>
                      <img src="@/assets/image/car_info_img1.png">
                      </li>-->
                    </ul>
                  </div>
                  <div class="li2">></div>
                </div>
              </div>

              <div class="top_box_right">
                <div class="top_box_right1">
                  <div class="top_box_right1_left">
                    <span class="top_box_right1_left_sp1">一口价：</span>
                    <span class="top_box_right1_left_sp2">
                      <span>￥{{xrdata.f_PreSalePrice/10000}}</span>
                    </span>

                    <span class="top_box_right1_left_sp3">万元</span>
                    <span class="top_box_right1_left_sp4">|</span>
                  </div>
                  <div class="top_box_right1_right">
                    <p>
                      <span>新车价：</span>
                      <span>{{xrdata.guidePrice}}万元</span>
                      <span>
                        （含
                        <span>{{(xrdata.guidePrice)*0.074074*10000 | numFilter1}}</span> 元购置税）
                      </span>
                      <span class="fontred">
                        为您节省
                        <span>{{ xrdata.guidePrice-xrdata.f_PreSalePrice/10000 |numFilter}}</span>万元
                      </span>
                    </p>
                  </div>
                </div>
                <div class="clear"></div>
                <div class="top_box_right2">
                  <p>车纬空间融资方案</p>
                  <div>
                    <ul>
                      <li>
                        <span class="top_box_right2_span1">首付10%，每月</span>
                        <span
                          class="top_box_right2_span1"
                        >{{((xrdata.f_PreSalePrice * 0.9 * 1.035)) / 36|numFilter1}}</span>元起
                        <span class="payments1_hover payments_span1 top_box_right2_span1">
                          <button class="shtj">审核条件</button>
                          <div class="carinfo_payments carinfo_paymentsbox1">
                            <div class="carinfo_payments_top"></div>
                            <div class="carinfo_payments_main">
                              <div class="carinfo_payments1">
                                <p>审核条件</p>
                                <p>首付10%准入标准</p>
                              </div>
                              <div class="carinfo_payments2">
                                <ul>
                                  <li>
                                    <p>1、芝麻分进件：700分（含）以上</p>
                                    <p>提供资料：身份证、驾驶证（适用于30万含以下车型）；</p>
                                  </li>
                                  <li>
                                    <p>2、房贷进件：征信良好，房贷月供金额高于10000元（含）</p>
                                    <p>提供资料：身份证、驾驶证、房产证或房贷合同（适用于50万含以下车型）；</p>
                                  </li>
                                  <li>
                                    <p>3、优良职业进件</p>
                                    <p>提供资料：身份证、驾驶证、相关工作收入证明（适用于50万含以下车型）；</p>
                                  </li>
                                  <li>
                                    <p>4、芝麻分700分（含）以上客户欲购置30万以上车型，需提供常规资料＊。</p>
                                  </li>
                                </ul>
                              </div>
                              <div class="carinfo_payments3">
                                <p>PS：常规资料按客户类型分类</p>
                                <p>优良职业：身份证、驾驶证、相关工作收入证明</p>
                                <p>标准薪：身份证、驾驶证、代发工资银行流水</p>
                                <p>自雇人士：夫妻双方身份证、结婚证、居住证明（房产证）、营业执照、营业流水（个人或公司）</p>
                                <p>自由职业：夫妻双方身份证、结婚证、居住证明（房产证）、收入来源证明文件、个人流水</p>
                              </div>
                              <div class="carinfo_payments4">
                                <input type="text" placeholder="请输入手机号码">
                                <button>立即申请</button>
                              </div>
                            </div>
                          </div>
                        </span>
                      </li>
                      <li>
                        <span class="top_box_right2_span1">首付20%，每月</span>
                        <span
                          class="top_box_right2_span1"
                        >{{((xrdata.f_PreSalePrice * 0.8 * 1.065)) / 36|numFilter1}}</span>元起
                        <span class="payments1_hover payments_span2 top_box_right2_span1">
                          <button class="shtj">审核条件</button>
                          <div class="carinfo_payments carinfo_paymentsbox2">
                            <div class="carinfo_payments_top"></div>
                            <div class="carinfo_payments_main">
                              <div class="carinfo_payments1">
                                <p>审核条件</p>
                                <p>首付20%准入标准</p>
                              </div>
                              <div class="carinfo_payments2">
                                <ul>
                                  <li>
                                    <p>1、芝麻分进件：600分（含）以上</p>
                                    <p>提供资料：常规资料＊</p>
                                  </li>
                                  <li>
                                    <p>2、房贷进件：征信良好，房贷月供金额高于5000元（含）</p>
                                    <p>提供资料：身份证、驾驶证、房产证或房贷合同（适用于50万含以下车型）</p>
                                  </li>
                                </ul>
                              </div>
                              <div class="carinfo_payments3">
                                <p>PS：常规资料按客户类型分类</p>
                                <p>优良职业：身份证、驾驶证、相关工作收入证明</p>
                                <p>标准薪：身份证、驾驶证、代发工资银行流水</p>
                                <p>自雇人士：夫妻双方身份证、结婚证、居住证明（房产证）、营业执照、营业流水（个人或公司）</p>
                                <p>自由职业：夫妻双方身份证、结婚证、居住证明（房产证）、收入来源证明文件、个人流水</p>
                              </div>
                              <div class="carinfo_payments4">
                                <input type="text" placeholder="请输入手机号码">
                                <button>立即申请</button>
                              </div>
                            </div>
                          </div>
                        </span>
                      </li>
                      <li>
                        <span class="top_box_right2_span1">首付30%，每月</span>
                        <span
                          class="top_box_right2_span1"
                        >{{((xrdata.f_PreSalePrice * 0.7 * 1.105)) / 36|numFilter1}}</span>元起
                        <span class="payments1_hover payments_span3 top_box_right2_span1">
                          <button class="shtj">审核条件</button>
                          <div class="carinfo_payments carinfo_paymentsbox3">
                            <div class="carinfo_payments_top"></div>
                            <div class="carinfo_payments_main">
                              <div class="carinfo_payments1">
                                <p>审核条件</p>
                                <p>首付30%准入标准</p>
                              </div>
                              <div class="carinfo_payments2">
                                <ul>
                                  <li>
                                    <p></p>
                                    <p>无芝麻分限制，提供常规资料＊</p>
                                  </li>
                                </ul>
                              </div>
                              <div class="carinfo_payments3">
                                <p>PS：常规资料按客户类型分类</p>
                                <p>优良职业：身份证、驾驶证、相关工作收入证明</p>
                                <p>标准薪：身份证、驾驶证、代发工资银行流水</p>
                                <p>自雇人士：夫妻双方身份证、结婚证、居住证明（房产证）、营业执照、营业流水（个人或公司）</p>
                                <p>自由职业：夫妻双方身份证、结婚证、居住证明（房产证）、收入来源证明文件、个人流水</p>
                              </div>
                              <div class="carinfo_payments4">
                                <input type="text" placeholder="请输入手机号码">
                                <button>立即申请</button>
                              </div>
                            </div>
                          </div>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="clear"></div>
                <div class="top_box_right3">
                  <ul>
                    <li>
                      <p>上牌时间</p>
                      <p>{{xrdata.f_PlateFirstDate|datefilters}}</p>
                    </li>
                    <li>
                      <p>行驶公里</p>
                      <p>{{xrdata.f_KM/10000}}万公里</p>
                    </li>
                    <li>
                      <p>排量</p>
                      <p>{{xrdata.displacement}}</p>
                    </li>
                    <li>
                      <p>排放标准</p>
                      <p>{{xrdata.carBasicInfo.f_EmissionaStandards}}</p>
                    </li>
                    <li>
                      <p>牌照属地</p>
                      <p>{{xrdata.f_Plate}}</p>
                    </li>
                  </ul>
                </div>
                <div class="clear"></div>
                <div class="top_box_right4">
                  <span>
                    <img class="top_box_right4_pic" src="@/assets/image/tel_pic.png">
                  </span>
                  <span>021-69776066</span>
                  <span class="top_box_right4_pl2">|</span>
                  <span v-if="this.userCollection==='false'">
                    <img class="top_box_right4_pic" src="@/assets/image/xin_black.png">
                    <span>未收藏</span>
                  </span>
                  <span v-if="this.userCollection==='true'">
                    <img class="top_box_right4_pic" src="@/assets/image/xin_red.png">
                    <span>已收藏</span>
                  </span>

                  <!-- <span>|</span> -->
                  <span></span>
                  <!-- <span>分享到:</span> -->
                  <span></span>
                </div>
                <div class="clear"></div>
                <div class="top_box_right5">
                  <span>
                    <button class="ljqd" @click="iflogin()">立即抢定</button>
                  </span>
                  <span class="yysj_span">
                    <button class="yysj" @click="open">预约试驾</button>
                  </span>
                  <span>已有{{xrdata.carcollectionCon}}人关注此车</span>
                </div>
                <div class="clear"></div>
                <div class="top_box_right6">
                  <span>√ 7天可退换</span>
                  <span>√ 2个月质保</span>
                  <span>√ 个性化延保</span>
                  <span>√ 代办过户手续</span>
                  <span>√ 信用按揭</span>
                </div>
              </div>
            </div>
            <div class="clear"></div>
            <div class="car_info_card">
              <el-tabs v-model="activeName">
                <!-- 车辆所有信息开始 -->
                <el-tab-pane label="车辆信息" name="first">
                  <!-- 车辆基本信息开始 -->
                  <div class="carinfo_tab1">
                    <div class="carinfo_tab1_title">
                      <button>车辆基本信息</button>
                    </div>
                    <div class="carinfo_tab1_main">
                      <!-- 行 1-->
                      <div class="carinfo_tab1_main_li carinfo_tab1_main_li1">
                        <div class="carinfo_tab1_main_li_left">
                          <span>车辆类型</span>
                          <span>{{xrdata.carBasicInfo.f_CarTypeNmae}}</span>
                        </div>
                        <div class="carinfo_tab1_main_li_right">
                          <span>车辆类别</span>
                          <span>{{xrdata.carBasicInfo.f_CarClassName}}</span>
                        </div>
                        <div class="clear"></div>
                      </div>
                      <!-- 行1 -->
                      <!-- 行 2-->
                      <div class="carinfo_tab1_main_li carinfo_tab1_main_li2">
                        <div class="carinfo_tab1_main_li_left">
                          <span>车身颜色</span>

                          <span>{{xrdata.carBasicInfo.f_BodyColor}}</span>
                        </div>
                        <div class="carinfo_tab1_main_li_right">
                          <span>VIN码</span>

                          <span>{{xrdata.carBasicInfo.f_VIN}}</span>
                        </div>
                        <div class="clear"></div>
                      </div>
                      <!-- 行2 -->
                      <!-- 行 1-->
                      <div class="carinfo_tab1_main_li carinfo_tab1_main_li1">
                        <div class="carinfo_tab1_main_li_left">
                          <span>车辆品牌</span>
                          <span>{{xrdata.f_BrandName}}</span>
                        </div>
                        <div class="carinfo_tab1_main_li_right">
                          <span>排放标准</span>
                          <span>{{xrdata.carBasicInfo.f_EmissionaStandards}}</span>
                        </div>
                        <div class="clear"></div>
                      </div>
                      <!-- 行1 -->
                      <!-- 行 2-->
                      <div class="carinfo_tab1_main_li carinfo_tab1_main_li2">
                        <div class="carinfo_tab1_main_li_left">
                          <span>车系</span>
                          <span>{{xrdata.f_SeriesName}}</span>
                        </div>
                        <div class="carinfo_tab1_main_li_right">
                          <span>发动机</span>
                          <span>{{xrdata.carBasicInfo.f_EngineModel}}</span>
                        </div>
                        <div class="clear"></div>
                      </div>
                      <!-- 行2 -->
                      <!-- 行 1-->
                      <div class="carinfo_tab1_main_li carinfo_tab1_main_li1">
                        <div class="carinfo_tab1_main_li_left">
                          <span>车型</span>
                          <span>{{xrdata.f_StypeName}}</span>
                        </div>
                        <div class="carinfo_tab1_main_li_right">
                          <span>表显里程(万公里)</span>
                          <span>{{xrdata.f_KM/10000}}</span>
                        </div>
                        <div class="clear"></div>
                      </div>
                      <!-- 行1 -->
                      <!-- 行 2-->
                      <div class="carinfo_tab1_main_li carinfo_tab1_main_li2">
                        <div class="carinfo_tab1_main_li_left">
                          <span>使用类型</span>
                          <span>{{xrdata.carBasicInfo.f_UseType}}</span>
                        </div>
                        <div class="carinfo_tab1_main_li_right">
                          <span>发动机排量（L）</span>
                          <span>{{xrdata.displacement}}</span>
                        </div>
                        <div class="clear"></div>
                      </div>
                      <!-- 行2 -->
                      <!-- 行 1-->
                      <div class="carinfo_tab1_main_li carinfo_tab1_main_li1">
                        <div class="carinfo_tab1_main_li_left">
                          <span>燃料种类</span>
                          <span>{{xrdata.carBasicInfo.f_FuelType}}</span>
                        </div>

                        <div class="clear"></div>
                      </div>
                      <!-- 行1 -->
                    </div>
                  </div>
                  <!-- 车辆基本信息结束 -->

                  <!-- 车辆基本配置开始 -->
                  <div class="carinfo_tab1">
                    <div class="carinfo_tab1_title">
                      <button>车辆基本配置</button>
                    </div>
                    <div class="carinfo_tab1_main">
                      <!-- 行 1-->
                      <div class="carinfo_tab1_main_li carinfo_tab1_main_li1">
                        <div class="carinfo_tab1_main_li_left">
                          <span>车辆结构</span>
                          <span>{{xrdata.carBasicConfigure.vehicleStructure}}</span>
                        </div>
                        <div class="carinfo_tab1_main_li_right">
                          <span>助力类型</span>
                          <span>{{xrdata.carBasicConfigure.assistType}}</span>
                        </div>
                        <div class="clear"></div>
                      </div>
                      <!-- 行1 -->
                      <!-- 行 2-->
                      <div class="carinfo_tab1_main_li carinfo_tab1_main_li2">
                        <div class="carinfo_tab1_main_li_left">
                          <span>变速箱</span>
                          <span>{{xrdata.carBasicConfigure.transmissionInfo}}</span>
                        </div>
                        <div class="carinfo_tab1_main_li_right">
                          <span>气缸排列</span>
                          <span>{{xrdata.carBasicConfigure.cylinderArrange}}</span>
                        </div>
                        <div class="clear"></div>
                      </div>
                      <!-- 行2 -->
                      <!-- 行 1-->
                      <div class="carinfo_tab1_main_li carinfo_tab1_main_li1">
                        <div class="carinfo_tab1_main_li_left">
                          <span>档位数</span>
                          <span>{{xrdata.carBasicConfigure.transmissionGearNumber}}</span>
                        </div>
                        <div class="carinfo_tab1_main_li_right">
                          <span>气缸数</span>
                          <span>{{xrdata.carBasicConfigure.cylindersNumber}}</span>
                        </div>
                        <div class="clear"></div>
                      </div>
                      <!-- 行1 -->
                      <!-- 行 2-->
                      <div class="carinfo_tab1_main_li carinfo_tab1_main_li2">
                        <div class="carinfo_tab1_main_li_left">
                          <span>进气形式</span>
                          <span>{{xrdata.carBasicConfigure.airIntakeMode}}</span>
                        </div>
                        <div class="carinfo_tab1_main_li_right">
                          <span>前悬挂类型</span>
                          <span>{{xrdata.carBasicConfigure.frontSuspensionType}}</span>
                        </div>
                        <div class="clear"></div>
                      </div>
                      <!-- 行2 -->
                      <!-- 行 1-->
                      <div class="carinfo_tab1_main_li carinfo_tab1_main_li1">
                        <div class="carinfo_tab1_main_li_left">
                          <span>车体结构</span>
                          <span>{{xrdata.carBasicConfigure.bodyStructure}}</span>
                        </div>
                        <div class="carinfo_tab1_main_li_right">
                          <span>后悬挂类型</span>
                          <span>{{xrdata.carBasicConfigure.rearSuspensionType}}</span>
                        </div>
                        <div class="clear"></div>
                      </div>
                      <!-- 行1 -->
                      <!-- 行 2-->
                      <div class="carinfo_tab1_main_li carinfo_tab1_main_li2">
                        <div class="carinfo_tab1_main_li_left">
                          <span>驱动方式</span>
                          <span>{{xrdata.carBasicConfigure.drivingMode}}</span>
                        </div>
                        <div class="carinfo_tab1_main_li_right">
                          <span>内饰颜色</span>
                          <span>{{xrdata.carBasicConfigure.interiorColor}}</span>
                        </div>
                        <div class="clear"></div>
                      </div>
                      <!-- 行2 -->
                    </div>
                  </div>
                  <!-- 车辆基本配置结束 -->

                  <!-- 车辆图片开始 -->
                  <div class="carinfo_tab1">
                    <div class="carinfo_tab1_title">
                      <button>车辆图片展示</button>
                    </div>
                    <div class="carinfo_tab1_main">
                      <ul class="carinfo_tab1_main_img_ul">
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_LeftFront45Degree_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_CarKey_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_CarSide_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_CentralControl_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_Copilot_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_Dashboard_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_EngineCompartment_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_FamousBrand_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_FrontHubTire_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_FrontRow_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_LeftFront45Degree_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_LiftingKey_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_RightBack45Degree_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_RightFront45_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_SpareTire_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_Trunk_Pic"
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- 车辆图片结束 -->
                </el-tab-pane>
                <!-- 车辆信息所有结束 -->
                <!-- 车辆图片开始 -->
                <el-tab-pane label="车辆图片" name="second">
                  <!-- 车辆图片开始 -->
                  <div class="carinfo_tab1">
                    <div class="carinfo_tab1_title">
                      <button>车辆图片展示</button>
                    </div>
                    <div class="carinfo_tab1_main">
                      <ul class="carinfo_tab1_main_img_ul">
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_LeftFront45Degree_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_CarKey_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_CarSide_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_CentralControl_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_Copilot_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_Dashboard_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_EngineCompartment_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_FamousBrand_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_FrontHubTire_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_FrontRow_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_LeftFront45Degree_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_LiftingKey_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_RightBack45Degree_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_RightFront45_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_SpareTire_Pic"
                          >
                        </li>
                        <li>
                          <img
                            :src="'http://market.api.yuncaiit.com/'+xrdata.carimglist.f_Trunk_Pic"
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- 车辆图片结束 -->
                </el-tab-pane>
                <!-- 车辆图片结束 -->
              </el-tabs>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="clear"></div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 9</div>
        <div class="swiper-slide">Slide 10</div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Arrows -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>

    <home-fotter></home-fotter>
  </div>
</template>
        


<script>
import Swiper from "swiper";

import HomeTop from "@/pages/home/components/HomeTop";
import HomeFotter from "@/pages/home/components/HomeFotter";
import { Carinfo } from "@/api/buyCar";
export default {
  data() {
    return {
      activeName: "first",
      cookieuserId: this.$cookieStore.getCookie("username"), //userid
      xrdata: "",
      CarId: this.$route.params.id,
      userCollection: this.$route.params.userCollection
    };
  },
  mounted: function() {
    this.httpGet();
  },
  created() {
    this.Swipercreated();
  },
  methods: {
    Swipercreated() {
      var swiper = new Swiper(".swiper-container", {
        // slidesPerView: 3,
        // spaceBetween: 30,
        // slidesPerGroup: 3,
        loop: true,
        // loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    },
    // 弹框
    open() {
      this.$prompt("请输入电话号码", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^1[34578]\d{9}$/,
        inputErrorMessage: "电话格式不正确"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "预约成功！您的号码是: " + value
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    httpGet() {
      Carinfo("/api/CarApiService/GetCarInfoViews?CarId=" + this.CarId).then(
        response => {
          console.log(response.data.result);
          this.xrdata = response.data.result;
        }
      );
    },
    //立即抢订
    //click if logined
    iflogin(id) {
      //this.$router.push({ path: "ljqd", query: { id: 221 } });
      if (this.cookieuserId === "" || this.cookieuserId === undefined) {
        this.$router.push({ name: "home" });
      } else {
        const routeData1 = this.$router.resolve({
          name: "ljqd",
          params: { id: this.CarId }
        });
        window.open(routeData1.href, "_blank");
      }
    }
    // 保留小数点后两位
  },
  //过滤函数
  filters: {
    numFilter(value) {
      // 截取当前数据到小数点后两位

      let realVal = parseFloat(value).toFixed(2);

      return realVal;
    },
    numFilter1(value) {
      // 截取当前数据到小数点后0位

      let realVal = parseFloat(value).toFixed(0);

      return realVal;
    },
    datefilters(val) {
      return val.substring(0, 4) + "年" + val.substring(5, 7) + "月";
    }
  },
  components: {
    HomeTop,
    HomeFotter
  }
};
</script>
<style scoped>
@import "../../../node_modules/swiper/dist/css/swiper.css";
.swiper-container {
  width: 100%;
  height: 1rem;
  background: red;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.clear {
  clear: both;
}
.carinfo_testing_box {
  min-width: 1200px;
  width: 96%;
  margin: 0 auto;
}
.car_info_nav {
  padding: 0.36rem 0 0.5rem 0;
}
.car_info_title1 {
  padding: 0 0 0.39rem 0;
  color: red;
  font-weight: bold;
  font-size: 0.4rem;
}
.top_box {
  width: 100%;
  padding: 0.2rem 0.2rem 1rem 0.2rem;
  background: white;
  display: flex;
}
.top_box_left {
  /* display: inline-block; */
  float: left;
}
.top_box_left_top {
  width: 100%;
}
.top_box_left_top img {
  width: 13rem;
  height: 8.54rem;
}
.top_box_left_bottom {
  position: relative;
  top: 0.14rem;
}

.li_main {
  width: 88%;
  height: 1.4rem;
  float: left;
  overflow: hidden;
}
.li_main ul {
  width: 12.88rem;
  overflow: hidden;
}
.li_main ul li {
  width: 1.98rem;
  height: 1.3rem;
  float: left;
  overflow: hidden;
}
.li_main ul li img {
  width: 100%;
}
.li_main ul li:not(:first-child) {
  margin-left: 0.15rem;
}
.li1 {
  float: left;
  width: 6%;
  height: 1.4rem;
  line-height: 1.4rem;
  text-align: center;
  font-size: 0.35rem;
  cursor: pointer;
}
.li2 {
  float: left;
  width: 6%;
  height: 1.4rem;
  text-align: center;
  font-size: 0.35rem;
  line-height: 1.4rem;
  cursor: pointer;
}

.top_box_right {
  float: left;
  padding: 0.2rem 0.2rem 0.2rem 0.5rem;
}
.top_box_right1 {
  margin-top: 0.5rem;
  padding-top: 0.6rem 0 0.6rem 0;
}
.top_box_right1 .top_box_right1_left {
  float: left;
  padding-right: 0.2rem;
  width: 40%;
  font-size: 0.25rem;
  color: #807e7e;
  padding-top: 0.2rem;
}

.top_box_right1_left_sp2 {
  color: red;
  font-size: 0.5rem;
  font-weight: bold;
}
.top_box_right1_left_sp4 {
  padding: 0 0 0 0.2rem;
}
.top_box_right1 .top_box_right1_right {
  width: 45%;
  float: left;
  color: #807e7e;
  font-size: 0.25rem;
  line-height: 0.5rem;
}
.fontred {
  color: red;
}
.top_box_right2 {
  margin-top: 0.3rem;
  border-top: solid 1px #cccccc;
  /* font-size: 0.25rem; */
}
.top_box_right2 p {
  line-height: 1rem;
}
.top_box_right2 ul li {
  color: red;
  margin-top: 0.2rem;
}

.top_box_right2 ul li button {
  border: solid 1px #009899;
  padding: 0.02rem 0.1rem 0.02rem 0.1rem;
  margin-left: 0.5rem;
  border-radius: 5px;
  color: #009899;
  font-size: 0.01rem;
  position: relative;
  top: -0.06rem;
}
.top_box_right3 {
  display: flex;
  margin-top: 0.32rem;
  padding: 0.22rem 0 0.22rem 0;
  background: #eeeeee;
  font-size: 0.25rem;
}
.top_box_right3 ul li {
  display: inline-block;
  padding: 0rem 0.22rem 0 0.22rem;
}
.top_box_right3 ul li:not(:last-child) {
  border-right: solid 1px #cccccc;
}
.top_box_right3 ul li p {
  margin: 0.3rem 0 0.3rem 0;
}
.top_box_right3 ul li p:last-child {
  color: #009899;
}
.top_box_right4 {
  padding: 0.5rem 0 0.5rem 0;
  font-size: 0.27rem;
}
.top_box_right4_pl2 {
  padding: 0 0.2rem 0 0.2rem;
}
.top_box_right4_pic {
  position: relative;
  top: -0.03rem;
}
.top_box_right5 button {
  padding: 0.15rem 0.3rem 0.15rem 0.3rem;
  border-radius: 5px;
}
.top_box_right5 .ljqd {
  background: #009899;
  color: white;
}
.top_box_right5 .yysj {
  border: #009899 solid 1px;
  color: #009899;
}
.yysj_span {
  position: relative;
}

.top_box_right5 span:last-child {
  margin-left: 5%;
  color: #009899;
}
.top_box_right6 {
  margin-top: 0.4rem;
  font-size: 0.2rem;
}
.top_box_right6 span:not(:first-child) {
  margin-left: 0.3rem;
}
.car_info_card {
  width: 100%;
  padding: 0.2rem 0.2rem 1rem 0.2rem;
  margin-top: 0.8rem;
  background: white;
}
.tabPosition_title {
  padding: 0.5rem;
  font-weight: bold;
}
.tabPosition_table {
  padding-left: 0.5rem;
}
.img_show_box {
  margin-top: 0.6rem;
}
.img_show_left {
  float: left;
  width: 47.5%;
  height: 8.54rem;
}
.img_show_left img {
  width: 100%;
}
.img_show_right {
  float: left;
  width: 47.5%;
  height: 8.54rem;
  margin-left: 0.6rem;
}
.img_show_right img {
  width: 100%;
}
.table_style {
  width: 95%;
}
.table_style .el-col {
  padding: 0.3rem 0 0.3rem 0.5rem;
  border: solid 1px #c8c7c7;
  font-size: 0.265rem;
}

.black {
  color: #171717;
}
.hui {
  color: #a7a6a6;
}
/* 审核条件弹出框开始 */
.payments1_hover {
  position: relative;
  width: 100%;
}
.payments_span1:hover .carinfo_paymentsbox1 {
  display: block;
}
.payments_span2:hover .carinfo_paymentsbox2 {
  display: block;
  padding: 0;
  margin: 0;
}
.payments_span3:hover .carinfo_paymentsbox3 {
  display: block;
  padding: 0;
  margin: 0;
}
.carinfo_payments {
  position: absolute;
  z-index: 999;
  width: 10.8rem;
  display: none;
  padding: 0;
  margin: -0.08rem;
}
.carinfo_payments_top {
  height: 0rem;
}
.carinfo_payments_main {
  background: #009899;
  padding: 0 0.3rem 0 0.3rem;
}
.carinfo_payments_main p {
  line-height: 0.35rem;
  color: #ffffff;
}
.carinfo_payments1 {
  padding: 0.3rem 0 0.3rem 0;
  border-bottom: 1px #eeeeee solid;
}
.carinfo_payments1 p:last-child {
  font-size: 0.4rem;
  padding: 0.3rem 0 0rem 0;
  color: #58f0f1;
}
.carinfo_payments2 {
  padding: 0rem 0 0.3rem 0;
  border-bottom: 1px #eeeeee solid;
}
.carinfo_payments2 p:first-child {
  padding: 0.3rem 0 0.3rem 0;
  font-size: 0.33rem;
  color: #58f0f1;
}
.carinfo_payments3 {
  padding: 0.5rem 0 0.3rem 0;
  border-bottom: 1px #eeeeee solid;
}
.carinfo_payments3 p {
  padding: 0.1rem 0 0.1rem 0;
}
.carinfo_payments4 {
  padding: 0.5rem 0 0.2rem 0;
}
.carinfo_payments4 input {
  width: 4rem;
  height: 0.6rem;
  padding: 0 0.2rem 0 0.2rem;
}
.carinfo_payments4 button {
  padding: 0 0.2rem 0 0.2rem;
  height: 0.6rem;
  position: relative;
  top: 0rem !important;
  background: #ffffff;
}
/* 审核条件弹出框结束 */
.testing_box_top_box {
  background: #ffffff;
  padding: 0 0 0.2rem 0;
}

/* 新增的列表开始 */
.carinfo_tab1_main {
  width: 100%;
  padding: 0.5rem 0 0.5rem 0;
  font-size: 0.28rem;
}
.carinfo_tab1_title button {
  margin-top: 0.5rem;
  background: #f30;
  padding: 0.15rem 0.5rem 0.15rem 0.5rem;
  color: #ffffff;
  border-radius: 5px;
}
.carinfo_tab1_main_li1 {
  padding: 0.3rem 0 0.3rem 0;
  background: #f1f1f1;
}

.carinfo_tab1_main_li2 {
  padding: 0.5rem 0 0.5rem 0;
}
.carinfo_tab1_main_li_left {
  float: left;
  width: 50%;
  box-sizing: border-box;
}
.carinfo_tab1_main_li_left span {
  display: block;
  float: left;
}
.carinfo_tab1_main_li_left span:first-child {
  width: 30%;
  padding-left: 0.5rem;
  box-sizing: border-box;
}
.carinfo_tab1_main_li_left span:last-child {
  width: 70%;
}
.carinfo_tab1_main_li_right {
  float: left;
  width: 50%;
  box-sizing: border-box;
}
.carinfo_tab1_main_li_right span {
  display: block;
  float: left;
}
.carinfo_tab1_main_li_right span:first-child {
  width: 30%;
  padding-left: 0.5rem;
  box-sizing: border-box;
}
.carinfo_tab1_main_li_right span:last-child {
  width: 70%;
}
.carinfo_tab1_main_img_ul li {
  width: 50%;
  float: left;
  padding: 0.2rem 0.5rem 0.5rem 0;
  box-sizing: border-box;
}
.carinfo_tab1_main_img_ul li img {
  width: 100%;
}
/* 新增的列表结束 */
</style>
<style>
/* 弹框样式 */
.el-message-box {
  color: white;
}
.el-button + .el-button {
  background: #009899;
}
</style>

