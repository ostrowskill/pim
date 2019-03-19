<template>
    <div class="hamburger">
        <div class="stick" @click="openMenu"></div>
    </div>
</template>

<script>
export default {
    methods: {
        openMenu() {
          document.querySelector(".side-menu").classList.toggle("open");  
        }
    }
}
</script>


<style lang="scss" scoped>
@import './hamburger-button.scss';
</style>
