/**
 * Vuex
 */
import ax from '@axios/axios'
import API_URL from '@configs/apiUrlConfigs'



export default {
    namespaced: true,
    state: {

    },
    actions: {
        getOrderinfo(store, o) {
            return ax(store).post(API_URL.orderinfo, o, {
                headers: {
                    loadIf: true
                }
            })
        },
        WxPayment(store, o) {
            return ax(store).get(API_URL.WxPayment, o, {
                headers: {
                    loadIf: true
                }
            })
        },
        WxOrders(store, o) {
            return ax(store).post(API_URL.WxOrders, o, {
                headers: {
                    loadIf: true
                }
            })
        },
        jsmdaorder(store, o) {
            return ax(store).post(API_URL.jsmdaorder, o)
        },
        order(store, o) {
            return ax(store).get(API_URL.order, o)
        }

    },
    mutations: {

    },
    getters: {

    }
}