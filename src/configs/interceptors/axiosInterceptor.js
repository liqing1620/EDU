/**
 * axios 请求拦截器 用于对请求前后动作进行自定义操作
 * created by Alex on 2018/6/25, v1.0
 **/
import {REQUEST_LOG_ON, RESPONSE_LOG_ON} from '../baseConfigs'
import {message} from "ant-design-vue";

/**
 * 请求发送拦截器
 * 可自定义实现参数记录、权限控制等操作
 * @param reqBody
 */
import store from "@store";

export function requestSuccessFunc(reqBody) {
    if(reqBody.method==="post"){
        let type = reqBody.headers.type || 'form-data';
        let loadIf = reqBody.headers.loadIf || false;
        store.commit("setLoading",loadIf)
        switch (type) {
            case 'multipart':
                reqBody.data = file(reqBody.data);
                reqBody.headers['Content-Type'] = 'multipart/form-data';
                break;
            case 'form-data':
                reqBody.data = getFormData(reqBody.data);
                reqBody.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                break;
            case 'json':
                reqBody.data = JSON.stringify(reqBody.data);
                reqBody.headers['Content-Type'] = 'application/json; charset=utf-8';
                break;
        }
    }
    REQUEST_LOG_ON && console.info('request url: %s, body: %o', reqBody.url, reqBody);
    return reqBody;
}

function file(o) {
    let data = o, formData = new FormData();
    Object.keys(data).forEach((key) => {
        formData.append(key, data[key])
    });
    return formData
}

function getFormData(o) {
    let data = o, formData = '', params = new URLSearchParams();
    Object.keys(data).forEach((key) => {
        params.append(key, data[key])

    });
    return params
}

/**
 *  自定义发送请求失败逻辑，断网，请求发送监控等
 * @param requestError
 * @returns {Promise<never>}
 */
export function requestFailFunc(requestError) {
    return Promise.reject(requestError);
}

/**
 * 自定义响应成功逻辑，全局拦截接口，根据不同业务做不同处理，响应成功监控等
 * @param responseObj
 * @returns {*}
 */
export function responseSuccessFunc(responseObj) {
    store.commit("setLoading",false)
    RESPONSE_LOG_ON && console.info('response status: %s, body: %o', responseObj.status, responseObj);
    let resData = responseObj.data;
    let {code} = resData;
    switch (parseInt(code)) {
        case 0: // 进成功回调
            return resData.data;
        case 1001:
            // 如果业务失败，根据不同 code 做不同处理
            // 比如最常见的授权过期跳登录
            // 特定弹窗
            // 跳转特定页面等
            // location.href = xxx
            return;
        case 984:
            return resData
        default:
            if(resData.msg.includes("订单")){
                return Promise.reject(resData);
            }else{
                message.error(resData.msg,2)
                return Promise.reject(resData);
            }
    }
}

/**
 * 响应失败，可根据 responseError.message 和 responseError.response.status 来做监控处理
 * @param responseError
 * @returns {Promise<never>}
 */
export function responseFailFunc(responseError) {
    store.commit("setLoading",false)
    return Promise.reject(responseError);
}

