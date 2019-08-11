<template>
  <div class="order_info">
    <div class="user_info">
      <div class="account">
        <span class="label">学员账号：</span>
        <span class="detail">15983262145</span>
      </div>
      <div class="name">
        <span class="label">学员姓名：</span>
        <span class="detail">沁儿</span>
      </div>
      <div class="teacher">
        <span class="label">当前老师：</span>
        <span class="detail">奶茶老师</span>
      </div>
    </div>

    <!-- <div class="add_address">
      <van-cell-group>
        <van-field v-model="addAddressForm.addressee" label="收件人：" placeholder="请填写收件人姓名" />
        <van-field v-model="addAddressForm.phone" label="手机号：" placeholder="请填写收件手机号码" />
        <div class="district">
          <span class="label">所在地区：</span>
          <span class="district_icon" :style="{'background-image': 'url('+ districtIcon +')'}"></span>
          <span
            :class="addAddressForm.districtCode ? 'content' : 'disabled content'"
            @click="showAddressPicker = true"
          >{{addAddressForm.districtCode ? addAddressForm.districtName : '请点击选择'}}</span>
        </div>
        <van-field
          v-model="addAddressForm.detailedAddress"
          type="textarea"
          rows="2"
          label="详细地址："
          placeholder="请填写详细地址"
        />
      </van-cell-group>
    </div>-->

    <div class="choose_address">
      <div class="line"></div>
      <div class="address_list">
        <div class="address_item" v-for="(item, key) in addressList" :key="key">
          <div class="checkbox" @click="selectedAddressIndex = key">
            <img :src="key === selectedAddressIndex ? selectedIcon : notSelectedIcon" alt />
          </div>
          <div class="address_item_info">
            <div class="top">
              <span class="name">{{item.name}}</span>
              <span class="tel">{{item.tel}}</span>
              <span class="default" v-if="item.isDefault">默认</span>
            </div>
            <div class="bottom">{{item.districtName + item.detailedAddress}}</div>
          </div>
          <div class="edit">
            <span class="right_line"></span>
            <span
              class="edit_address_icon"
              :style="{'background-image': 'url('+ editAddressIcon +')'}"
            ></span>
          </div>
        </div>
      </div>

      <div class="add_address_btn">
        <span class="add_address_icon" :style="{'background-image': 'url('+ addAddressIcon +')'}"></span>
        新增收件地址
      </div>
    </div>

    <div class="submit_btn">
      <div>确定提交</div>
    </div>
    <div class="tooltip">
      <div>地址用于画具、设备、礼品等发放</div>
      <div>请务必填写真实地址信息哦~</div>
    </div>

    <!-- 地址选择器 -->
    <van-popup v-model="showAddressPicker" position="bottom">
      <van-area
        :area-list="areaList"
        @cancel="showAddressPicker = false"
        @confirm="addressConfirmHandle"
      />
    </van-popup>

    <!-- 自定义选择器 -->
    <!-- <van-popup v-model="showAddressPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showAddressPicker = false"
        @confirm="addressConfirmHandle"
        @change="onChange"
      />
    </van-popup>-->
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
