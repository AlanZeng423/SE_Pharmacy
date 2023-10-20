<template>
  <div id="loginLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <div>天津大学416医院药房系统</div>
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer"
        >邮箱: 123456@gmail.com | 电话联系: 123345678910</a-layout-footer
      >
    </a-layout>
  </div>
</template>
<script setup lang="ts"></script>

<style>
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
