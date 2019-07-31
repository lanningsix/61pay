export default {
  name: '',
  components: {},
  data() {
    return {
      payOptionList: [{
        name: '微信支付',
        icon: require('@/assets/wxPay.png'),
        id: 1
      }, {
        name: '银行卡快捷支付',
        icon: require('@/assets/unionPay.png'),
        id: 2
      }, {
        name: '支付宝支付',
        icon: require('@/assets/aliPay.png'),
        id: 3
      }],
      selectedPayId: 1
    }
  },
  mounted() { },
  methods: {
    // 提交处理函数
    submitHandle() {
      //  判断是否微信浏览器
      function isWeiXin() {
        // window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
        var ua = window.navigator.userAgent.toLowerCase()
        // 通过正则表达式匹配ua中是否含有MicroMessenger字符串
        if (ua.match(/MicroMessenger/i) === 'micromessenger') {
          return true
        } else {
          return false
        }
      }

      switch (this.selectedPayId) {
        case 1:
          if (!isWeiXin()) {
            // TODO 微信支付接口流程
            this.$toast.success({
              message: '支付成功'
            })
            this.$router.push({ path: '/payResult' })
          } else {
            this.$toast.fail({
              className: 'fail_toast',
              message: '请在微信内打开此链接才可以进行微信支付哦！'
            })
          }
          break
        case 2:
          this.$router.push({ path: '/unionPay' })
          break
        case 3:
          break
        default:
          break
      }
    }
  }
}
