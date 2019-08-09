export default {
  name: '',
  components: {},
  data() {
    return {
      phoneIcon: require('@/assets/orderProgress/signUp/phone.png'),
      pwdIcon: require('@/assets/orderProgress/signUp/pwd.png'),
      openEyeIcon: require('@/assets/orderProgress/signUp/openEye.png'),
      closeEyeIcon: require('@/assets/orderProgress/signUp/closeEye.png'),
      smsIcon: require('@/assets/orderProgress/signUp/smsIcon.png'),
      activeName: 'password',
      pwdViewStatus: false,
      smsSendStatus: false,
      smsCountDown: 0,
      smsCountDownInterval: '',
      form: {
        phone: '',
        pwd: '',
        sms: ''
      }
    }
  },
  mounted() {},
  methods: {
    sendSmsBtnClickHandle() {
      if (!this.smsSendStatus) {
        this.smsCountDownInterval = setInterval(() => {
          this.smsCountDown += 1
          if (this.smsCountDown === 60) {
            clearInterval(this.smsCountDownInterval)
          }
        }, 1000)
        this.smsSendStatus = true
      }
    }
  }
}
