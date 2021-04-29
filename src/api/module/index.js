import request from '../request.js';
// post请求
export function postRequest (data) {
    return request({
        url: '/list',
        data
    });
}