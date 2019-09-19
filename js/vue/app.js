import Vue from "Vue"

import router from "./router/index"
import App from "./App.vue"

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})