export default {
  name: '',
  components: {},
  data() {
    return {
      form: {
        cardNumber: '',
        cardNumberMsg: '',
        name: '',
        nameMsg: '',
        IDcard: '',
        IDcardMsg: '',
        tel: '',
        telMsg: '',
        sms: ''
      }
    }
  },
  mounted() { },
  methods: {
    validateHandle(type) {
      const form = this.form
      switch (type) {
        case 'cardNumber':
          if (!/^([1-9]{1})(\d{14}|\d{18})$/g.test(form.cardNumber)) {
            this.form.cardNumberMsg = '请输入正确的银行卡号'
          } else {
            this.form.cardNumberMsg = ''
          }
          break
        case 'name':
          if (!/^[\u4e00-\u9fa5]{0,}$/g.test(form.name)) {
            this.form.nameMsg = '请输入正确的姓名'
          } else {
            this.form.nameMsg = ''
          }
          break
        case 'IDcard':
          if (!/^\d{15}|\d{18}$/g.test(form.IDcard)) {
            this.form.IDcardMsg = '请输入正确的身份证号码'
          } else {
            this.form.IDcardMsg = ''
          }
          break
        case 'tel':
          if (!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g.test(form.tel)) {
            this.form.telMsg = '请输入正确的电话号码'
          } else {
            this.form.telMsg = ''
          }
          break
        default:
          break
      }
    },
    submitHandle() {
      this.$router.push('/unionPay')
    },
    sendMsgHandle() {
    }
  }
}
