<template>
  <div>
    <van-row class="text_align_center tip">
      您当前未绑定银行卡，无法快捷支付。
      <br />请先填写以下信息，进行绑定操作
    </van-row>
    <van-divider :style="{borderColor: '#1989fa', padding: '0 15px'}" />
    <van-cell-group class="form">
      <van-field
        v-model="form.cardNumber"
        label="银行卡账号："
        placeholder="请输入银行卡账号"
        :error-message="form.cardNumberMsg"
        @blur="validateHandle('cardNumber')"
      />
      <van-field
        v-model="form.name"
        label="持卡人姓名："
        placeholder="请输入持卡人姓名"
        :error-message="form.nameMsg"
        @blur="validateHandle('name')"
      />
      <van-field
        v-model="form.IDcard"
        label="身份证号："
        placeholder="请输入身份证号"
        :error-message="form.IDcardMsg"
        @blur="validateHandle('IDcard')"
      />
      <van-field
        v-model="form.tel"
        label="手机号码："
        placeholder="请输入手机号码"
        :error-message="form.telMsg"
        @blur="validateHandle('tel')"
      />
      <van-field v-model="form.sms" center clearable label="验证码：" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary" @click="sendMsgHandle">发送验证码</van-button>
      </van-field>
    </van-cell-group>

    <van-row class="text_align_center submit_btn btn">
      <van-button type="primary" @click="submitHandle">确认提交</van-button>
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
