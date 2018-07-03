import request from '../utils/request';

export function getShopping() {
  return request('api/shopcart/show', {
    credentials: 'include'
  });
}

export function deleteList(json) {

  return request('/api/shopcart/destroy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(json)
  });
}

export function isPay(json) {

  return request('/api/shopcart/pay', {
      method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       credentials: 'include',
      body: JSON.stringify(json)
  });
}

