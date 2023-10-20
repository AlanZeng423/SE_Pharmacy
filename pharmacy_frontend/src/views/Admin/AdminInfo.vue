<template>
  <a-place>
    <a-avatar :style="{ backgroundColor: '#3370ff' }">
      <IconUser />
    </a-avatar>
    <h1>账号: {{ accout }}</h1>
    <p>段落文本</p>
  </a-place>
</template>

<script>
import { IconUser } from "@arco-design/web-vue/es/icon";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

export default {
  name: "AdminInfo",
  // components: {
  //   IconUser,
  // },
  setup() {
    const route = useRoute();
    const accout = ref(route.query.AdminId);

    onMounted(() => {
      accout.value = route.query.AdminId;
    });

    return {
      accout,
    };
  },
};
</script>

<style scoped></style>
