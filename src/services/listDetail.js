import request from '../utils/request';

export function listDetail(json) {
    console.log(json);
    return request('/listdetail/show', {
        method: 'post',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    });
}

export function refundList() {
    return request('/api/users', {
        method: 'post'
    });
}
