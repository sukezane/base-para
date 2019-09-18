import Vue from "Vue"

import IndexPage from "./components/IndexPage.vue";

new Vue({
    el: "#app-home",
    render: h => h(IndexPage)
})