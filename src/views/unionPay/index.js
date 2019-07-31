
export default {
  name: '',
  components: {},
  data() {
    return {
      cardImg: require('@/assets/bank_img0.png'),
      bankCardIndex: 0,
      bankCardList: [{
        cardNumber: '6212261905001529568',
        cardImg: require('@/assets/bank_img0.png')
      }, {
        cardNumber: '1234567891011121345',
        cardImg: require('@/assets/bank_img0.png')
      }],
      phone: '',
      amount: '￥6666',
      sms: '',
      telMsg: ''
    }
  },
  mounted() {},
  methods: {
    // 切换银行卡
    changeBankCardHandle() {
      if (this.bankCardList.length === 0 || this.bankCardList.length === 1) {
        this.$toast('暂无其他银行卡，请添加银行卡后尝试')
        return false
      }
      if ((this.bankCardIndex + 1) === this.bankCardList.length) {
        this.bankCardIndex = 0
        return
      }
      this.bankCardIndex += 1
    },
    // 验证电话号码
    validateTel() {
      if (!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g.test(this.phone)) {
        this.telMsg = '请输入正确的电话号码'
      } else {
        this.telMsg = ''
      }
    },
    // 发送短信验证码函数
    sendMsgHandle() {
    },
    // 确认支付处理函数
    submitHandle() {
    }
  }
}
