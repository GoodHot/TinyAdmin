import {request} from '@/utils/request'

export function getAllAdmin () {
  return request({
    url: '/user/all',
    method: 'get'
  })
}
