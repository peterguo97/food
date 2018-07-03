import request from '../utils/request';

export function address(json) {
    return request('/api/address/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(json)
    });
}

export function staticAddress(json) {
    return request('/api/address/users', {
        method: 'post',
         headers: {
           'Content-Type': 'application/json'
         },
         credentials: 'include',
        body: JSON.stringify(json)
    });
}

export function deleteList(json) {
  console.log(json);
  return request('/api/address/destroy', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(json)
  });
}
