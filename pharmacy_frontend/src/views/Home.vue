<template>
  <div>
    <img width="200" alt="Pharmacy logo" src="../assets/pharmacyLogo.png" />
  </div>
  <br />
  <br />
  <div><a-space style="font-size: 35px">欢迎登陆医院药房系统</a-space></div>
  <br />
  <br />
  <div><a-space style="font-size: 20px">请选择您的身份</a-space></div>
  <br />
  <br />
  <div class="container">
    <a-space
      :style="{
        width: '320px',
        display: 'flex',
        justifyContent: 'space-between',
      }"
    >
      <a-button type="primary">
        <router-link to="/loginAdmin">管理员</router-link>
      </a-button>
      <a-button type="primary">
        <router-link to="/loginPatient">患者</router-link>
      </a-button>
      <a-button type="primary">
        <router-link to="/loginDoctor">医生</router-link>
      </a-button>
    </a-space>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  // components: {

  // },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.container {
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
