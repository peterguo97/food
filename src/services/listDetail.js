import request from '../utils/request';

export function listDetail(json) {
    request('/api/listdetail/show', {
        method: 'post',
        headers: {
        'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(json)
    });
}

export function refundList() {
    return request('/api/users', {
        method: 'post',
        credentials: 'include',
    });
}
