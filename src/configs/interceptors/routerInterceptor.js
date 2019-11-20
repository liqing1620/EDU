/**
 * 路由拦截器 可对路由动作进行自定义操作
 *
 **/
const WHITE_LIST=["/","/LT","protocol","password","register","qrcode","qrscaner","barcode"]
export function routerBeforeEachFunc (to, from, next) {
    // 这里可以做页面拦截，部分应用也可在此处处理权限
    // todo
    var user=sessionStorage.getItem("vuex")
    //修改页面标题
    if(to.meta.title){
        document.title=to.meta.title
    }
    next()
    // if(to.name==="LT"){
    //     next()
    // }else if(WHITE_LIST.includes(to.name)) {
    //     next()
    // }else{
    //     if(sessionStorage.getItem("vuex")===null){
    //         next({
    //             path:"/",
    //             replace: true
    //         })
    //     }else{
    //         next()
    //     }
    // }

}
