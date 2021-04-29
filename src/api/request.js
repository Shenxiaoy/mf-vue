import axios from 'axios';
import jsCookie from 'js-cookie'
import { message as AMessage } from 'ant-design-vue';
import baseUrl from './config'

export function login () {
    console.log("需要登录")
    // if (window.self !== window.top) {
    //     window.top.location.href = `${process.env.VUE_APP_PUBLIC_PATH}#/login`;
    // } else {
    //     window.location.href = `${process.env.VUE_APP_PUBLIC_PATH}#/login`;
    // }
}
const messageObj = {};

/**
 * @description: message去重
 * @param {<string>} type 类型
 * @param {<string>} msg 内容
 * @param {<number>} time 秒
 * @return: {<void>}
 */
export function message (type, msg, time = 3) {
    if (!messageObj[msg] || messageObj[msg] !== type) {
        AMessage[type](msg, time);
        messageObj[msg] = type;
        setTimeout(() => {
            delete messageObj[msg];
        }, time * 1000);
    }
}

const service = axios.create({
    baseURL: baseUrl,
    method: 'post',
    timeout: 15000,
    headers: {
    }
});
// axios.defaults.withCredentials = true;

function toLogin (data) {
    if (!noPrompt.codes.includes(data.code)) {
        // if (!noPrompt.codes.includes(data.code) && !noPrompt.urls.includes(config.url)) {
        message('error', data.message || data.resultMessage || data.msg || '网络错误，请稍后重试', 3);
    }
    if (loginList.includes(data.code)) {
        setTimeout(() => {
            login();
        }, 1500);
    }
}

service.interceptors.request.use(
    (config) => {
        if (config.method && config.method.toLowerCase() === 'get') {
            if (!config.params) {
                config.params = {};
            }

            Object.assign(config.params, {
                v: Math.random() * 1000000
            });
        }
        if (!config.data) {
            config.data = {};
        }
        config.data.token = jsCookie.get("staffScn")
        return config;
    },
    (error) => Promise.reject(error)
);

const noPrompt = {
    codes: [], // 不提示错误信息的code
    urls: ['/dp/common/getBehaviorPostUrl'] // 不提示错误信息的url
};

const loginList = [403, 103]; // 需要登录的code


service.interceptors.response.use(
    (response) => {
        const { data, config } = response;
        if (data.code === 200) {
            return data.data;
        }

        toLogin(data);
        return Promise.reject(data);
    },
    (error) => {
        const { status, data = {}, config = {} } = (error.response || {});
        if (status === 403) {
            login();
        } else {
            toLogin(data);
        }
        return Promise.reject(error);
    }
);
export default service;