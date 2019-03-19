<template>
  <div class="unlocker" @click="unlockSidenav" :style="{backgroundColor: g_color__third, color: f_color__primary}">
    <i class="fas fa-angle-right"></i>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      reset: true
    }
  },
  computed: mapState(["themeName", "g_color__third", "f_color__primary"]),
  methods: {
    unlockSidenav() {
      this.$emit('unlockSidenav', this.reset);
      document.querySelector("#left-side").style.width = "30rem";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./unlocker.scss";
</style>

