import request from '../utils/request';

export function getShopping() {
  return request('/shopcart/show');
}

export function deleteList(json) {

  return request('/shopcart/destroy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json)
  });
}

export function isPay(json) {

  return request('/shopcart/pay', {
      method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },

      body: JSON.stringify(json)
  });
}

