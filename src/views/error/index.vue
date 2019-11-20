<style lang="scss" scoped>
    .error-page {
        width: 100%;
        text-align: center;

        img {
            margin-top: 150px;
            width: 40rem;
        }
        strong {
            line-height: 200px;
            font-size: 5rem;
        }
        p{
            font-size: 3.5rem;
        }
    }
</style>
<template>
    <div class="error-page">
        <div>
            <img src="https://zos.alipayobjects.com/rmsportal/UXamdIxYSkXfoVo.jpg" alt="">
        </div>
        <div>
            <strong>Oh!页面未找到</strong>
            <router-link to="/">
                <p>点击跳到首页</p>
            </router-link>
            <p>页面将会在<span style="color: red">{{timeCon}}</span>......后，自动跳到首页</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "error",
        data(){
          return{
              timeCon:"5s"
          }
        },
        mounted() {
            let time=5
            let that=this
          var setTime=setInterval(function () {
                time--
              that.timeCon=`${time}s`

                if (time===0){
                    clearInterval(setTime)
                    that.$router.push({name:'index'})
                }
            },1000)
        }
    }
</script>
