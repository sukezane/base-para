import Vue from "vue";
import Axios from "axios";

new Vue({
    el: "#mainContent",
    data: {

    },
    created() {
        this.fetchPruducts();
    },
    methods: {
        fetchPruducts() {
            Axios.get('https://paragoods.thebase.in/load_items/categories/1803273/1/user_paragoods_5d0c5a11862e1/0',{
                responseType: 'document'
            }).then(res => {
                console.log(res);
                
            });
        }
    }
})