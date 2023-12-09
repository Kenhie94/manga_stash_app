<template>
  <div class="test d-flex">
    <div v-for="manga in mangaArray" :key="manga" class="cont" p-4>
      <MangaQuickView :title="manga.title" :image="manga.image" />
    </div>
  </div>
</template>

<script>
import MangaQuickView from '@/components/MangaQuickView.vue';
export default {
  name: 'MyComponent',
  data() {
    return {
      // Your data properties here
      mangaArray: [
        {title: "Haikyuu", image: "assets/images/Haikyuu.jpg"},
        {title: "Spy x Family", image: "assets/images/Spy_x_Family.jpg"},
        {title: "Hunter x Hunter", image: "assets/images/Hunter_x_Hunter.jpg"},
      ]
    };
  },
  methods: {
    // Your methods here
  },
  components: { MangaQuickView }
};
</script>

<style scoped>
/* Your component-specific styles here */
.test {
  height: 300px;
}

.cont {
  width: 200px;
}
</style>