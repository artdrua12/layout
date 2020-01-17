<template>
  <div id="app">
    <default/>
  </div>
</template>

<script>
import Default from './layout/Default';
import Frame from './Frame'
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Default,
    Frame
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0px;
}
</style>
