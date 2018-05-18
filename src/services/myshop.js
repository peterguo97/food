import request from '../utils/request';

export function getStore() {
    return request('/stores',{
        method: 'GET'
    });
}