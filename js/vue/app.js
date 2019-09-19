import Vue from "Vue"

import router from "./router/index"
import App from "./App.vue"

const vm = new Vue({
    el: "#app",
    router,
    render: h => h(App)
})

vm()
