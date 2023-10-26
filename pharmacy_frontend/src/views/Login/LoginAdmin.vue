<template>
  <a-space direction="vertical">
    <a-breadcrumb :routes="routes" />
    <a-breadcrumb :routes="routes">
      <template #item-render="{ route, paths }">
        <a-link :href="paths.join('/')">
          {{ route.label }}
        </a-link>
      </template>
    </a-breadcrumb>
  </a-space>
  <div class="input-container">
    <a-space direction="vertical" size="large">
      <a-space style="font-size: 24px">医院管理系统</a-space>
      <a-avatar :style="{ backgroundColor: '#3370ff' }">
        <IconUser />
      </a-avatar>
      <a-input
        v-model="inputAccount"
        :style="{ width: '320px' }"
        placeholder="请输入账号"
        allow-clear
      >
        <template #prefix>
          <icon-user />
        </template>
      </a-input>
      <a-input
        v-model="inputTelNum"
        :style="{ width: '320px' }"
        placeholder="请输入手机号码"
        allow-clear
      >
        <template #prepend> +86</template>
      </a-input>

      <a-input-password
        v-model="inputPassword"
        :style="{ width: '320px' }"
        placeholder="请输入密码"
        allow-clear
      />

      <a-space
        :style="{
          width: '320px',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 auto',
        }"
      >
        <a-button
          :style="{ width: '100px' }"
          type="primary"
          @click="login(inputAccount)"
          >登陆
        </a-button>
        <a-button :style="{ width: '100px' }" type="outline" @click="toRegister"
          ><router-link to="/registerAdmin">注册</router-link>
        </a-button>
        <a-button :style="{ width: '100px' }" @click="refreshPage"
          >取消
        </a-button>
      </a-space>
    </a-space>
  </div>
</template>

<script>
import { IconUser } from "@arco-design/web-vue/es/icon";
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

export default {
  name: "LoginAdmin",
  components: { IconUser },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const inputAccount = ref("");
    const inputTelNum = ref("");
    const inputPassword = ref("");
    const login = (inputAccount) => {
      if (inputAccount === "") {
        alert("请输入账号");
        return;
      }
      if (inputTelNum.value === "") {
        alert("请输入手机号");
        return;
      }
      if (inputPassword.value === "") {
        alert("请输入密码");
        return;
      }
      router.push({
        path: "/administer",
        query: { AdminId: inputAccount },
      });
    };

    return {
      inputAccount,
      inputTelNum,
      inputPassword,
      route,
      login,
    };
  },
};
</script>

<style>
.input-container {
  background-color: #ffffff; /* 背景颜色 */
  border: 1px solid #ccc; /* 边框样式 */
  border-radius: 5px; /* 圆角 */
  padding: 15px; /* 内边距 */
  width: 360px;
  margin: 0 auto; /* 居中对齐 */
  display: flex;
  flex-direction: column;
  align-items: center; /* 垂直居中 */
}
</style>
