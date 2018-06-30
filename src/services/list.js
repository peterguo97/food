import request from '../utils/request';

export function listItem(json) {
    return request('./list/show', {
        method: 'get',
    });
}

export function orders(json) {  
  
    return request('./order/show', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(json)

    });
}

export function listDestroy(json) {
    return request('./payment/destroy', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },

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