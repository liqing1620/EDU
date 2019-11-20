<style lang="scss" scoped>
    .tlc-community-main {
        .tlc-community-search {
            display: flex;
            background-color: white;
            padding: 10px;
            align-items: center;
            top: 0;
            width: 100%;
            position: absolute;
        }

        .tlc-community-search-add {
            font-size: 1.5rem;
            margin-left: 5px;
        }

        /*父组件渗透子组件样式*/
        .tlc-community-search /deep/ input {
            border-radius: 20px;
        }

        .tlc-community-menu {
            margin-top: 50px;
            display: flex;
            justify-content: space-between;
            background-color: white;
            padding-bottom: 10px;
            div {
                border-right: 1px solid #eaeaea;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 25%;
                font-size: 1.5rem;
                .tlc-menu-name {
                    font: 0.5rem/1.5rem hiragino sans gb, microsoft yahei, simsun;
                }
            }
            div:last-child{
                border: unset;
            }
        }
        .tlc-community-class{
            margin: 10px 0;
            background-color: white;
            padding: 5px 40px;
            display: flex;
            justify-content: space-between;
            .active{
             color: #FF2D2D;
            }
        }
    }

</style>
<template>
    <div class="tlc-community-main">
        <div class="tlc-community-search">
            <a-input v-model="values" placeholder="搜索" class="tlc-search-input">
                <a-icon slot="prefix" type="search" style="color: rgba(0,0,0,.25)"/>
            </a-input>
            <a-icon type="form" class="tlc-community-search-add"/>
        </div>
        <div class="tlc-community-menu">
            <div v-for="(item,index) in menu" @click="setMenuId(item,index)">
                <icon-font :type="item.type"></icon-font>
                <span class="tlc-menu-name">{{item.name}}</span>
            </div>
        </div>
        <div class="tlc-community-class">
            <span v-for="(item,index) in classification"  :class="ids===index?'active':''">{{item}}</span>
        </div>
        <div class="tlc-community-container">
            <com-card v-for="item in 10"></com-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                values: "",
                menu: [
                    {type: "icon-huiyi3", name: "泰乐大厅",path:""},
                    {type: "icon-kecheng", name: "图书馆",path:""},
                    {type: "icon-huiyi", name: "新人报道",path:""},
                    {type: "icon-kechengchengji", name: "最新数据",path:""},
                    {type: "icon-gengduo", name: "更多",path:""},
                ],
                ids:0,
                classification:['热门','发布时间','评论数','点赞数']
            }
        },
        methods: {
            goMessage() {

            }
        }
    }
</script>


