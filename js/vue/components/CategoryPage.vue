<template>
    <div :class="{ 'sw-Product-Category' : $route.params.categoryName }" class="sw-Product is-sticky">
        <h2 class="sw-Product_Headline">{{ category.name }}</h2>
         <div class="clearfix" v-html="this.category.items">
        </div>
    </div>
</template>

<script>
import Axios from "axios";

export default {
    data() {
        return {
            category: {
                name: null,
                items: null
            }
        }
    },
    created() {
        this.fetchCategory();
    },
    methods: {
        async fetchCategory() {
            const res = await Axios.get("https://paragoods.thebase.in/load_items/categories/"+ this.$route.params.categoryId +"/1/user_paragoods_5d0c5a11862e1/0",{
                dataType: 'html'
            });
            this.category.items = res.data;

            const categories = document.getElementById('appsItemCategoryTag').children;
            for(let index = 0; categories.length > index; index++){
                let urlStructure = categories[index].children[0].getAttribute('href').match(/([^\/.]+)/g);
                const categoryId = urlStructure[urlStructure.length - 1];
                if (categoryId === this.$route.params.categoryId) {
                    this.category.name = categories[index].children[0].text;
                }
            }
        }
    }
}
</script>