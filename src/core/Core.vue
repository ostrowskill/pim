<template>
  <div>
    <div id="main-view" class="f-wrap" :style="{backgroundColor : g_color__primary}">
      <div id="left-side">
        <side-menu :miniNav="miniNav" :class="{'align-item': miniNav}"/>
        <unlocker @unlockSidenav="unlockMiniNav($event)" :class="{'show': miniNav}"/>
      </div>

      <div id="seperator" ref="seperator"></div>

      <div id="right-side">
        <transition name="view-transition" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import sideMenu from "./side-menu/side-menu";
import unlocker from "./side-menu/unlocker/unlocker";

import { mapState } from "vuex";

export default {
  name: "core",
  components: {
    sideMenu,
    unlocker
  },
  computed: {
    ...mapState(["g_color__primary"])
  },
  data() {
    return {
      miniNav: false
    };
  },
  methods: {
    unlockMiniNav(update) {
      this.miniNav = !update;
    },
    resetSideMenu() {
      document.querySelector("#left-side").style.width = "450px";
    },
    dragElement(element, direction, handler) {
      const drag = { x: 0, y: 0 };
      const delta = { x: 0, y: 0 };
      handler
        ? (handler.onmousedown = dragMouseDown)
        : (element.onmousedown = dragMouseDown);

      function dragMouseDown(e) {
        drag.x = e.clientX;
        drag.y = e.clientY;
        document.onmousemove = onMouseMove;
        document.onmouseup = () => {
          document.onmousemove = document.onmouseup = null;
        };
      }

      let onMouseMove = e => {
        const currentX = e.clientX;
        const currentY = e.clientY;

        delta.x = currentX - drag.x;
        delta.y = currentY - drag.y;

        const offsetLeft = element.offsetLeft;
        const offsetTop = element.offsetTop;

        const left = document.getElementById("left-side");
        const right = document.getElementById("right-side");
        let leftWidth = left.offsetWidth;
        let rightWidth = right.offsetWidth;
        if (direction === "H") {
          // Horizontal
          element.style.left = offsetLeft + delta.x + "px";

          leftWidth += delta.x;
          rightWidth -= delta.x;
        }
        drag.x = currentX;
        drag.y = currentY;
        left.style.width = leftWidth + "px";
        right.style.width = rightWidth + "px";

        //change display depending on width
        if (offsetLeft < 180) {
          //set mini-nav
          this.miniNav = true;
          //change witdth of left side + right side
          left.style.width = 70 + "px";
          right.style.width = 100 + "%";
        }
      };
    }
  },
  mounted() {
    this.dragElement(this.$refs.seperator, "H");
  }
};
</script>


<style lang="scss" scoped>
#main-view {
  height: 100vh;
}

#seperator {
  display: none;
}

#right-side {
  width: 100%;
  padding: 0 0.5rem;
  overflow-x: hidden;
}

@media screen and(min-width: 960px) {
  #seperator {
    display: inline-block;
    min-width: 0.5rem;
    cursor: col-resize;
    background-color: rgba(0, 0, 0, 0.025);
  }

  #left-side {
    display: block;
    position: relative;
    width: 30rem;
  }

  #right-side {
    user-select: none;
    overflow-y: scroll;
  }

  #right-side::-webkit-scrollbar {
    //background-color: rgba(0, 0, 0, 0.025);
    width: .5rem;
  }
  // #right-side::-webkit-scrollbar-track {
  //   //background-color: rgba(0, 0, 0, 0.025);
  // }
  #right-side::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0 , 0, .05);
    border-radius: 10px;
    border: 1px solid rgba(0, 0 , 0, .1);
  }
}
</style>

