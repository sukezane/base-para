import Vue from "vue"
import Router from "vue-router"

import Home from "../components/IndexPage.vue"
import About from "../components/AboutPage.vue"
import Category from "../components/CategoryPage.vue"


Vue.use(Router)

const router = new Router({
    routes: [
      {
        path: "/",
        name: "Home",
        component: About
      },
      {
        path: "/about",
        name: "About",
        component: About
      },
      {
        path: "/:categoryId",
        name: "Category",
        component: Category
      }
    ],
    mode: "history",
    base: "",

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

//   const Foo = { template: '<div>foo</div>' }
//   const Bar = { template: '<div>bar</div>' }
  
  // 2. ルートをいくつか定義します
  // 各ルートは 1 つのコンポーネントとマッピングされる必要があります。
  // このコンポーネントは実際の `Vue.extend()`、
  // またはコンポーネントオプションのオブジェクトでも構いません。
  // ネストされたルートに関しては後で説明します
//   const routes = [
//     { path: '/', component: Home },
//     { path: '/about', component: Bar }
//   ]
  
  // 3. ルーターインスタンスを作成して、ルートオプションを渡します
  // 追加のオプションをここで指定できますが、
  // この例ではシンプルにしましょう
//   const router = new Router({
    // routes // `routes: routes` の短縮表記
//   })
  
  // 4. root となるインスタンスを作成してマウントします
  // アプリケーション全体がルーターを認知できるように、
  // ルーターをインジェクトすることを忘れないでください。
//   const app = new Vue({
//     router
//   }).$mount('#app')

export default router
