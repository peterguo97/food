import request from '../utils/request';

export function listDetail(json) {
    console.log(json);
    return request('/api/users', {
        method: 'get',
        body: JSON.stringify(json)
    });
}

export function refundList() {
    return request('/api/users', {
        method: 'post'
    });
}
