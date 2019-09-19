import Vue from "Vue"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from "./router/index"
import IndexPage from "./components/IndexPage.vue"
Vue.use(VueAwesomeSwiper)

new Vue({
    el: "#app-home",
    router,
    render: h => h(IndexPage)
})