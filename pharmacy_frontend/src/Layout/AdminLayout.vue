<template>
  <div id="AdminLayout">
    <a-layout style="height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer"
        >答辩医院后台管理系统，有问题联系17839391214
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<style scoped>
#AdminLayout {
}

#AdminLayout .header {
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}

#AdminLayout .content {
  background: linear-gradient(to right, #efefef, #ffffff);
  margin-bottom: 16px;
  padding: 20px;
}

#AdminLayout .footer {
  background: #efefef;
  padding: 10px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
