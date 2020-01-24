<template>
  <div class="globalDefaultWrapper grid">
    <div class="sidebar">
      <side-menu />
    </div>
    <vpage class="contentvpage">
      <vpage />
    </vpage>
  </div>
</template>

<script>
import Vpage from "./Vpage";
import SideMenu from "./SideMenu";
export default {
  data() {
    return {};
  },
  components: {
    Vpage,
    SideMenu
  }
};
</script>

<style scoped >
.globalDefaultWrapper {
  grid-template-columns: auto 1fr;
  grid-template-rows: 100vh auto;
  grid-template-areas:
    "sidebar content"
    ". content";
}
.sidebar {
  grid-area: sidebar;
}
.contentvpage {
  grid-area: content;
}
</style>