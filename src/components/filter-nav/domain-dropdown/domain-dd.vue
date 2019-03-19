<template>
  <div class="drop-down f-wrap" @click.prevent="dropItems = !dropItems" :style="{backgroundColor: g_color__secondary, color: f_color__primary}">
    <span class="placeholder" ref="placeholder">select</span>
    <div
      class="arrow"
      :style="{'border-color': f_color__primary + ' transparent transparent transparent'}"
    ></div>

    <ul class="drop-down-list" v-if="dropItems">
      <li class="item" @click="selectOption($event)" :style="{backgroundColor: g_color__secondary, color: f_color__primary}">www.domain.pl</li>
      <li class="item" @click="selectOption($event)" :style="{backgroundColor: g_color__secondary, color: f_color__primary}">www.domain2.pl</li>
    </ul>

  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState([
    "themeName",
    "f_color__primary",
    "g_color__secondary"
  ]),
  data() {
    return {
      dropItems: false
    };
  },
  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.dropItems = false;
      }
    },
    selectOption(e) {
      this.$refs.placeholder.textContent = e.target.textContent;
    }
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  }
};
</script>

<style lang="scss" scoped>
@import "./domain-dd.scss";
</style>


