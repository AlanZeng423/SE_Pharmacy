<template>
  <div id="loginLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <div>1</div>
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">hello</a-layout-footer>
    </a-layout>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped>
#loginLayout {
  text-align: center;
}

#loginLayout .logo {
  width: 64px;
  height: 64px;
}

#loginLayout .header {
  margin-top: 16px;
  margin-bottom: 16px;
}

#loginLayout .content {
  margin-bottom: 16px;
  padding: 20px;
}

#loginLayout .footer {
  background: #efefef;
  padding: 10px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
