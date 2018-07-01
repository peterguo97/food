import request from '../utils/request';

export function getShopping() {
  return request('/shopcart/show', {
    credentials: 'include'
  });
}

export function deleteList(json) {

  return request('/shopcart/destroy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(json)
  });
}

export function isPay(json) {

  return request('/shopcart/pay', {
      method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       credentials: 'include',
      body: JSON.stringify(json)
  });
}

