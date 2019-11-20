<style lang="scss" scoped>
    .tlc-nav-main {
      display: flex;
      align-items: center;
      .tlc-bar-icon{
        color: black;
        margin:0 8px;
        background-color: white;
      }
        .topNav {
            width: 100%;
            overflow: hidden;
            font: 1rem/2rem hiragino sans gb, microsoft yahei, simsun;
            border-bottom: 1px solid #f8f8f8;
            color: #3c3c3c;
        }

        .swiper-slide {
            width: 3rem;
            text-align: center;

            span {
                transition: all .3s ease;
                display: block;
            }
        }

        .active {
            span {
                transform: scale(1.1);
                color: #FF2D2D;
            }
        }

    }
</style>
<template>
    <div class="tlc-nav-main">
        <swiper class="topNav" :options="swiperOption" ref="mySwiper" @tap="onTap">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in menu_List" :class="ids===index?'active':''">
                <span>{{item.name}}</span>
            </swiper-slide>
        </swiper>
        <a-icon type="menu" class="tlc-bar-icon"/>
    </div>
</template>

<script>

    export default {
        name: "TopNav",
        data() {
            return {
                ids: 0,
                menu_List: [
                    {id: 0, name: "推荐"},
                    {id: 1, name: "休闲"},
                    {id: 2, name: "营销"},
                    {id: 3, name: "职场"},
                    {id: 4, name: "外语"},
                    {id: 5, name: "金融"},
                    {id: 6, name: "书吧"},
                    {id: 7, name: "管理"},
                    {id: 8, name: "科技"},
                    {id: 9, name: "企业"}
                ],
                swiperOption: {
                    // some swiper options/callbacks
                    // 所有的参数同 swiper 官方 api 参数
                    // ...
                    freeMode: true,
                    freeModeMomentumRatio: 0.5,
                    slidesPerView: 'auto',
                    resistanceRatio: 0.7,
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        methods: {
            onTap() {
                event.stopPropagation()
                this.ids = this.swiper.clickedIndex
                this.swiper.slideTo(this.ids, 1000, false)
                var swiperWidth =this.swiper.width
                console.log(w)
                this.swiper.setTranslate()
            }
        },
        mounted() {
            //当前swiper对象
            console.log('this is current swiper instance object', this.swiper)
        }
    }
</script>


