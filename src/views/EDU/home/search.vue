<style lang="scss" scoped>
    .tlc-search-main {
        .tlc-search-option{
            display: flex;
            background-color: white;
            padding: 10px 0 10px 20px;
        }
        /*父组件渗透子组件样式*/
        .tlc-search-input /deep/ input {
            border-radius: 20px;
            background-color: #f5f5f5;
        }
        .tlc-search-btn{
            padding: 5px;
            color: orange;
        }
        .tlc-search-area{
            margin: 10px;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 0 5px 1px #eaeaea;
            background-color: white;
            p{
                display: flex;
                align-items: center;
                span:nth-child(1){
                    line-height: 2rem;
                    font-size: 0.8rem;
                    color: #ff7802;
                    font-weight: bold;
                    margin-right: 5px;
                }
                span:nth-child(2){
                    color: black;
                }
            }
            .tlc-search-tag{
                margin: 5px;
            }
        }
    }
</style>
<template>
    <div class="tlc-search-main">
        <div class="tlc-search-option">
            <a-input v-model="values" autofocus="autofocus" placeholder="搜索" class="tlc-search-input" @click="goType('2')">
                <a-icon slot="prefix" type="search" style="color: rgba(0,0,0,.25)"/>
            </a-input>
            <a-button type="link" class="tlc-search-btn" @click="goHome">取消</a-button>
        </div>
        <div class="tlc-search-area">
            <p><span>|</span><span>大家都在搜</span><a-icon type="down" style="position:absolute;right:20px"/></p>
            <a-tag class="tlc-search-tag" color="blue" v-for="item in aTags">{{item}}</a-tag>
        </div>
        <div class="tlc-search-area">
            <p><span>|</span><span>搜索历史</span><a-icon type="delete" style="position:absolute;right:20px"/></p>
            <a-tag class="tlc-search-tag" color="orange" v-for="item in uTags">{{item}}</a-tag>
        </div>

    </div>
</template>

<script>
    export default {
        name: "search",
        data(){
          return{
              values:"",
              aTags:['保养','健康','医学讲堂','安全用药','体检','血常规','心血管'],
              uTags:['保养']
          }
        },
        watch:{
            values(o){

            }
        },
        methods:{
            goHome(){
                this.$router.push("/")
            }
        }
    }
</script>

