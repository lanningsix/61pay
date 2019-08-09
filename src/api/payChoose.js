import request from '@/utils/request'

export function submit(data) {
  return request({
    url: '/paygw/pay/upay/submit',
    method: 'get',
    params: data
  })
}
