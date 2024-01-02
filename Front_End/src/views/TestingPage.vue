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
        {title: "Haikyuu", image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Haiky%C5%AB_Volume_1.jpg"},
        {title: "Spy x Family", image: "https://upload.wikimedia.org/wikipedia/en/5/51/Spy_Family_vol_1.jpg"},
        {title: "Hunter x Hunter", image: "https://upload.wikimedia.org/wikipedia/en/e/e8/Hunter_%C3%97_Hunter_vol._1.png"},
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