<template>
  <div>
    <div class="text_align_center">支付金额6000元</div>
    <div class="title text_align_center">选择支付方式</div>

    <div class="pay_choose_content">
      <van-radio-group v-model="selectedPayId">
        <van-cell-group>
          <van-cell clickable v-for="(item, key) in payOptionList" :key="key" @click="selectedPayId = item.id">
            <template slot="title">
              <img :src="item.icon" class="pay_icon"/>
              {{item.name}}
              <van-tag type="success" v-if="key === 0" class="recommend_icon">推荐</van-tag>
            </template>
            <van-radio slot="right-icon" :name="item.id" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>

    <div class="text_align_center submit_btn btn">
      <van-button type="primary" @click="submitHandle">确认支付</van-button>
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
