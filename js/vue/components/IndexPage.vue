<template>
    <div>
        <div class="tp-News">
            <div id="swiper-top" class="tp-News_Slider">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide
                        v-for="slide in swiperData"
                        :key="slide.url"
                    >
                        <img :src="slide.url">
                    </swiper-slide>
                </swiper>
            </div>
            <div class="tp-News_ListContainer">
                <div class="tp-News_List"
                v-for="post in posts"
                :key="post.id"
                >
                    <p class="tp-News_Date">{{formatDate(post.date_gmt)}}</p>
    		        <a class="tp-News_Title" v-bind:href="post.link" target="_blank">{{post.title.rendered}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue"
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
            swiperData: [
                {
                    url: 'https://sukezane.github.io/img/top-1.jpg'
                },
                {
                    url: 'https://sukezane.github.io/img/top-2.jpg'
                },
                {
                    url: 'https://sukezane.github.io/img/top-3.jpg'
                },
                {
                    url: 'https://sukezane.github.io/img/top-4.jpg'
                },
            ]
        }
    },
    created() {
        this.fetch();
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
        fetch() {
            Axios.get('https://mag.digle.tokyo/wp-json/wp/v2/posts?category=1&per_page=3').then(res => this.posts = this.posts.concat(res.data));
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