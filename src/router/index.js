/**
 * 注入路由配置，路由表，路由拦截器
 * 生成一个路由实例
 * created by Alex on 2018/6/25, v1.0
 **/
import Vue from 'vue'
import Router from 'vue-router'

// 解决重复点击导航路由报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
}

import routers from '../router/routers'
import {ROUTER_DEFAULT_CONFIG} from '../configs/baseConfigs'
import {routerBeforeEachFunc} from '../configs/interceptors/routerInterceptor'

Vue.use(Router)

let rt = new Router({
    ...ROUTER_DEFAULT_CONFIG,
    routes: routers
})
// 注入拦截器
rt.beforeEach(routerBeforeEachFunc)

export default rt


