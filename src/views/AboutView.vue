<script lang="ts">
  import aboutPage from '../data/about';
  export default {
    data() {
      return { 
        aboutPage
      }
    }
  };
</script>
<template>
  <div class="about" v-html="aboutPage.body">
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
