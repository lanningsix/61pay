<template>
  <div>
    <div class="title">
      <div>您的订单支付结果</div>
      <div>正在确认中...</div>
    </div>
    <div class="tooltip">请稍后刷新或重新进入页面</div>
    <div class="reload_btn">
      <span class="reload_icon" :style="{'background-image': 'url('+ reloadIcon +')'}"></span>
      点击刷新
    </div>

    <div class="pay_tip">
      <div>*由于第三方支付平台的订单信息确认</div>
      <div>有1-5分钟延时，请勿担心</div>
    </div>

    <div class="pay_info_content">
      <van-row class="amount text_align_center">
        支付金额
        <span>￥{{amount}}</span>
      </van-row>
      <van-row class="order_number">
        <span class="label">订单号：</span>14775263652148
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
