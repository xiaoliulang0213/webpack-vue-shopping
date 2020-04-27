import $ from 'jquery'

//Vue
import Vue from 'vue'
import VueRouter from 'vue-router'

import main from './vue/main.vue'
import {Header, Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//引入MUI样式
import './lib/mui/css/mui.min.css'
//引入MUI扩展图标
import './lib/mui/css/icons-extra.css'

//引入路由模块
import router from "./js/router";

Vue.use(VueRouter);

$(function () {
    var vm = new Vue({
        el: '#example',
        render: function (h) {
            return h(main);
        },
        router: router
    });
})
