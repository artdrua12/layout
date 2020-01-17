<template>
  <div class="frame">
    <div class="sidebar" :class="{'slider':!show}">
      <button @click="show=!show">Click</button>

      <div class="sidebar__fill" v-for="item in 10" :key="item">
        <button>
          <img align="left" width="50px" height="auto" src="./assets/logo.png" alt="logo" />
        </button>
          <h4 v-show="show">text</h4>
      </div>
    </div>
    <div class="title">
      <div v-for="item in 10" :key="item" class="title__block">sometext {{item}}</div>
    </div>
    <div class="content content-size">
      <div v-for="item in 12" :key="item" class="content__block">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>

<style scoped>
.frame {
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 200px 1fr;
  font-size: 2rem;
}
.sidebar {
  width: 370px;
  background-color: antiquewhite;
  grid-area: 1/1/3/2;
  transition: width 0.7s;
  border: 2px solid red;

  display: flex;
  flex-direction: column;
}
.sidebar__fill {
  background-color: beige;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
div.sidebar__fill:nth-of-type(5) {
  margin-top: auto;
}
.title {
  height: 200px;
  top: 0px;
  position: sticky;
  grid-area: 1/2/3/3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background-color: rgba(244, 67, 54, 0.21);
  overflow: auto;
}
.content {
  grid-area: 2/2/3/3;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 10px;
  padding: 10px 0;
}

.slider {
  width: 70px;
}

.title__block {
  border: 1px solid burlywood;
}
.content__block {
  overflow: auto;
  height: 250px;
  background-color: rgb(225, 245, 220);
}

h4 {
  margin: 0px;
}
</style>