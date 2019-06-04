import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Home from '@/pages/home/Home'
import buyCar from '@/pages/wantbuy/buyCar'
import buyCarinp from '@/pages/wantbuy/buyCarinp'
import saleCar from '@/pages/wantsale/saleCar'
import testing from '@/pages/testing/testing'
import financialService from '@/pages/financial/financialService'
import car_info from '@/pages/car_info/car_info'
import Servicetwo from '@/pages/ServiceGuarantee/Servicetwo'
import Servicethree from '@/pages/ServiceGuarantee/Servicethree'
import Serviceserve from '@/pages/ServiceGuarantee/Serviceserve'
import zsfw from '@/pages/ServiceGuarantee/zsfw'
import ykj from '@/pages/ServiceGuarantee/ykj'
import Servicewx from '@/pages/ServiceGuarantee/Servicewx'
import Servicegxh from '@/pages/ServiceGuarantee/Servicegxh'
import SupportBx from '@/pages/Support/SupportBx' //服务与支持
import aboutcompany from '@/pages/aboutUs/aboutcompany' //关于我们
import home from '@/pages/login/home'
import intercar from '@/pages/login/intercar'
import clearCar from '@/pages/login/clearCar'
import updata from '@/pages/login/updata'
import updata1 from '@/pages/login/updata1'
import updataOk from '@/pages/login/updataOk'
import Accreditation from '@/pages/Accreditation/Accreditation' //办证大厅
import activity from '@/pages/activity/activity' //活动详情
import ljqd from '@/pages/ljqd/ljqd' //立即抢订
import List from '@/pages/list/List'
Vue.use(Router)

Vue.use(ElementUI)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/buyCar',
      name: 'buyCar',
      component: buyCar
    }, {
      path: '/buyCarinp', //买车表单
      name: 'buyCarinp',
      component: buyCarinp
    },
    {
      path: '/saleCar',
      name: 'saleCar',
      component: saleCar
    }, {
      path: '/testing',
      name: 'testing',
      component: testing
    }, {
      path: '/financialService',
      name: 'financialService',
      component: financialService
    }, {
      path: '/car_info/:id/:userCollection',
      name: 'car_info',
      component: car_info,
      props: true
    }, {
      path: '/Servicetwo',
      name: 'Servicetwo',
      component: Servicetwo
    }, {
      path: '/Servicethree',
      name: 'Servicethree',
      component: Servicethree
    }, {
      path: '/Serviceserve',
      name: 'Serviceserve',
      component: Serviceserve
    }, {
      path: '/zsfw',
      name: 'zsfw',
      component: zsfw
    }, {
      path: '/ykj',
      name: 'ykj',
      component: ykj
    }, {
      path: '/Servicegxh',
      name: 'Servicegxh',
      component: Servicegxh
    }, {
      path: '/Servicewx', //Servicegxh
      name: 'Servicewx',
      component: Servicewx
    }, {
      path: '/SupportBx',
      name: 'SupportBx',
      component: SupportBx
    }, {
      path: '/aboutcompany',
      name: 'aboutcompany',
      component: aboutcompany
    }, {
      path: '/home',
      name: 'home',
      component: home
    }, {
      path: '/intercar',
      name: 'intercar',
      component: intercar
    }, {
      path: '/clearCar',
      name: 'clearCar',
      component: clearCar
    }, {
      path: '/updata',
      name: 'updata',
      component: updata
    }, {
      path: '/updata1',
      name: 'updata1',
      component: updata1
    }, {
      path: '/updataOk',
      name: 'updataOk',
      component: updataOk
    }, {
      path: '/Accreditation',
      name: 'Accreditation',
      component: Accreditation
    }, {
      path: '/activity',
      name: 'activity',
      component: activity
    }, {
      path: '/ljqd/:id',
      name: 'ljqd',
      component: ljqd,
      props: true
    }

  ]
})
