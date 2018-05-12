import request from '../utils/request';

export function listItem(json) {
    json = json || 'list';
    return request('./list/data', {
        method: 'POST',
        body: JSON.stringify(json)
    });
}

export function logistics(json) {
    console.log(json);
    
    return request('./list/logistics', {
        method: 'POST',
        body: JSON.stringify(json)
    });
}

export function evals(json) {
    console.log(json);

    return request('./list/eval', {
        method: 'POST',
        body: JSON.stringify(json)
    });
}