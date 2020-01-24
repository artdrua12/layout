<template>
  <div class="vpage grid">
    <div class="title grid">
      <h1 v-for="i in 10" :key="i">{{i}}ddd</h1>
    </div>
    <div class="content grid">c</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.vpage {
  grid-template-rows: minmax(5px, 50vh) 1fr;
}
.title {
  overflow: auto;
  background-color: rosybrown;
}
.content {
  background-color: navajowhite;
}
</style>