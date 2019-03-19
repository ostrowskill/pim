<template>
  <div>
    <button @click="switchTheme('light')" >light</button>
    <button @click="switchTheme('dark')" >dark</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    methods: mapMutations(['switchTheme'])  
}
</script>

