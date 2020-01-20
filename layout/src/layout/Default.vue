<template>
  <div class="globalDefaultWrapper">
    <div class="sidebar">
      <button @click="isCollapse=!isCollapse">Show</button>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
      >
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">Investigtions</span>
        </el-menu-item>
      </el-menu>

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
      </el-menu>

      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
      >
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">Text</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">Text</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">Text</span>
        </el-menu-item>
      </el-menu>
    </div>

    <div class="content">
      <BasisVuePage />
    </div>
  </div>
</template>

<script>
import BasisVuePage from "./BasisVuePage";
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
  methods: {},
  components: {
    BasisVuePage
  }
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
  grid-template-rows: auto 56px 1fr auto;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 300px;
  min-height: auto;
}
.el-menu:nth-of-type(2) {
  overflow-y: auto;
}
</style>