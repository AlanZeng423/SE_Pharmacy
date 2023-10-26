<!-- <template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->

<template>
  <div id="app">
    <template v-if="route.path.startsWith('/patient')">
      <router-view />
    </template>
    <template v-if="route.path.startsWith('/doctor')">
      <router-view />
    </template>
    <template v-if="route.path.startsWith('/admin')"> <router-view /></template>
    <template v-if="route.path.startsWith('/login')"> <router-view /></template>
    <template v-if="route.path.startsWith('/register')">
      <router-view
    /></template>
    <template v-if="route.path == '/home'"><LoginLayout /> </template>
    <template v-if="route.path == '/'"><LoginLayout /> </template>
    <template v-if="route.path == '/about'"><LoginLayout /> </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import LoginLayout from "./Layout/LoginLayout.vue";

const route = useRoute();
/**
 * 全局初始化函数，有全局单次调用的代码，都可以写在这里
 */
const doInit = () => {
  console.log("hello 欢迎来到我的项目，你好~~~~~~~");
  console.log("联系本团队——https://github.com/AlanZeng423/SE_Pharmacy");
};

onMounted(() => {
  doInit();
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: rgb(0, 0, 0);
}
</style>
