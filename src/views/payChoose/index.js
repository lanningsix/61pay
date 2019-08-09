import { submit } from '@/api/payChoose'
import wx from 'weixin-jsapi'
export default {
  name: '',
  components: {},
  data() {
    return {
      payOptionList: [{
        name: '微信支付',
        icon: require('@/assets/vxIcon.png'),
        id: 1
      }, {
        name: '银行卡快捷支付',
        icon: require('@/assets/bankIcon.png'),
        id: 2
      }, {
        name: '支付宝支付',
        icon: require('@/assets/aliIcon.png'),
        id: 3
      }],
      stepBanner: require('@/assets/step1.png'),
      payBoxImg: require('@/assets/payBoxImg.png'),
      selectedPayId: 1,
      payInfo: {}
    }
  },
  mounted() {

  },
  methods: {
    click() { // 点击触发
      // API.getpay(这里是后端要你传的参数).then((data) => {
      //   var args = data
      //   wx.ready(function () {
      //     wx.chooseWXPay({
      //       timestamp: args.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
      //       nonceStr: args.nonceStr, // 支付签名随机串，不长于 32 位
      //       package: args.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
      //       signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
      //       paySign: args.paySign, // 支付签名
      //       success: function(res) {

      //       },
      //       cancel: function(res) {
      //         alert('已取消支付')
      //       },
      //       fail: function(res) {
      //         alert('购买失败，请重新创建订单')
      //       }
      //     })
      //   })
      // })
    },
    // 提交处理函数
    submitHandle() {
      //  判断是否微信浏览器
      function isWeiXin() {
        // window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
        var ua = window.navigator.userAgent.toLowerCase()
        // 通过正则表达式匹配ua中是否含有MicroMessenger字符串
        if (ua.indexOf('micromessenger') !== -1) {
          return true
        } else {
          return false
        }
      }

      switch (this.selectedPayId) {
        case 1:
          if (isWeiXin()) {
            submit({
              randomStr: '88b381gdwvlzrmwmio6kkpau50n92uqu',
              amount: 1,
              bizPayNo: 'orderid',
              payType: 'WECHAT-JS',
              orderNo: 'orderid',
              reqTimestamp: 1564042623779,
              tdUserIdentity: 'omsXu0mfXal11xMsU7E2x6q-7g0E',
              subject: 'ttt',
              appId: 'wx7a318b74b02725a7',
              sign: 'CA604763A1E8CC8B8694365124332F5D',
              notifyUrl: 'http%3A%2F%2Fpay-test.61info.cn%2Fwxpay%2Fpayed.json'
            }).then(res => {
              this.payInfo = res.value
              const data = JSON.parse(res.value.payInfo)
              console.log(data)
              wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: data.appId, // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.paySign, // 必填，签名，见附录1
                jsApiList: ['chooseWXPay']
              })
            })

            // this.$toast.success({
            //   message: '支付成功'
            // })
            // this.$router.push({ path: '/payResult' })
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
