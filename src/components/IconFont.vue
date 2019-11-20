<style lang="scss" scoped>

</style>
<template>
    <my-icon :type=type />
</template>

<script>
    import { Icon } from 'ant-design-vue';
    const MyIcon = Icon.createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_1133658_7brlvo9rdov.js', // 在 iconfont.cn 上生成
    });
    export default {
        name: "IconFont",
        components:{
            'my-icon': MyIcon,
        },
        props:{
            type:{
                type:String,
                default:"icon-jinshengfuwu"
            }
        }
    }
</script>


