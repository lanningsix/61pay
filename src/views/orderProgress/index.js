import signUp from './signUp/index.vue'
import orderInfo from './orderInfo/index.vue'
export default {
  name: '',
  components: {
    signUp,
    orderInfo
  },
  data() {
    return {
      stepBanner1: require('@/assets/step1.png'),
      stepBanner2: require('@/assets/step2.png'),
      activeName: 'orderInfo'
    }
  },
  mounted() {},
  methods: {}
}
