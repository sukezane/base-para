import Vue from "Vue"

import router from "./router"
import App from "./App.vue"

new Vue({
    render: h => h(App),
    router,
    components: { App }
}).$mount('#app');