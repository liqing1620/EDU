<style lang="scss" scoped>
    .tlc-swiperText-main {
        margin-top: 10px;
        background-color: white;
        padding: 10px;

        .tlc-swiperText-title {
            display: flex;
            justify-content: space-between;

            span:nth-child(1) {
                font: 15px/30px hiragino sans gb, microsoft yahei, simsun;
                color: black;
                font-weight: bold;
            }

            span:nth-child(2) {
                font: 10px/30px hiragino sans gb, microsoft yahei, simsun;
                color: #8b8b8b;
            }
        }
        .tlc-swiperText-content::-webkit-scrollbar{
            display: none;
        }
        .tlc-swiperText-content {
            display: -webkit-box;
            overflow-x: scroll;
            .tlc-swiperText-list {
                margin: 5px;
                width: 6rem;
                border-radius: 5px;
                box-shadow: 0 0 5px 1px #eaeaea;
                font-size: 16px;
                img {
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                    width: 100%;
                }
                p{
                    margin: 0;
                }
                .tlc-swiperText-title{
                    color: black;
                    font-weight: bold;
                    font-size: 0.5rem;
                }
                .tlc-swiperText-description{
                    font-size: 0.5rem;
                }
            }
        }
    }
</style>
<template>
    <div class="tlc-swiperText-main">
        <p class="tlc-swiperText-title">
            <span>{{title}}</span>
            <span @click="goOrNext(iconType)">{{iconName}}<a-icon style="margin-left: 10px" :type="iconType"/></span>
        </p>
        <div class="tlc-swiperText-content" v-if="list.length>0">
            <div class="tlc-swiperText-list" v-for="item in list" @click="listDetail(item.id,item.href)">
                <img :src="item.url"/>
                <p class="tlc-swiperText-title">{{item.title}}</p>
                <p class="tlc-swiperText-description">{{item.description}}</p>
            </div>
        </div>
        <a-skeleton v-if="list.length<=0"/>
    </div>
</template>
<script>
    export default {
        name: "TextCard",
        props: {
            iconType: {
                type: String,
                default: "right"
            },
            iconName: {
                type: String,
                default: ""
            },
            title: {
                type: String,
                default: "热门精选"
            },
            list: {
                type: Array
            }
        },
        data() {
            return {}
        },
        methods: {
            /**
             * 根据传入的类型来决定操作
             * @param type
             */
            goOrNext(type) {
                this.$emit('go-next', type)
            },
            /**
             * 组件信息id通信
             * @param id,href
             */
            listDetail(id, href) {
                this.$emit('list-detail', id, href)
            }
        }
    }
</script>


