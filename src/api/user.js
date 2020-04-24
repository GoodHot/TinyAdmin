import {request} from '@/utils/request'

export function getAllAdmin () {
  return request({
    url: '/user/all',
    method: 'get'
  })
}

export function saveUser (param) {
  return request({
    url: '/user',
    method: 'post',
    data: param
  })
}

export function updatePassword (id, param) {
  return request({
    url: `/user/password/${id}`,
    method: 'put',
    data: param
  })
}

export function getUser (id) {
  return request({
    url: `/user/${id}`,
    method: 'get'
  })
}