<template>
  <nav class="side-menu" @click="closeSideMenu($event)"
  :style="{backgroundColor: g_color__primary, border: '1px solid ' + g_color__third}"
  >
    <ul class="upper-part">
      <li>
        <logo-type ref="mini-nav" :class="{'align-item': miniNav}" :miniNav="miniNav" :style="{fill:m_color__primary}"/>
        <profile-card ref="mini-nav" :miniNav="miniNav" :style="{color: f_color__primary}"/>
        <upper-nav ref="mini-nav" :miniNav="miniNav"/>
      </li>
    </ul>
    <ul class="down-part">
      <down-nav :miniNav="miniNav"/>
    </ul>
  </nav>
</template>

<script>
import logoType from "./upper-components/logo-type/logo-type.vue";
import profileCard from "./upper-components/profile-card/profile-card.vue";
import upperNav from "./upper-components/upper-nav/upper-nav.vue";
import downNav from "./down-components/down-nav/down-nav.vue";

import { mapState } from "vuex";
export default {
  components: {
    logoType,
    profileCard,
    upperNav,
    downNav
  },
  props: ['miniNav'],
  computed: mapState(["themeName", "f_color__primary", "g_color__primary", "g_color__third", "m_color__primary"]),
  methods: {
    closeSideMenu(e) {
      const sideNav = document.querySelector(".side-menu");
      //const hamburger = document.querySelector(".hamburger");
      //console.log(this.checkMini);

      if (sideNav !== e.target || !sideNav.contains(e.target)) {
        sideNav.classList.toggle("open");
        //hamburger.classList.toggle("active");
      } else {
        sideNav.classList.toggle("open");
        //hamburger.classList.toggle("active");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.side-menu {
  user-select: none;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  top: 0;
  right: 100%;

  z-index: 10;

  transition: .3s all ease-in-out;

  &.open {
    right: 0;
  }
}

@media screen and (min-width: 960px) {
  .side-menu {
    position: unset;
    height: 100%;
    overflow: hidden;
    transition: none;

    &.align-item {
        display: flex;
        flex-direction: column;
        //align-items: center;
        text-align: center;
        //width: 100%;
    }
  }
}
</style>




