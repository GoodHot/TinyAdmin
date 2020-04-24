import {request} from '@/utils/request'

export function getAllSkin () {
  return request({
    url: '/skins',
    method: 'get'
  })
}

export function switchSkin (id) {
  return request({
    url: `/skin/switch/${id}`,
    method: 'put'
  })
}