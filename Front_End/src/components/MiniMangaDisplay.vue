<template>
  <div>
    <div class="d-flex border border-danger">
      <div class="p-2">
        <span><img src="../assets/images/Spy_x_Family.jpg" alt="Spy x Family" /></span>
        <span><img src="../assets/images/Yuru_Camp.jpg" alt="Yuru Camp" /></span>
        <span><img src="../assets/images/Haikyuu.jpg" alt="Haikyuu" /></span>
        <span><img src="../assets/images/Hunter_x_Hunter.jpg" alt="Hunter x Hunter" /></span>
        <span><img src="../assets/images/One_Piece.jpg" alt="One Piece" /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniMangaDisplay",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
img {
  max-width: 160px;
  max-height: 220px;
}
</style>
