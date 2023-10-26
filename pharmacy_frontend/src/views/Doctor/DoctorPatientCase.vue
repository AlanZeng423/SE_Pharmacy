<template>
  <!-- <a-space> -->
  <!-- <h3></h3>
  <h3></h3>
  <h3></h3> -->
  <list :size="small">
    <template #header> List title </template>
    <a-list-item>患者ID: {{ p_id }}</a-list-item>
    <a-list-item>患者姓名: {{ p_id }}</a-list-item>
    <a-list-item>患者年龄: {{ p_id }}</a-list-item>
  </list>
  <!-- </a-space> -->
  <a-table :pagination="pagination" :columns="columns" :data="data" />
</template>

<script>
import { IconUser } from "@arco-design/web-vue/es/icon";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { onMounted, ref, watch } from "vue";
export default {
  name: "DoctorPatientList",
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
    const data = ref([]);
    onMounted(() => {
      account.value = store.state.user.loginUser.userName;
      p_id.value = route.query.PatientId;
    });

    return {
      account,
      p_id,
      columns,
      data,
      pagination,
    };
  },
};
</script>
