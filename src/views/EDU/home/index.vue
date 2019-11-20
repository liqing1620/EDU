<style lang="scss" scoped>
    .tlc-home-main {
        .tlc-home-header {
            position: fixed;
            width: 100%;
            top: 0;
            background: white;
            z-index: 1000;
        }

        .tlc-home-container {
            background-color: #eaeaea;
        }

        .tlc-home-container-tp {
            background-color: #eaeaea;
            text-align: center;
            height: 4.5rem;
            font: 0.8rem/5rem hiragino sans gb, microsoft yahei, simsun;
        }

        .tlc-home-container-bp {
            background-color: #eaeaea;
            text-align: center;
            font: 0.8rem/2rem hiragino sans gb, microsoft yahei, simsun;
        }
    }
</style>
<template>
    <div class="tlc-home-main">
        <p class="tlc-home-container-tp">
            下拉加载中......
        </p>
        <div class="tlc-home-header">
            <tool-bar></tool-bar>
            <top-nav></top-nav>
        </div>
        <div class="tlc-home-container">
            <div class="tlc-home-carousel">
                <base-swiper :banner="dataSource[type].banner"></base-swiper>
            </div>
            <div class="tlc-home-menu">
                <base-menu :menu="dataSource[type].menu"></base-menu>
            </div>
            <div class="tlc-home-list" v-for="item in dataSource[type].list">
                <text-card v-if="item.type==='normal'" :title="item.title" :list="item.list"
                           @list-detail="listDetail"></text-card>
                <text-swiper v-if="item.type==='swiper'" :title="item.title" :list="item.list"
                             @list-detail="listDetail"></text-swiper>
            </div>
        </div>
        <p class="tlc-home-container-bp">已经到底了！</p>
    </div>
</template>

<script>
    import dataSource from "../dataSource";

    export default {
        name: "index",
        data() {
            return {
                type: 'tj',
                dataSource
            }
        },
        methods: {
            listDetail(id, href) {
                window.location.href = href
            }
        }
    }
</script>

