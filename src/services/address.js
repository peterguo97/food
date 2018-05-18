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
        body: JSON.stringify(json)
    });
}