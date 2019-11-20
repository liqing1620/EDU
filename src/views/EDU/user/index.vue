<style lang="scss" scoped>
    .tlc-user-main {
        .tlc-user-icon {
            padding: 10px 10px 30px 10px;
            font-size: 1.5rem;
            background-color: white;
            display: flex;
            justify-content: space-between;
        }

        .tlc-user-header {
            padding: 10px;
            background-color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;

            img {
                border-radius: 50%;
                width: 3rem;
                height: 3rem;
            }

            .tlc-user-header-p {
                margin-left: 10px;
                margin-bottom: 0;
                flex: 1;
                display: flex;
                flex-direction: column;

                span:nth-child(1) {
                    font-weight: bold;
                }

                span:nth-child(2) {
                    font-size: 0.5rem;
                }
            }
        }

        .tlc-user-level {
            display: flex;
            justify-content: space-between;
            background-color: white;
            text-align: center;
            padding-top: 20px;

            p {
                width: 33.3333333%;
                display: flex;
                flex-direction: column;

                span:nth-child(1) {
                    font-weight: bold;
                }
            }
        }

        .tlc-user-package {
            margin: 10px 0;
            background-color: white;
            padding: 10px;

            p:nth-child(1) {
                display: flex;
                justify-content: space-between;
            }

            .tlc-user-package-card {
                display: flex;
                justify-content: space-between;

                .tlc-user-package-card-p {
                    width: 45%;
                    background-color: rgba(197, 196, 195, 0.5);
                    border-radius: 5px;
                    padding: 10px;
                    p{
                        margin: 0;
                    }
                }
                /deep/ svg{
                    width: 1.5rem;
                    height: 1.5rem;
                }
                span{
                    margin-left: 10px;
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    small:nth-child(1){
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }
                    small:nth-child(2){
                        display: flex;
                        justify-content: space-between;
                      font-size: 0.5rem;
                    }
                }
            }
        }
        .tlc-user-options{
            background-color: white;
            padding: 10px;
            p{
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid #eaeaea;
                padding-bottom: 10px;
                span:nth-child(1){
                    font-size: 1rem;
                    color: black;
                }
                span:nth-child(2){
                    font-size: 0.5rem;
                    font-weight: lighter;
                }
            }
        }
    }

</style>
<template>
    <div class="tlc-user-main">
        <div class="tlc-user-icon">
            <a-icon type="appstore" @click="goType('1')"/>
            <a-icon type="bell" @click="goType('3')"/>
        </div>
        <div class="tlc-user-header">
            <!--           <img :src="user.avator===''?'../../static/images/empty.svg':''" alt="">-->
            <img src="../../../../static/images/my_icon_head.png" alt="">
            <p class="tlc-user-header-p">
                <span>{{user.name}}</span>
                <span>{{user.sign===''?'暂无签名':user.sign}}</span>
            </p>
        </div>
        <div class="tlc-user-level">
            <p><span>{{user.honor}}</span><span>荣誉</span></p>
            <p><span>Lv.{{user.level}}</span><span>等级</span></p>
            <p><span>{{user.integral}}</span><span>积分</span></p>
        </div>
        <div class="tlc-user-package">
            <p>
                <span style="font-weight: bold;color: black">我的钱包</span>
                <a-icon type="right"/>
            </p>
            <div class="tlc-user-package-card">
                <div class="tlc-user-package-card-p">
                    <p>
                        <icon-font type="icon-card"></icon-font>
                        <span>
                            <small>0</small>
                            <small>我的卡包</small>
                        </span>
                    </p>
                </div>
                <div class="tlc-user-package-card-p">
                    <p>
                        <icon-font type="icon-package"></icon-font>
                        <span>
                            <small>0</small>
                            <small>我的已购</small>
                        </span>
                    </p>
                </div>
            </div>
            <div class="tlc-user-level">
                <p><span>{{user.honor}}</span><span>米粒</span></p>
                <p><span>{{user.level}}</span><span>乐点</span></p>
                <p><span>{{user.integral}}</span><span>优惠券</span></p>
            </div>
        </div>
        <div class="tlc-user-options" >
            <p v-for="item in options"><span>{{item}}</span> <a-icon type="right"/></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                user: {
                    name: '泰乐宝0001',
                    sign: '',
                    avator: '',
                    honor: '2',
                    level: '1',
                    integral: '1',
                },
                options:['我的乐圈','安全中心','意见反馈','设置']
            }
        }
    }
</script>



