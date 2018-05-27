import request from '../utils/request';

export function getShopping() {
  return request('/shopcart/show');
}
