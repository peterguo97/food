import request from '../utils/request';

export function address(json) {
    console.log(json);
    
    return request('/api/users', {
        method: 'post',
        body: JSON.stringify(json)
    });
}

export function addressInfo(json) {
    console.log(json);

    return request('/api/users', {
        method: 'post',
        body: JSON.stringify(json)
    });
}