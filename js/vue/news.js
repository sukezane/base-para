import Vue from "vue";
import Axios from "axios";

new Vue({
    el: "#news",
    data: {
        posts: []
    },
    created() {
        this.fetch();
    },
    methods: {
        fetch() {
            Axios.get('https://mag.digle.tokyo/wp-json/wp/v2/posts?category=1&per_page=3').then(res => {
                console.log(res);
                this.posts = this.posts.concat(res.data);
            });
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
})