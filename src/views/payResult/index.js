export default {
  name: '',
  components: {},
  data() {
    return {
      countDown: 5,
      amount: 6000
    }
  },
  mounted() {
    const countDownInterval = setInterval(() => {
      this.countDown--
      if (this.countDown === 0) {
        clearInterval(countDownInterval)
      }
    }, 1000)
  },
  methods: {
  }
}
