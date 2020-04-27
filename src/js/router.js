import VueRouter from 'vue-router'

//引入Vue组件
import home from '../vue/tabbar/home.vue'
import member from '../vue/tabbar/member.vue'
import car from '../vue/tabbar/car.vue'
import search from '../vue/tabbar/search.vue'

var router = new VueRouter({
    routes: [
        {
            path: "/home",
            component: home
        },
        {
            path: "/member",
            component: member
        },
        {
            path: "/car",
            component: car
        },
        {
            path: "/search",
            component: search
        }
    ],
    linkActiveClass: 'mui-active'
});

export default router;
