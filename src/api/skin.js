import {request} from '@/utils/request'

export function getAllSkin () {
  return request({
    url: '/skins',
    method: 'get'
  })
}