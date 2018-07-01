import request from '../utils/request';

export function listItem(json) {
    return request('api/list/show', {
        method: 'get',
        credentials: 'include',
    });
}

export function orders(json) {  
    return request('api/order/show', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(json)

    });
}

export function listDestroy(json) {
    return request('api/payment/destroy', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        credentials: 'include',
        body: JSON.stringify(json)
    })
};
// export function logistics(json) {
//     console.log(json);
    
//     return request('./list/logistics', {
//         method: 'POST',
//         body: JSON.stringify(json)
//     });
// }

// export function evals(json) {
//     console.log(json);

//     return request('./list/eval', {
//         method: 'POST',
//         body: JSON.stringify(json)
//     });
// }