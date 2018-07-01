import request from '../utils/request';

export function query(json) {
    console.log(json);
    return request('./api/forget/data', {
        method: 'POST',
        body: JSON.stringify(json)
    });
}