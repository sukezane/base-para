import Vue from "Vue"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import IndexPage from "./components/IndexPage.vue"
Vue.use(VueAwesomeSwiper)

new Vue({
    el: "#app-home",
    render: h => h(IndexPage)
})