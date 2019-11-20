<style lang="scss" scoped>
    .tlc-carousel-main {
        padding: 15px 10px;
        background-color: white;
        .acarousel{
            margin: 0 auto;
            width: 100%;
            height: 8rem;
        }
        img {
            border-radius: 10px;
            width: 100%;
            height: 8rem;
        }
    }
</style>
<template>
    <div class="tlc-carousel-main">
        <a-carousel autoplay class="acarousel">
            <div v-for="item in banner">
                <img :src="item"/>
            </div>
        </a-carousel>
    </div>
</template>

<script>
    export default {
        name: "banner",
        props:{
          banner:{
              type:Array,
              default:function () {
                  return[
                      "http://www.tailecheng.com/images/banner3.jpg",
                      "http://www.tailecheng.com/images/banner1.jpg",
                      "http://www.tailecheng.com/images/banner2.jpg",
                  ]
              }
          }
        },
        data(){
            return{

            }
        }
    }
</script>


