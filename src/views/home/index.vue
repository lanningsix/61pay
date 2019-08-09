<template>
  <div class="home">
    <div class="header" :style="{'background-image': 'url('+ headerImage +')'}">
      <div class="course_hours">
        <div class="left_line"></div>
        <div class="right_line"></div>
        <div class="content">48课时</div>
      </div>
    </div>
    <div class="course_info">
      <div class="price">
        <div class="current_price">
          <span class="price_icon">￥</span>
          <span class="price_content">5750</span>
          <span class="price_offer">已减￥1500</span>
        </div>
        <div class="original_price">
          原价
          <span class="price_content">￥5750</span>
        </div>
      </div>
      <div class="package_info">画啦啦VIP课程</div>
      <div class="package_info">当前套餐：48课时（配画具包）</div>

    </div>

    <div class="submit_btn">立即报名</div>
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
