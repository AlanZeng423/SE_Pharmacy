<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-if="route.path.startsWith('/doctor')">
      <router-view />
    </template>
    <template v-if="route.path.startsWith('/admin')">
      <router-view />
    </template>
    <template v-if="route.path.startsWith('/login')">
      <router-view />
    </template>
    <template v-else>
      <LoginLayout />
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import UserLayout from "@/Layout/UserLayout.vue";
import DoctorLayout from "@/Layout/DoctorLayout.vue";
import AdminLayout from "@/Layout/AdminLayout.vue";
import LoginLayout from "@/Layout/LoginLayout.vue";

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
}
</style>
