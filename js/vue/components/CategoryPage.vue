<template>
    <div class="sw-Product is-sticky">
        <h2 class="sw-Product_Headline">{{ $route.params.categoryName }}</h2>
         <div class="clearfix" v-html="$route.params.categoryItems">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>