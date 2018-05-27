import request from '../utils/request';

export function address(json) {
    console.log(json);
    
    return request('/addresses/edit', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    });
}

export function addressInfo(json) {
    console.log(json);

    return request('/addresses/store', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    });
}