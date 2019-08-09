<template>
  <div>
    <div class="step_box">
      <img :src="stepBanner" class="content_img">
    </div>
    <div class="pay_choose" v-bind:style="{backgroundImage:'url(' + payBoxImg + ')'}">
      <div class="pay_choose_content">
        <div class="pay_title">选择支付方式</div>
        <van-radio-group v-model="selectedPayId">
          <van-cell-group>
            <van-cell clickable @click="selectedPayId = payOptionList[0].id">
              <template slot="title">
                <img :src="payOptionList[0].icon" class="vx_icon"/>
                <div class="pay_style">{{payOptionList[0].name}}</div>
                <div><span class="recommend_icon">推荐</span></div>
              </template>
              <van-radio slot="right-icon" :name="payOptionList[0].id" icon-size="0.75rem" checked-color="#ff5e3d"/>
            </van-cell>
            <van-cell clickable @click="selectedPayId = payOptionList[1].id">
              <template slot="title">
                <img :src="payOptionList[1].icon" class="bank_icon"/>
                <span class="pay_style">{{payOptionList[1].name}}</span>
              </template>
              <van-radio slot="right-icon" :name="payOptionList[1].id" icon-size="0.75rem" checked-color="#ff5e3d"/>
            </van-cell>
            <van-cell clickable @click="selectedPayId = payOptionList[2].id">
              <template slot="title">
                <img :src="payOptionList[2].icon" class="ali_icon"/>
                <span class="pay_style">{{payOptionList[2].name}}</span>
              </template>
              <van-radio slot="right-icon" :name="payOptionList[2].id" icon-size="0.75rem" checked-color="#ff5e3d"/>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
    </div>
    <div class="text_align_center submit_btn">
      <van-button class="confirmBtn" @click="submitHandle">确认支付</van-button>
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
<style>
  .pay_choose_content .van-cell {
    padding: 24px 27px 17px 19px;
  }
  .pay_choose_content .van-cell__title, .van-cell__value {
    align-items: center;
    display: flex;
  }
</style>
