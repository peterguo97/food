import request from '../utils/request';

export function userIntro(datas) {
    console.log(datas);
    return request('api/home/wechatUser', {
        method: 'post',
        headers: {
           'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(datas),
    });
}
