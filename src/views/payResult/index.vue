<template>
  <div>
    <div class="title">
      <span class="success_icon" :style="{'background-image': 'url('+ paySuccessIcon +')'}"></span>支付成功
    </div>
    <div class="jump_content text_align_center">
      <van-row class="count_down">
        <span>{{countDown}}</span>秒后
      </van-row>
      <van-row>即将跳转订单页面....</van-row>
      <van-row class="jump_btn btn">立即跳转</van-row>
    </div>

    <div class="pay_info_content">
      <van-row class="amount text_align_center">
        支付金额
        <span>￥{{amount}}</span>
      </van-row>
      <van-row class="order_number">
        <span class="label">订单号：</span>14775263652148
      </van-row>
      <van-row class="order_time">
        <span class="label">付款时间：</span>2019-10-31 16:53:23
      </van-row>
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
