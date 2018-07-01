import request from '../utils/request';

export function img(json) {
    console.log(json);
    return request('/api/login/getImg', {
        method: 'POST'
    });
}