import request from '../utils/request';

export function userIntro(datas) {
    return request('/api/wechatUser', {
        method: 'post',
        headers: {
           'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(datas),
    });
}
