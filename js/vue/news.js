import Vue from "vue";
import Axios from "axios";

new Vue({
    el: "#news",
    data: {
        post: []
    },
    created() {
        this.fetch();
    },
    methods: {
        fetch() {
            Axios.get('https://mag.digle.tokyo/wp-json/wp/v2/posts?category=1&per_page=3').then(res => {
                console.log(res);
                this.post.push(res);
            });
        }
    }
})