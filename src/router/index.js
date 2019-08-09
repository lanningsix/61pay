import Vue from 'vue'
import Router from 'vue-router'
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
      path: '/home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: '确认个人信息'
      }
    },
    {
      path: '/orderProgress',
      name: 'orderProgress',
      component: () => import('@/views/orderProgress/index.vue'),
      children: [{
        path: 'signUp',
        name: 'signUp',
        component: () => import('@/views/orderProgress/signUp/index.vue'),
        meta: {
          title: '确认个人信息'
        }
      }]
    },
    {
      path: '/payChoose',
      name: 'payChoose',
      component: () => import('@/views/payChoose/index.vue'),
      meta: {
        title: '支付学费'
      }
    },
    {
      path: '/payConfirm',
      name: 'payConfirm',
      component: () => import('@/views/payConfirm/index.vue'),
      meta: {
        title: '支付确认'
      }
    },
    {
      path: '/payResult',
      name: 'payResult',
      component: () => import('@/views/payResult/index.vue'),
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

