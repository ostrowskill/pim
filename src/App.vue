<template>
  <div id="app">
    <mobile-menu/>
    <core/>
  </div>
</template>

<script>
import Core from "./core/Core";
import mobileMenu from "./core/mobile-menu/mobile-menu";
export default {
  components: { Core, mobileMenu }
};
</script>


<style lang="scss">
@import "./scss/_shared.scss";
</style>
