<style lang="scss" scoped>
    .tlc-layout-main {
        width: 100%;
        .tlc-layout-footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            padding: 5px 0;
            z-index: 100000;
        }
    }

</style>
<template>
    <div class="tlc-layout-main">
        <a-layout>
            <a-layout-content class="tlc-layout-content">
                <router-view/>
            </a-layout-content>
            <a-layout-footer class="tlc-layout-footer">
                <tab-menu></tab-menu>
            </a-layout-footer>
        </a-layout>

    </div>

</template>

<script>
    export default {
        name: "TlcLayout"
    }
</script>


