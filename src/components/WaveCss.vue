<style lang="scss" scoped>
    @keyframes move_wave {
        0% {
            transform: translateX(0) translateZ(0) scaleY(1)
        }
        50% {
            transform: translateX(-25%) translateZ(0) scaleY(0.55)
        }
        100% {
            transform: translateX(-50%) translateZ(0) scaleY(1)
        }
    }

    .waveWrapper {
        overflow: hidden;
    }

    .waveWrapperInner {
        position: absolute;
        width: 100%;
        overflow: hidden;
        height: 100%;
        bottom: -1px;
        background-image: linear-gradient(to top, #e46d27 20%, #d44813 80%);
    }

    .bgTop {
        z-index: 15;
        opacity: 0.5;
    }

    .bgMiddle {
        z-index: 10;
        opacity: 0.75;
    }

    .bgBottom {
        z-index: 5;
    }

    .wave {
        position: absolute;
        left: 0;
        width: 200%;
        height: 100%;
        background-repeat: repeat no-repeat;
        background-position: 0 bottom;
        transform-origin: center bottom;
    }

    .waveTop {
        background-image: url("../../static/images/wave-top.png");
        background-size: 50% auto;
    }

    .waveAnimation .waveTop {
        animation: move-wave 3s;
        -webkit-animation: move-wave 3s;
        -webkit-animation-delay: 1s;
        animation-delay: 1s;
    }

    .waveMiddle {
        background-image: url("../../static/images/wave-mid.png");
        background-size: 50% auto;
    }

    .waveAnimation .waveMiddle {
        animation: move_wave 10s linear infinite;
    }

    .waveBottom {
        background-image: url("../../static/images/wave-bot.png");
        background-size: 50% auto;
    }

    .waveAnimation .waveBottom {
        animation: move_wave 15s linear infinite;
    }
</style>
<template>
    <div class="waveWrapper waveAnimation">
        <div class="waveWrapperInner bgTop">
            <div class="wave waveTop"></div>
        </div>
        <div class="waveWrapperInner bgMiddle">
            <div class="wave waveMiddle"></div>
        </div>
        <div class="waveWrapperInner bgBottom">
            <div class="wave waveBottom"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WaveCss"
    }
</script>


