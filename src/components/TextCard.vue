<style lang="scss" scoped>
    .tlc-cardText-main {
        margin-top: 10px;
        background-color: white;
        padding: 10px;

        .tlc-cardText-title {
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

        .tlc-cardText-content {
            display: flex;
            margin-bottom: 10px;
            height: 4rem;

            .tlc-cardText-img {
                width: 6rem;
                border-radius: 5px;
            }

            .tlc-cardText-text {
                width: 100%;
                padding-left: 10px;
                position: relative;

                .tlc-cardText-p {
                    margin: 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                .tlc-cardText-icon {
                    width: 100%;
                    margin: 0;
                    position: absolute;
                    bottom: 0;
                    left: 10px;
                    font-size: 0.8rem;
                }
            }
        }
    }
</style>
<template>
    <div class="tlc-cardText-main">
            <p class="tlc-cardText-title">
                <span>{{title}}</span>
                <span @click="goOrNext(type.iconType)">{{type.iconName}}<a-icon style="margin-left: 10px"
                                                                      :type="type.iconType"/></span>
            </p>
            <div class="tlc-cardText-content" v-for="item in list" @click="listDetail(item.id,item.href)" v-if="list.length>0">
                <img alt="加载失败"
                     class="tlc-cardText-img"
                     :src="item.url"/>
                <div class="tlc-cardText-text">
                    <p class="tlc-cardText-p">{{item.title}}</p>
                    <p class="tlc-cardText-icon">
                        <span style="margin-right: 10px"><a-icon type="star-o" style="margin-right: 5px"/>{{item.score===''?'暂无评分':item.score}}</span>
                        <span style="margin-right: 10px"><a-icon type="eye" style="margin-right: 5px"/>{{item.browse===''?'0':item.browse}}</span>
                    </p>
                </div>
            </div>
        <a-skeleton v-if="list.length<=0" />
    </div>
</template>
<script>
    export default {
        name: "TextCard",
        props: {
            type:{
              type:Object,
                default:function () {
                    return{
                        iconType:"reload",
                        iconName:"换一批",
                    }
                }
            },
            title: {
                type: String,
                default: "热门精选"
            },
            list: {
                type: Array
            }
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
            listDetail(id,href) {
                this.$emit('list-detail', id,href)
            }
        }
    }
</script>


