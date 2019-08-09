<template>
  <div>
    <van-row type="flex" justify="end" align="center" class="add_bank_card">
      <router-link to="/bankcard/add">
        <img :src="cardAdd" class="add_bank_card_icon"/><span>添加银行卡</span>
      </router-link>
    </van-row>

    <div class="bank_content">
      <div class="card" v-if="bankCardList.length > 0">
        <div class="card_number">
          <div class="bank_title">当前已绑银行卡账号：</div>
          <div class="bank_id">{{bankCardList[bankCardIndex].cardNumber}}</div>
        </div>
          <router-link to="/bankcard/delete">
            <span class="delete_card">解绑卡片</span>
          </router-link>
      </div>

      <van-row class="text_align_center change_card">
        <div @click="changeBankCardHandle">
          <img :src="changeCard" class="change_card_img"><span>切换下一张</span>
        </div>
      </van-row>
    </div>
    <div class="divide"></div>

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
