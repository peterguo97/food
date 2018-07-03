import request from '../utils/request';

export function log(json) {
    console.log(json);
    
    return request('/api/users', {
        method: 'post',
         headers: {
           'Content-Type': 'application/json'
         },
         credentials: 'include',
        body: JSON.stringify(json)
    });
};

export function evals(json) {
    console.log(json);

    return request('/api/comment/store', {
        method: 'post',
         headers: {
           'Content-Type': 'application/json'
         },
         credentials: 'include',
        body: JSON.stringify(json)
    });
}
