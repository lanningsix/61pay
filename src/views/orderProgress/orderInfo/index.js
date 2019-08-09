import { provinceList } from '@/utils/area.js'
export default {
  name: '',
  components: {},
  data() {
    return {
      districtIcon: require('@/assets/orderProgress/signUp/district.png'),
      addAddressForm: {
        addressee: '',
        phone: '',
        districtCode: '',
        districtName: '',
        detailedAddress: ''
      },
      showAddressPicker: false, // 选择器是否显示
      areaList: provinceList
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
