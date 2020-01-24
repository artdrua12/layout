<template>
  <div class="basisVuePage grid">
    <div class="topTitle flex">
      <div v-for="item in 2" :key="item" class="topTitle__block">topTitle {{item}}</div>
    </div>
    <div class="midleTitle grid">
      <div v-for="item in 4" :key="item" class="midleTitle__block">midleTitle {{item}} midleTitle</div>
    </div>
    <div class="bottomTitle grid">
      <div
        v-for="item in 4"
        :key="item"
        class="bottomTitle__block"
      >bottomTitleTitle {{item}} midleTitle</div>
    </div>
    <div class="content grid">
      <!-- <div v-for="item in 12" :key="item" class="content__block">{{item}}</div> -->

      <div v-for="i in 3" :key="i" class="test">
        <input v-model="array[i]" />
        <span>input{{i}} : {{array[i]}}</span>
      </div>
      <button @click="changeArray">changeArray[1]Array</button>

      <div v-for="i in 3" :key="i+'obj'" class="test">
        <input v-model="obj[i]" />
        <span>input{{i}} : {{obj[i]}}</span>
      </div>
      <!-- <div class="test">
        <input v-model="obj.a" />
        <span> {{obj.a}}</span>
      </div>-->
      <button @click="changeObj">changeObj[1]</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: [],
      obj: {
        1: "a2",
        2: "b2",
        3: "c2"
      }
    };
  },
  methods: {
    changeArray() {
      // this.array[1] = "new value"
      this.$set(this.array, 1, "new value array");
    },
    changeObj() {
      this.obj[2] = "new value obj";
    }
  }
};
</script>

<style scoped>
.basisVuePage {
  height: 100vh;
  grid-template-rows: repeat(3, auto) 1fr;
  grid-row-gap: 10px;
}
.topTitle__block {
  width: 150px;
  height: 40px;
  background-color: darkorange;
  margin-right: 7px;
}

.midleTitle {
  grid-template-columns: 1fr repeat(3, minmax(min-content, max-content));
  grid-gap: 20px;
}
.midleTitle__block {
  height: 60px;
  background-color: rgb(224, 136, 28);
}
.midleTitle__block:nth-of-type(1) {
  display: flex;
}
.bottomTitle {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 3px;
}
.bottomTitle__block {
  height: 20px;
  background-color: darkorange;
}
.content {
  padding: 30px;
  background-color: greenyellow;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.test {
  display: flex;
  flex-direction: column;
}
</style>

