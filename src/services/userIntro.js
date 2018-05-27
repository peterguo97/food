import request from '../utils/request';

export function userIntro(datas) {
    console.log(datas);
    return request('/wechatUser', {
        method: 'post',
         headers: {
           'Content-Type': 'application/json'
         },

        body: JSON.stringify(datas),
    });
}
