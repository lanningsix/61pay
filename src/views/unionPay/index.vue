<template>
  <div>
    <van-row type="flex" justify="end" align="center" class="add_bank_card">
      <router-link to="/bankcard/add">
        <van-icon name="add-o" class="add_bank_card_icon" />添加银行卡
      </router-link>
    </van-row>

    <div class="bank_content">
      <div class="card" v-if="bankCardList.length > 0">
        <div class="card_number">
          <img class="img-responsive" :src="cardImg" />
          <div class="txt0">
            <span>卡号：</span>
            <br />
            {{bankCardList[bankCardIndex].cardNumber}}
          </div>
        </div>
        <van-row class="bottom" type="flex" justify="space-between" align="center">
          <div class="serial_number">①</div>
          <router-link to="/bankcard/delete">
            <div class="delete_card">解绑卡片</div>
          </router-link>
        </van-row>
      </div>

      <van-row class="text_align_center change_card">
        <van-button type="primary" size="small" round @click="changeBankCardHandle">切换下一张</van-button>
      </van-row>
    </div>
    <van-divider :style="{borderColor: '#1989fa', padding: '0 15px'}" />

    <van-cell-group>
      <van-field v-model="amount" center readonly label="支付金额：">
      </van-field>
      <van-field
        v-model="phone"
        label="手机号："
        clearable
        placeholder="请输入手机号"
        :error-message="telMsg"
        @blur="validateTel"
      />
      <van-field v-model="sms" center clearable label="验证码：" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary" @click="sendMsgHandle">发送验证码</van-button>
      </van-field>
    </van-cell-group>

    <van-row class="text_align_center submit_btn btn">
      <van-button type="primary" @click="submitHandle">确认支付</van-button>
    </van-row>
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
