<template>
  <div class="input-container">
    <a-space direction="vertical" size="large">
      <a-space style="font-size: 24px">患者注册</a-space>
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

      <a-input-password
        v-model="confirmPassword"
        :style="{ width: '320px' }"
        placeholder="再次输入密码以确认"
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
        <a-button :style="{ width: '150px' }" type="primary" @click="register"
          >注册
        </a-button>
        <a-button :style="{ width: '150px' }" @click="refreshPage"
          >取消
        </a-button>
      </a-space>
    </a-space>
  </div>
</template>

<script>
import { IconUser } from "@arco-design/web-vue/es/icon";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  name: "RegisterPatient",
  components: { IconUser },
  setup() {
    //     const router = useRouter();
    const inputAccount = ref("");
    const inputTelNum = ref("");
    const inputPassword = ref("");
    const confirmPassword = ref("");
    const register = () => {
      if (
        inputAccount.value === "" ||
        inputTelNum.value === "" ||
        inputPassword.value === ""
      ) {
        alert("请输入完整信息");
        return;
      }

      if (inputPassword.value !== confirmPassword.value) {
        alert("两次输入的密码不一致");
        return;
      }
    };

    //   const data = {
    //     account: inputAccount.value,
    //     telNum: inputTelNum.value,
    //     password: inputPassword.value,
    //   };

    //   fetch("/api/registerAdmin", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   })
    //     .then((res) => res.json())
    //     .then(
    //       (result) => {

    //         if (result.code === 200) {
    //           alert("注册成功");
    //           router.push("/login");
    //         } else {
    //           alert("注册失败");
    //         }
    //       }
    //     )
    //     .catch((error) => {
    //       alert("请求失败");
    //     });

    return {
      inputAccount,
      inputTelNum,
      inputPassword,
      register,
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
