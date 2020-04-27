<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: "home.vue"
    }
</script>

<style scoped lang="less">
    .mint-swipe {
        height: 300px;
    }
    .mint-swipe-item:nth-child(1) {
        background: url("../../image/muwu.jpg");
        /*background-color: red;*/
    }

    .mint-swipe-item:nth-child(2) {
        background: url("../../image/shuijiao.jpg");
        /*background-color: blue;*/
    }
    .mint-swipe-item:nth-child(3) {
        background: url("../../image/yuantiao.jpg");
        /*background-color: yellow;*/
    }
</style>
