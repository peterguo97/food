import request from '../utils/request';

export function address(json) {
    console.log(json);
    
    return request('api/home/address/users', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(json)
    });
}

export function staticAddress(json) {
    console.log(json);
    return request('api/home/address/users', {
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
  return request('api/home/address/destroy', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(json)
  });
}
