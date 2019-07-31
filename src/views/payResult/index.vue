<template>
  <div>
    <div class="title">
      <van-icon name="success" class="success_icon" />支付成功
    </div>
    <div class="jump_content text_align_center">
      <van-row class="count_down"><span>{{countDown}}</span>秒后</van-row>
      <van-row>即将跳转订单页面....</van-row>
      <van-row class="jump_btn btn">
        <van-button type="primary" class>立即跳转</van-button>
      </van-row>
    </div>
    <van-divider :style="{borderColor: '#1989fa', padding: '0 15px'}"/>

    <div class="pay_info_content">
      <van-row class="amount text_align_center">支付金额<span>￥{{amount}}</span></van-row>
      <van-row class="order_number">订单号：14775263652148</van-row>
      <van-row class="order_time">付款时间：2019-10-31 16:53:23</van-row>
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
