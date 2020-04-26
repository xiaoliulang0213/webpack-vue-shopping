import $ from 'jquery'

import Vue from 'vue'

import main from './vue/main.vue'
import {Header} from 'mint-ui'
Vue.component(Header.name, Header);

//引入MUI样式
import './lib/mui/css/mui.min.css'

$(function () {
    var vm = new Vue({
        el: '#example',
        render: function (h) {
            return h(main);
        }
    });
})
