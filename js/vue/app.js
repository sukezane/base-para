import Vue from "Vue"
import VueRouter from "vue-router"
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)


import App from "./App.vue"
import Home from "./components/IndexPage.vue"
import About from "./components/AboutPage.vue"
import Category from "./components/CategoryPage.vue"


const router = new VueRouter({
    routes: [
      {
        path: "/",
        name: "Home",
        component: Home
      },
      {
        path: "/about",
        name: "About",
        component: About
      },
      {
        path: "/categories/:categoryId",
        name: "Category",
        component: Category
      }
    ],
    mode: "history",
    // base: "",

    // Prevents window from scrolling back to top
    // when navigating between components/views
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
  })


new Vue({
    el: "#app",
    router: router,
    render: h => h(App)
})