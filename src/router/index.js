import Vue from 'vue'
import Router from 'vue-router'
import payChoose from '../views/payChoose/index.vue'
import payConfirm from '../views/payConfirm/index.vue'
import payResult from '../views/payResult/index.vue'
import unionPay from '../views/unionPay/index.vue'
import bankCard from '../views/unionPay/bankCard/index.vue'
// import deleteBankCard from '../views/unionPay/deleteBankCard/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      component: () => import('@/views/404')
    },
    {
      path: '',
      name: 'payChoose',
      component: payChoose,
      meta: {
        title: '支付学费'
      }
    },
    {
      path: '/payConfirm',
      name: 'payConfirm',
      component: payConfirm,
      meta: {
        title: '支付确认'
      }
    },
    {
      path: '/payResult',
      name: 'payResult',
      component: payResult,
      meta: {
        title: '支付成功'
      }
    },
    {
      path: '/unionPay',
      component: unionPay,
      meta: {
        title: '银行卡快捷支付'
      }
    },
    {
      path: '/bankCard/:type',
      component: bankCard,
      meta: {
        title: '添加银行卡'
      }
    }
  ]
})

