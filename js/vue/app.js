import Vue from "Vue"
import Axios from "axios"
import router from "./router"
import { App } from "./App.vue"

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})