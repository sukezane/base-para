<template>
    <div class="sw-Product is-sticky">
        <h2 class="sw-Product_Headline">{{ $route.params.categoryName }}</h2>
         <div class="clearfix" v-html="this.catgory.items">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            category: {
                items: null
            }
        }
    },
    methods: {
        async fetchCategory() {
            const res = await Axios.get("https://paragoods.thebase.in/load_items/categories/"+ this.$route.params.categoryId +"/1/user_paragoods_5d0c5a11862e1/0",{
                dataType: 'html'
            });
            this.category.items = res.data;
        }
    }
}
</script>