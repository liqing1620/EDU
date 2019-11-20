/**
 * Vuex
 */
import ax from '@axios/axios'
import API_URL from '../configs/apiUrlConfigs'
import Cert from "./modules/cert"
import User from "./modules/user"
import Pay from "./modules/pay"
import Vuex from "vuex"
import Vue from 'vue'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

let store = new Vuex.Store({
    plugins: [persistedState({
        storage: window.sessionStorage,
        reducer(val) {
            return {
                // 只储存state中的user
                user: val.user,
                active: val.active,
                userIf: val.userIf
            }
        }
    })],
    modules: {
        Cert,
        User,
        Pay
    },

    state: {
        user: {},
        userIf: true,
        loading: false,
        active: 0

    },
    actions: {
        login(store, o) {
            return ax(store).post(API_URL.sendSmsCode, o)
        },
        dologion(store, o) {
            return ax(store).post(API_URL.dologion, o, {
                headers: {
                    loadIf: true
                }
            })
        },
        checkSmsCode(store, o) {
            return ax(store).post(API_URL.checkSmsCode, o, {
                headers: {
                    loadIf: true
                }
            })
        },
        selectPhone(store, o) {
            return ax(store).post(API_URL.selectPhone, o, {
                headers: {
                    loadIf: true
                }
            })
        },
        register(store, o) {
            return ax(store).post(API_URL.register, o, {
                headers: {
                    loadIf: true
                }
            })
        },
        resetpass(store, o) {
            return ax(store).post(API_URL.resetpass, o, {
                headers: {
                    loadIf: true
                }
            })
        },
        upload(store, o) {
            return ax(store).post(API_URL.upload, o, {
                headers: {
                    loadIf: true,
                    type: "multipart"
                }
            })
        },
        pdfDownload(store, o) {
            return ax(store).post(API_URL.pdfDownload, o)
        },

    },
    mutations: {
        setUserIf(state, obj) {
            state.userIf = obj
        },
        setUser(state, obj) {
            state.user = obj
        },
        setLoading(state, o) {
            state.loading = o
        },
        setActive(state, o) {
            state.active = o
        }

    },
    getters: {

    }
})

export default store