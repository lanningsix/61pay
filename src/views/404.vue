<template>
  <div class="wscn-http404-container">
    <div class="wscn-http404">
      <img class="pic-404__parent" :src="img_404" alt="404" />
    </div>
  </div>
</template>

<script>
import img_404 from '@/assets/404_images/404.png'
import img_404_cloud from '@/assets/404_images/404_cloud.png'

export default {
  name: 'page404',
  data() {
    return {
      img_404,
      img_404_cloud
    }
  },
  computed: {
    message() {
      return '网管说这个页面你不能进......'
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.pic-404__parent {
  width: 100%;
}
</style>
