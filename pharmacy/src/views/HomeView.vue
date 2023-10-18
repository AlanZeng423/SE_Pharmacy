<template>
  欢迎来到本医院<br />
  请选择：<br />
  <div @click="goUserLogin">用户</div>
  <div @click="goDoctorLogin">医生</div>
  <div @click="goAdminLogin">管理员</div>
</template>

<style>
#clo {
  color: #333;
}
</style>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const goUserLogin = () => {
  router.push({ path: "/login/user" });
};
const goDoctorLogin = () => {
  router.push({ path: "/login/doctor" });
};
const goAdminLogin = () => {
  router.push({ path: "/login/admin" });
};
</script>
