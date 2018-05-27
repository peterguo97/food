import request from '../utils/request';

export function query(json) {
    console.log(json);
    return request('./register/data', {
        method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },

        body: JSON.stringify(json)
    });
}