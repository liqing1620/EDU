/**
 * Vuex
 */
import ax from '@axios/axios'
import API_URL from '@configs/apiUrlConfigs'

export default {
    namespaced: true,
    state: {},
    actions: {
        getBranch(store, o) {
            return ax(store).get(API_URL.branch)
        },
        getChapter(store, o) {
            return ax(store).post(API_URL.chapter,o)
        },
        getMemberdetails(store, o) {
            return ax(store).post(API_URL.memberdetails,o,{headers:{loadIf:true}})
        },
        getNewsdetails(store, o) {
            return ax(store).post(API_URL.newsdetails,o,{headers:{loadIf:true}})
        },
        getApplication(store, o) {
            return ax(store).post(API_URL.application,o,{headers:{loadIf:true}})
        },
        updateApplication(store, o) {
            return ax(store).post(API_URL.Updateapplication,o,{headers:{loadIf:true}})
        },
        getQualifications(store, o) {
            return ax(store).post(API_URL.qualifications,o,{headers:{loadIf:true}})
        },
        applicationForCertification(store, o) {
            return ax(store).post(API_URL.applicationForCertification,o, {headers:{type:"json"}})
        },
        applicationForCertificationdetails(store, o) {
            return ax(store).post(API_URL.applicationForCertificationdetails,o,{headers:{loadIf:true}})
        },

    },
    mutations: {},
    getters: {}
}

