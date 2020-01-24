<template>
  <div class="globalDefaultWrapper grid">
    <side-menu class="sidebar"></side-menu>
    <vpage class="content"></vpage>
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

<style >
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
.content {
  grid-area: content;
}
</style>