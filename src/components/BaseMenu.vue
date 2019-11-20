<style lang="scss" scoped>
    .tlc-menu-main {
        display: flex;
        justify-content: space-between;
        background-color: white;
        div {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 25%;
            font-size: 20px;
            padding: 10px;
            .tlc-menu-icon{
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                color: white;
                background: linear-gradient(#2e6ee6, #58bce5);
            }
            .tlc-menu-name {
                font: 0.5rem/1rem hiragino sans gb, microsoft yahei, simsun;
            }
        }
    }

    .active {
        color: #FF2D2D;
    }
</style>
<template>
    <div class="tlc-menu-main">
        <div v-for="(item,index) in menu" @click="setMenuId(item,index)">
            <span class="tlc-menu-icon">
                <a-icon :type="item.type"/>
            </span>
            <span class="tlc-menu-name">{{item.name}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseMenu",
        props:{
            menu:{
                type:Array,
                default:function () {
                    return [
                        {type: "book", name: "咨询"},
                        {type: "read", name: "学习中心"},
                        {type: "message", name: "泰乐社区"},
                        {type: "user", name: "我的"},
                    ]
                }
            }
        },
        data() {
            return {
                ids:0
            }
        },
        methods:{
            setMenuId(o,d){
                this.ids=d
            }
        }
    }
</script>


