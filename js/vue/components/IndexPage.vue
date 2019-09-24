<template>
    <div>
        <div class="tp-News">
            <div id="swiper-top" class="tp-News_Slider">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide
                        v-for="post in posts"
                        :key="post.id"
                    >
                        <img :src="post['_embedded']['wp:featuredmedia'][0].link" />
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
            </div>
            <div class="tp-News_ListContainer">
                <ul class="tp-News_ListWrapper">
                    <li class="tp-News_List"
                    v-for="post in posts"
                    :key="post.id">
                        <p class="tp-News_Date">{{formatDate(post.date_gmt)}}</p>
                        <a class="tp-News_Title" v-bind:href="post.link" target="_blank">{{post.title.rendered}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div v-for="category in categories" :key="category.id" class="sw-Product sw-Product-index">
		    <h2 class="sw-Product_Headline">{{ category.name }}</h2>
            <div class="clearfix" v-html="category.items">
            </div>
            <div class="u-text-center">
                <router-link :to="{ name: 'Category', params: { categoryId: category.id, categoryName: category.name }}">
                    <button v-if="category.name === 'NEW ITEM'" class="sw-Product_MoreButton">新着一覧へ</button>
    		        <button v-else class="sw-Product_MoreButton">一覧へ</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from "axios";

export default {
    data() {
        return {
            posts: [],
            swiperOption: {
                slidesPerView: 1,
                centeredSlides: true,
                loop: true,
                effect: 'fade',
                autoplay: {
                    delay: 5000,
                },
                paginationClickable: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            },
            // swiperData: [
            //     {
            //         url: 'https://sukezane.github.io/img/top-1.jpg'
            //     },
            //     {
            //         url: 'https://sukezane.github.io/img/top-2.jpg'
            //     },
            //     {
            //         url: 'https://sukezane.github.io/img/top-3.jpg'
            //     },
            //     {
            //         url: 'https://sukezane.github.io/img/top-4.jpg'
            //     },
            // ],
            categories: []
        }
    },
    created() {
        this.fetchPosts();
        this.fetchCategories();
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //   console.log('this is current swiper instance object', this.swiper)
    //   this.swiper.slideTo(3, 1000, false)
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
       async fetchCategories() {
            const categories = document.getElementById('appsItemCategoryTag').children;
            for(let index = 0; categories.length > index; index++){
                let urlStructure = categories[index].children[0].getAttribute('href').match(/([^\/.]+)/g);
                const categoryId = urlStructure[urlStructure.length - 1];
                const res = await Axios.get("https://paragoods.thebase.in/load_items/categories/"+ categoryId +"/1/user_paragoods_5d0c5a11862e1/0",{
                    dataType: 'html'
                });
                this.categories.push({
                    id: categoryId,
                    name: categories[index].children[0].text,
                    url: categories[index].children[0].getAttribute('href'),
                    items: res.data
                })
            }
        },
        fetchPosts() {
            Axios.get('https://mag.digle.tokyo/wp-json/wp/v2/posts?_embed&category=3665&per_page=3').then(res => this.posts = this.posts.concat(res.data));
        },
        formatDate(dateGmt) {
            const date = new Date(dateGmt);
            const month =
              date.getMonth() < 9
                  ? "0" + (date.getMonth() + 1)
                  : date.getMonth() + 1;
            return date.getFullYear() + '.' + month + '.' + date.getDate();
        }
    }
}
</script>