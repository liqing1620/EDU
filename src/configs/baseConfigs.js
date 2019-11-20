/**
 * 基础配置信息
 * @type {{transitionOnLoad: boolean, waitForData: boolean}}
 */
// 路由默认配置
export const ROUTER_DEFAULT_CONFIG = {
    // mode:"history",
    waitForData: true,
    transitionOnLoad: true
};

// axios 默认配置
export const AXIOS_DEFAULT_CONFIG = {
    baseURL: '',
    timeout: 20000,
    maxContentLength: 2000,
    headers: {}
};

// vuex 默认配置
export const VUEX_DEFAULT_CONFIG = {
    strict: process.env.NODE_ENV !== 'production'
};

// 开启请求参数打印
export const REQUEST_LOG_ON = true;
// 开启响应结果打印
export const RESPONSE_LOG_ON = true;
