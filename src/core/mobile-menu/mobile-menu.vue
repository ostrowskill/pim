<template>
  <nav class="mobile-menu f-wrap" v-if="window.width < 960" :style="{backgroundColor : m_color__primary}">
      <hamburger />
  </nav>
</template>

<script>
import hamburger from './hamburger/hamburger-button.vue';

import { mapState } from "vuex";
export default {
    components: {hamburger},
  data() {
    return {
      window: {
        width: 0
      }
    };
  },
    computed: {
    ...mapState(['m_color__primary'])
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style lang="scss" scoped>
.mobile-menu {
  background-color: #ddd;
  padding: 1rem;
}
</style>


