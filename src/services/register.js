import request from '../utils/request';

export function query(json) {
    console.log(json);
    return request('./register/data', {
        method: 'POST',
        body: JSON.stringify(json)
    });
}