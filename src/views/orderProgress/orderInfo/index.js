import { provinceList } from '@/utils/area.js'
export default {
  name: '',
  components: {},
  data() {
    return {
      districtIcon: require('@/assets/orderProgress/orderInfo/district.png'),
      selectedIcon: require('@/assets/orderProgress/orderInfo/selected.png'),
      notSelectedIcon: require('@/assets/orderProgress/orderInfo/notSelected.png'),
      editAddressIcon: require('@/assets/orderProgress/orderInfo/editAddress.png'),
      addAddressIcon: require('@/assets/orderProgress/orderInfo/addAddress.png'),
      addAddressForm: {
        addressee: '',
        phone: '',
        districtCode: '',
        districtName: '',
        detailedAddress: ''
      },
      showAddressPicker: false, // 选择器是否显示
      areaList: provinceList,
      addressList: [{
        id: 1,
        name: '张三',
        tel: '13000000000',
        districtName: '北京市北京市和平区',
        detailedAddress: '文三路 138 号东方通信大厦 7 楼 501 室',
        districtCode: 110101,
        isDefault: true
      },
      {
        id: 2,
        name: '李四',
        tel: '1310000000',
        districtName: '北京市北京市和平区',
        detailedAddress: '文三路 138 号东方通信大厦 7 楼 501 室',
        districtCode: 110101,
        isDefault: false
      }],
      selectedAddressIndex: 0
    }
  },
  mounted() {
  },
  methods: {
    addressConfirmHandle(val) {
      this.showAddressPicker = false
      console.log(val)
      this.addAddressForm.districtCode = val.map(item => item.code).join('')
      this.addAddressForm.districtName = val.map(item => item.name).join(' ')
    }
  }
}

// myAddressPicker() {
//   const onChange = (picker, values) => {
//     console.log(values)
//     // picker.setColumnValues(1, areaData[values[0]])
//   }

//   const init = () => {
//     const columns = []
//     const firstColumnValues = []
//     const secondColumnValues = []
//     const thirdColumnValues = []
//     areaData.forEach(item => {
//       firstColumnValues.push(item.name)
//     })
//     columns.push({
//       values: firstColumnValues,
//       className: 'column1'
//     })
//     areaData[0].child.forEach(childItem => {
//       secondColumnValues.push(childItem.name)
//     })
//     columns.push({
//       values: secondColumnValues,
//       className: 'column2'
//     })
//     areaData[0].child[0].child.forEach(childItem => {
//       thirdColumnValues.push(childItem.name)
//     })
//     columns.push({
//       values: thirdColumnValues,
//       className: 'column3'
//     })
//     this.columns = columns
//   }

//   return {
//     onChange: onChange,
//     init: init
//   }
// }
