<style lang="scss" scoped>
    .tlc-bar-main {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        border-bottom: 1px solid #eaeaea;

        .tlc-bar-icon {
            font-size: 1.5rem;
        }

        .tlc-bar-search {
            width: 80%;
        }

        /*父组件渗透子组件样式*/
        .tlc-bar-search /deep/ input {
            border-radius: 20px;
        }
    }
</style>
<template>
    <div class="tlc-bar-main">
        <a-icon type="appstore" class="tlc-bar-icon" @click="goType('1')"/>
        <a-input v-model="values" placeholder="搜索" class="tlc-bar-search" @click="goType('2')">
            <a-icon slot="prefix" type="search" style="color: rgba(0,0,0,.25)"/>
        </a-input>
        <a-icon type="bell" class="tlc-bar-icon" @click="goType('3')"/>
    </div>
</template>

<script>
    export default {
        name: "ToolBar",
        data() {
            return {
                values: "",
            }
        },
        watch: {
            values(o) {
                console.log(o)
                this.$emit()
            }
        },
        methods: {
            goType(o) {
                switch (o) {
                    case "1":
                        this.$router.push('/classification')
                        break;
                    case "2":
                        this.$router.push('/search')
                        break;
                    case "3":
                        this.$router.push('/message')
                        break;


                }
            }
        }
    }
</script>


