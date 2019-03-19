<template>
  <!-- upper part -->
  <ul class="down-nav">
    <li class="item">
      <a href="#" class="nav-link" :style="{color: f_color__primary}">
        <i class="far fa-comment-alt sidenav-icon"></i>
        <span class="desc" :class="{'hide': miniNav}">Messages</span>
      </a>
    </li>
    <li class="item">
      <a href="#" class="nav-link" :style="{color: f_color__primary}">
        <i class="fab fa-sistrix sidenav-icon"></i>
        <span class="desc" :class="{'hide': miniNav}">Help</span>
      </a>
    </li>
    <li class="item">
      <router-link to="/settings" class="nav-link" :style="{color: f_color__primary}">
        <i class="fas fa-cogs sidenav-icon"></i>
        <span class="desc" :class="{'hide': miniNav}">Settings</span>
      </router-link>
    </li>
    <!-- separtor -->
    <hr>
    <!-- down part -->
    <ul class="additional-nav f-wrap">
      <li class="item">
        <a href="#" class="nav-link" :style="{color: f_color__primary}">
          <i class="far fa-bell sidenav-icon"></i>
          <span class="desc" :class="{'hide': miniNav}">News</span>
        </a>
      </li>
      <li class="item">
        <a href="#" class="nav-link" :style="{color: f_color__primary}">
          <i class="far fa-window-maximize sidenav-icon"></i>
          <span class="desc" :class="{'hide': miniNav}">Info</span>
        </a>
      </li>
    </ul>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["miniNav"],
  computed: mapState(["themeName", "f_color__primary"])
};
</script>


<style lang="scss" scoped>
hr {
  border: 1px solid rgba($color: #000000, $alpha: 0.1);
  //background-color: rgba($color: #000000, $alpha: 0.1);
}

.f-wrap {
  justify-content: space-between;
}

.additional-nav {
  &.f-wrap {
    flex-wrap: wrap;
    .item {
      flex-grow: 1;
    }
  }
}
</style>

