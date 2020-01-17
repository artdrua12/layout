<template>
  <div class="globalDefaultWrapper">
    <div class="sidebar">
      <button @click="isCollapse=!isCollapse">Show</button>
      <div>Some teXt</div>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
      >
        <el-submenu v-for="(item,index) in dataMenu" :key="index" :index="`${index}`">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </template>
          <el-menu-item
            v-for="(item2, index2) in item.items"
            :key="index2"
            :index="`${index}-${index2}`"
          >{{item2}}</el-menu-item>
        </el-submenu>
        <div>Some teXt</div>
        <div>Some teXt</div>
      </el-menu>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      dataMenu: [
        {
          icon: "el-icon-location",
          title: "Navigator One",
          items: ["one", "two", "three"]
        },
        { icon: "el-icon-menu", title: "Navigator Two", items: ["one", "two"] },
        {
          icon: "el-icon-document",
          title: "Navigator Three",
          items: ["one", "two", "three"]
        },
        {
          icon: "el-icon-setting",
          title: "Navigator Four",
          items: ["one", "two", "three", "four", "five"]
        },
        {
          icon: "el-icon-location",
          title: "Navigator Five",
          items: ["one", "two", "three"]
        }
      ]
    };
  },
  methods: {}
};
</script>

<style >
.globalDefaultWrapper {
  display: grid;
  grid-template-columns: fit-content(400px) 1fr;
  grid-template-rows: 100vh;
}
.sidebar {
  display: flex;
  flex-direction: column;
  display: grid;
  grid-template-rows: 20px 40px 1fr 40px 20px;
}
.content {
  background-color: blanchedalmond;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>