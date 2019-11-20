import error from "../views/error/index";

export default [
    {
        path: '/',
        meta: {title: '泰乐学院'},
        component: () => import('../layouts/TlcLayout.vue'),
        children: [
            {path: '', meta: {title: '泰乐学院'}, component: () => import('../views/EDU/home/index.vue')}
        ]
    },
    {
        path: '/search',
        meta: {title: '搜索'},
        component: () => import('../views/EDU/home/search.vue'),
    },
    {
        path: '/classification',
        meta: {title: '分类'},
        component: () => import('../views/EDU/home/classification.vue'),
    },
    {
        path: '/message',
        meta: {title: '我的消息'},
        component: () => import('../views/EDU/home/message.vue'),
    },
    {
        path: '/center',
        meta: {title: '学习中心'},
        component: () => import('../layouts/TlcLayout.vue'),
        children: [
            {path: '', meta: {title: '学习中心'}, component: () => import('../views/EDU/center/index.vue')}
        ]
    },
    {
        path: '/community',
        meta: {title: '泰乐社区'},
        component: () => import('../layouts/TlcLayout.vue'),
        children: [
            {path: '', meta: {title: '泰乐社区'}, component: () => import('../views/EDU/community/index.vue')}
        ]
    },
    {
        path: '/user',
        meta: {title: '我的'},
        component: () => import('../layouts/TlcLayout.vue'),
        children: [
            {path: '', meta: {title: '我的'}, component: () => import('../views/EDU/user/index.vue')}
        ]
    },
    {
        path: '*',
        name: 'error',
        component: () => import('../views/error/index'),
        meta: {title: '页面未找到'}
    }
]
