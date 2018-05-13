import request from '../utils/request';

export function userIntro(datas) {
    console.log(datas);
    return request('/wechatUser', {
        method: 'post',
        body: JSON.stringify(datas),
    });
}
