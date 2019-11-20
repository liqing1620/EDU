/**
 * 自定义 axios 插件
 *
 **/

import axios from 'axios'
import {
	AXIOS_DEFAULT_CONFIG
} from '../configs/baseConfigs'
import {
	requestSuccessFunc,
	requestFailFunc,
	responseSuccessFunc,
	responseFailFunc
} from '../configs/interceptors/axiosInterceptor'

axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true;

let ax = (store) => {
	var instance = axios.create(AXIOS_DEFAULT_CONFIG);

	// 注入axios请求和响应的相关拦截器
	instance.interceptors.request.use(requestSuccessFunc, requestFailFunc)

	instance.interceptors.response.use(responseSuccessFunc, responseFailFunc)

	return instance
}

export default ax