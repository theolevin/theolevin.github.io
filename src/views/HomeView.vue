<script lang="ts">
  import { ref, defineComponent } from 'vue';
  import VueEasyLightbox from 'vue-easy-lightbox';
  import art from '../data/art';

  export default defineComponent({
    components: { VueEasyLightbox },
    data() {
      return {
        art
      };
    },
    setup() {
      const visibleRef = ref(false);
      const indexRef = ref(0);
      const imgsRef = ref(art);

      const onShow = () => {
        visibleRef.value = true;
      }

      const show = (index: number) => {
        indexRef.value = index;
        onShow();
      }

      const onHide = () => (visibleRef.value =false);

      return {
        visibleRef,
        indexRef, 
        imgsRef,
        show,
        onHide
      }
    }
  })
</script>

<template>
  <main>
    <div v-for="(piece, index) in art" key="index" class="thumbnail" @click="show(index)">
      <img :src="piece.src" />
    </div>

    <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide">

    </vue-easy-lightbox>
  </main>
</template>

<style scoped>
main { display: flex; flex-wrap: wrap; }
.thumbnail img { max-height: 200px; padding: 14px; }

</style>