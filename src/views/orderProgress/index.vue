<template>
  <div>
    <div class="step_box">
      <img :src="activeName === 'signUp' ? stepBanner1 : stepBanner2" class="content_img" />
    </div>
    <div>
      <template v-if="activeName === 'signUp'">
        <sign-up></sign-up>
      </template>
      <template v-else-if="activeName === 'orderInfo'">
        <order-info></order-info>
      </template>
    </div>
  </div>
</template>
<script>
import index from './index.js'
export default {
  ...index
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
