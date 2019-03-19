<template>
  <div class="card-carousel">
    <div class="card-img">
      <img :src="currentImage" class="main-picture">
    </div>
    <div class="thumbnails">
      <div
        v-for="(image, index) in  images"
        :key="image.id"
        :class="['thumbnail-image', (activeImage == index) ? 'active' : '']"
        @click="activateImage(index)"
      >
        <img :src="image.url">
      </div>
    </div>
  </div>
</template>

<script>
export default {
props: ['images'],
  data() {
    return {
      activeImage: 0
    };
  },
  computed: {
    currentImage() {
      return this.images[this.activeImage].url;
    }
  },
  methods: {
    activateImage(imageIndex) {
      this.activeImage = imageIndex;
    }
  }
};
</script>

<style lang="scss">


</style>
