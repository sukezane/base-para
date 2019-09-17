<template>
    <div id="main-content">
        <transition
        name="page-transition" mode="out-in" appear>
          <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    
}
</script>