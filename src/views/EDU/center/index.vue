<style lang="scss" scoped>
    .tlc-center-wave {
        top: -20px;
        position: absolute;
        width: 100%;
        height: 16rem;
    }

    .tlc-center-main {
        padding: 10px;
        z-index: 100;
        position: relative;

        .tlc-center-header {
            color: white;

            .tlc-center-header-p1 {
                font-size: 1rem;
                font-weight: bold;
                margin-bottom: 10px;
            }

            .tlc-center-header-p2 {
                font-size: 0.5rem;
                font-weight: lighter;
            }
        }

        .tlc-center-option {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            font-size: 0.5rem;
            font-weight: lighter;

            p {
                font-size: 0.5rem;
                font-weight: lighter;
                margin: 5px 0 0 0;

                span:nth-child(2) {
                    font-size: 1rem;
                    display: block;

                    small {
                        margin-left: 5px;
                        font-size: 0.5rem;
                    }
                }
            }

            .tlc-center-option-sign {
                font-size: 0.5rem;
                font-weight: lighter;
                border-radius: 20px;
                color: white;
                background-color: #ff5200;
            }
        }

        .tlc-center-menu {
            margin-top: 20px;
        }
        .tlc-center-menu /deep/ .tlc-menu-main{
            box-shadow: 0 0 1px 1px #eaeaea;
            border-radius: 5px;
            background-color: rgba(255,255,255,0.8);
            color: black;
            .tlc-menu-icon{
                background: unset;
                color: black;
            }
        }
        .tlc-center-container{
            margin-top: 3rem;
        }
    }
</style>
<template>
    <div>
        <!--头部波浪效果-->
        <wave-css class="tlc-center-wave"></wave-css>
        <div class="tlc-center-main">
            <div class="tlc-center-header">
                <p class="tlc-center-header-p1">学习中心</p>
                <p class="tlc-center-header-p2">hi,{{user.name}},这是你的学习档案</p>
                <div class="tlc-center-option">
                    <p><span>本月学习</span><span>{{user.hours}}<small>小时</small></span></p>
                    <p><span>连续签到</span><span>{{user.sign}}<small>天</small></span></p>
                    <a-button class="tlc-center-option-sign">去签到</a-button>
                </div>
            </div>
            <div class="tlc-center-menu">
                <base-menu :menu="menu"></base-menu>
            </div>
            <div class="tlc-center-container" >
                <div v-for="item in dataSource[type].list">
                    <text-card v-if="item.type==='normal'" :type="item.icon" :title="item.title" :list="item.list"
                               @list-detail="listDetail"></text-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import dataSource from "../dataSource";

    export default {
        name: "index",
        data() {
            return {
                type:"center",
                dataSource,
                user: {
                    name: '泰乐宝000001',
                    hours: '10',
                    sign: '5'
                },
                menu: [
                    {type: "tags", name: "我的收藏"},
                    {type: "folder-add", name: "我的订阅"},
                    {type: "download", name: "我的下载"},
                    {type: "bars", name: "我的笔记"},
                ]
            }
        },
        methods:{
            listDetail(id, href) {
                window.location.href = href
            }
        }
    }
</script>


