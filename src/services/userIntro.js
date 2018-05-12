import request from '../utils/request';

export function userIntro(datas) {
    console.log(datas);
    return request('./user/intro', {
        method: 'post',
        body: JSON.stringify(datas)
    });
}
