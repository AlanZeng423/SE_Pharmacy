<template>
  <a-space>
    <a-avatar :style="{ backgroundColor: '#3370ff' }">
      <IconUser />
    </a-avatar>
    <a-space>
      <h2>医生账号: {{ account }}</h2>
      <a-button type="secondary">
        <router-link to="/home">退出登陆</router-link>
      </a-button>
    </a-space>
  </a-space>
  <div>
    <!-- <h3></h3>
    <h3></h3>
    <h3></h3> -->
    <a-descriptions
      :data="dataOfList"
      title="患者信息"
      layout="inline-horizontal"
    />
    <!-- <a-descriptions
      :data="data"
      title="患者信息"
      :column="{ xs: 1, md: 3, lg: 4 }"
    > -->
    <!-- <a-descriptions-item v-for="item of data">
        <a-tag>{{ item.value }}</a-tag>
      </a-descriptions-item> -->
    <!-- </a-descriptions> -->
    <!-- <a-list :size="small">
      <template #header> List title </template>
      <a-list-item>患者ID: {{ p_id }}</a-list-item>
      <a-list-item>患者姓名: {{ p_id }}</a-list-item>
      <a-list-item>患者年龄: {{ p_id }}</a-list-item>
      <a-list-item>患者症状: {{ p_id }}</a-list-item>
    </a-list> -->
    <a-button type="primary">
      <router-link to="/doctorPatientCase">查看过往病例</router-link>
    </a-button>
  </div>
  <div class="input-container">
    <a-form
      :form="form"
      :style="{ width: '600px' }"
      class="input-form"
      auto-label-width
    >
      <a-form-item field="advice" label="医嘱">
        <!-- <a-input v-model="form.advice" placeholder="请输入医嘱" /> -->
        <a-textarea
          v-model="form.advice"
          placeholder="请输入医嘱"
          allow-clear
          auto-size
        />
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { IconUser } from "@arco-design/web-vue/es/icon";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { onMounted, ref, watch } from "vue";

export default {
  name: "DoctorPrecsription",
  components: {
    IconUser,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const account = ref("");
    const p_id = ref("");
    const pagination = { pageSize: 11 };
    const columns = [
      {
        title: "病历ID",
        dataIndex: "caseID",
        sortable: {
          sortDirections: ["ascend", "descend"],
        },
      },
      {
        title: "患者病历",
        dataIndex: "patientCase",
      },
    ];
    const dataOfList = ref([]);
    const dataOfTable = ref([]);
    const form = ref({
      advice: "",
      post: "",
    });
    onMounted(() => {
      account.value = store.state.user.loginUser.userName;
      p_id.value = route.query.PatientId;
      dataOfList.value = [
        {
          label: "患者ID",
          value: p_id.value,
        },
        {
          label: "患者姓名",
          value: "张三",
        },
        {
          label: "患者年龄",
          value: "20",
        },
      ];
    });

    return {
      account,
      p_id,
      columns,
      dataOfList,
      dataOfTable,
      pagination,
      form,
    };
  },
};
</script>

<style>
.input-container {
  background-color: #ffffff; /* 背景颜色 */
  border: 1px solid #ccc; /* 边框样式 */
  border-radius: 5px; /* 圆角 */
  padding: 3%; /* 内边距 */
  width: 90%;
  margin: 0 auto; /* 居中对齐 */
  display: flex;
  flex-direction: column;
  align-items: center; /* 垂直居中 */
}

.input-form {
  width: 100%; /* 让内部表单自适应外部容器 */
}
</style>
