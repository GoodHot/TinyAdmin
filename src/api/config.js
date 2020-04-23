import {request} from '@/utils/request'

export function getConfigByGroup (group) {
  return request({
    url: `/config/list/${group}`,
    method: 'get'
  })
}

export function updateConfig (param) {
  return request({
    url: '/config',
    method: 'put',
    data: param
  })
}