<template>
  <ul class="upper-nav">
    <li class="item">
      <router-link to="/" class="nav-link" exact :style="{color: f_color__primary}">
        <i class="fas fa-chart-bar sidenav-icon"></i>
        <span class="desc" :class="{'hide': miniNav}">Products</span>
      </router-link>
    </li>
    <li class="item">
      <a href="#" class="nav-link" :style="{color: f_color__primary}">
        <i class="fas fa-chart-line sidenav-icon"></i>
        <span class="desc" :class="{'hide': miniNav}">Performance</span>
      </a>
    </li>
    <li class="item">
      <a href="#" class="nav-link" :style="{color: f_color__primary}">
        <i class="fas fa-chart-area sidenav-icon"></i>
        <span class="desc" :class="{'hide': miniNav}">DevOps</span>
      </a>
    </li>
    <li class="item">
      <a href="#" class="nav-link" :style="{color: f_color__primary}">
        <i class="fas fa-hand-holding-usd sidenav-icon"></i>
        <span class="desc" :class="{'hide': miniNav}">Business</span>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ['miniNav'],
  computed: mapState(["themeName", "f_color__primary"]),
}
</script>



