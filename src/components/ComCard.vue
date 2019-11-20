<style lang="scss" scoped>
    .tlc-comcard-main {
        margin: 5px;
        background-color: white;
        border-radius: 5px;
        padding: 10px;

        p {
            margin: 0;
        }

        .tlc-comcard-avator {
            display: flex;
            justify-content: space-between;

            img {
                width: 3rem;
                height: 3rem;
            }

            .tlc-comcard-avator-b {
                .tlc-comcard-avator-icon {
                    width: 3rem;
                    height: 3rem;
                }
            }

            .tlc-comcard-avator-icon /deep/ svg {
                width: 3rem;
                height: 3rem;
            }
        }
        .tlc-comcard-avator-user {
            flex: 1;
            margin-left: 10px;
            .tlc-comcard-avator-user-name{
                font: 0.5rem/1.5rem hiragino sans gb, microsoft yahei, simsun;
                color: red;
            }
            .tlc-comcard-avator-user-title{
                color: black;
            }
        }
        .tlc-comcard-options{
            margin-top: 10px;
            border-top: 1px solid #eaeaea;
            padding: 5px 10px 0 10px;
            display: flex;
            justify-content: space-between;
            .tlc-comcard-options-icon{

            }
        }
    }
</style>

<template>
    <div class="tlc-comcard-main">
        <div class="tlc-comcard-avator">
            <div class="tlc-comcard-avator-b">
                <img :src="user.avator" alt="avator" v-if="user.avator!==''">
                <icon-font class="tlc-comcard-avator-icon"
                           :type="user.sex==='0'?'icon-touxiang1':'icon-icon-test'"></icon-font>
            </div>
            <div class="tlc-comcard-avator-user">
                <p class="tlc-comcard-avator-user-name">{{user.name}}</p>
                <p>
                    <a-tag color="blue">置顶</a-tag>
                    <a-tag color="red">精华</a-tag>
                    <span class="tlc-comcard-avator-user-title" >{{user.title}}</span>
                </p>
            </div>
            <div>
                <p>{{user.date}}</p>
            </div>
        </div>
        <div class="tlc-comcard-container">
            <p>{{user.message}}</p>
        </div>
        <div class="tlc-comcard-options">
            <p class="tlc-comcard-options-icon">
                <span style="margin-right: 10px"><a-icon type="eye" style="margin-right: 5px"/>{{user.browse===''?'0':user.browse}}</span>
            </p>
            <p class="tlc-comcard-options-icon">
                <span style="margin-right: 10px"><a-icon type="message" style="margin-right: 5px"/>{{user.comment===''?'暂无评价':user.comment}}</span>
            </p>
            <p class="tlc-comcard-options-icon">
                <span style="margin-right: 10px"><a-icon type="heart" style="margin-right: 5px"/>{{user.like===''?'0':user.like}}</span>
            </p>
            <p class="tlc-comcard-options-icon">
                <span style="margin-right: 10px"><a-icon type="star-o" style="margin-right: 5px"/>{{user.Collection===''?'0':user.Collection}}</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ComCard",
        data() {
            return {
                user: {
                    name: "泰乐官方发布",
                    sex: '0',
                    avator: "",
                    title: '泰乐圈版主招募',
                    message: '泰乐App诚邀您加入泰乐版主团队，与我们一起成长，一起欢乐，一起为泰乐宝贝们服务，赶快报名吧。',
                    browse:'',
                    comment:'',
                    like:'',
                    Collection:'',
                    date: "11-20",

                }
            }
        }
    }
</script>

