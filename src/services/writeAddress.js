import request from '../utils/request';

export function address(json) {
    console.log(json);
    
    return request('/api/addresses/edit', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(json)
    });
}

export function addressInfo(json) {
    console.log(json);

    return request('/api/addresses/store', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(json)
    });
}