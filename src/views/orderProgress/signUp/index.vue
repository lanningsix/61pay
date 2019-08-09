<template>
  <div class="sign_up">
    <div class="title">画啦啦学员登陆</div>
    <div class="tab">
      <div :class="activeName === 'password' ? 'active' : ''" @click="activeName = 'password'">密码登陆</div>
      <span></span>
      <div :class="activeName === 'sms' ? 'active' : ''" @click="activeName = 'sms'">短信登陆</div>
    </div>
    <div class="content">
      <template v-if="activeName === 'password'">
        <div class="password">
          <div class="phone_input">
            <div :style="{'background-image': 'url('+ phoneIcon +')'}" class="left_icon phone_icon"></div>
            <input type="text" v-model="form.phone" placeholder="请输入您的手机号" />
          </div>
          <div class="pwd_input">
            <div :style="{'background-image': 'url('+ pwdIcon +')'}" class="left_icon pwd_icon"></div>
            <input
              :type="pwdViewStatus ? 'text' : 'password'"
              v-model="form.pwd"
              placeholder="请输入您的登陆密码"
            />
            <div
              :style="{'background-image': 'url('+ (pwdViewStatus ? openEyeIcon : closeEyeIcon) +')'}"
              :class="['right_icon', pwdViewStatus ? 'open_eye_icon' : 'close_eye_icon'] "
              @click="pwdViewStatus = !pwdViewStatus"
            ></div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="sms">
          <div class="phone_input">
            <div :style="{'background-image': 'url('+ phoneIcon +')'}" class="left_icon phone_icon"></div>
            <input type="text" v-model="form.phone" placeholder="请输入您的手机号" />
          </div>
          <div class="sms_input">
            <div :style="{'background-image': 'url('+ smsIcon +')'}" class="left_icon smsIcon"></div>
            <input
              type="text"
              v-model="form.sms"
              placeholder="请输入短信验证码"
            />
            <div :class="['send_sms_btn', smsSendStatus ? 'disabled' : '']" @click="sendSmsBtnClickHandle">
              {{smsSendStatus ? (60 - smsCountDown + '秒再次获取') : '获取验证码'}}
            </div>
          </div>
        </div>
      </template>

      <div class="login_btn">
        <div>登录</div>
      </div>
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
