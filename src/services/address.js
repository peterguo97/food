import request from '../utils/request';

export function address(json) {
    console.log(json);
    
    return request('/address/users', {
        method: 'post',
        body: JSON.stringify(json)
    });
}

export function staticAddress(json) {
    console.log(json);
    return request('/address/users', {
        method: 'post',
         headers: {
           'Content-Type': 'application/json'
         },

        body: JSON.stringify(json)
    });
}

export function deleteList(json) {
  console.log(json);
  return request('/address/destroy', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json)
  });
}
