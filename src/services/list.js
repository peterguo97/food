import request from '../utils/request';

export function listItem(json) {
    json = json || 'list';
    return request('./list/data', {
        method: 'POST',
        body: JSON.stringify(json)
    });
}