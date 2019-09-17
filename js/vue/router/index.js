import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const router = new Router({
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
        path: "/:categoryId",
        name: "Category",
        component: Cateogory
      }
    ],
    mode: "history",
    base: "",

    // Prevents window from scrolling back to top
    // when navigating between components/views
    // scrollBehavior(to, from, savedPosition) {
    //   if (savedPosition) {
    //     return savedPosition
    //   } else {
    //     return { x: 0, y: 0 }
    //   }
    // }
  })

export default router
