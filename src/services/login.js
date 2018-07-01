import request from '../utils/request';

export function query(json) {
    console.log(json);
    return request('./api/login/data', {
        method: 'POST',
        body: JSON.stringify(json)
    });
}