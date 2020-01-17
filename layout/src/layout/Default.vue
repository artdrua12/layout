<template>
  <div class="globalDefaultWrapper">
    <div class="sidebar">sidebar</div>
    <div class="content">content</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style >
.globalDefaultWrapper{
    height: 100vh;
    display: grid;
    grid-template-columns:auto 1fr;
    grid-template-rows: 1fr;
}
.sidebar{
    grid-area: 1/1/2/2;
    background-color: brown;
}
.content{
    background-color: blanchedalmond;
}
</style>