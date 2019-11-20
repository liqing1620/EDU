<style lang="scss" scoped>
    .tlc-tab-main {
        display: flex;
        justify-content: space-between;
        z-index: 100000;
        div {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 25%;
            font-size: 20px;

            span {
                font: 0.5rem/1rem hiragino sans gb, microsoft yahei, simsun;
            }
        }
    }

    .active {
        color: #FF2D2D;
    }
</style>
<template>
    <div class="tlc-tab-main">
        <div v-for="(item,index) in tabs" @click="setMenuId(item,index,item.path)" :class="ids===index?'active':''">
            <a-icon :type="item.type"/>
            <span>{{item.name}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabMenu",
        data() {
            return {
                ids:0,
                tabs: [
                    {type: "book", name: "咨询",path:"/"},
                    {type: "read", name: "学习中心",path:'/center'},
                    {type: "message", name: "泰乐社区",path:'/community'},
                    {type: "user", name: "我的",path:'/user'},
                ]
            }
        },
        methods:{
            setMenuId(o,d,p){
                this.ids=d
                this.$router.push(p)
            }
        }
    }
</script>


