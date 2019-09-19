import Vue from "Vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)


import router from "./router/index"
import App from "./App.vue"

new Vue({
    el: "#app",
    router: router,
    render: h => h(App)
})