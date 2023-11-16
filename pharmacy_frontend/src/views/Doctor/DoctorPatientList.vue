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
  <a-table
    :pagination="pagination"
    :columns="columns"
    :data="data"
    @row-click="handleRowClick"
  />
</template>

<script>
import { IconUser } from "@arco-design/web-vue/es/icon";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { onMounted, ref, watch } from "vue";

export default {
  name: "DoctorPatientList",
  components: {
    IconUser,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const account = ref("");
    const pagination = { pageSize: 11 };
    const columns = [
      {
        title: "患者ID",
        dataIndex: "patientID",
        sortable: {
          sortDirections: ["ascend", "descend"],
        },
      },
      {
        title: "患者姓名",
        dataIndex: "patientName",
      },
      {
        title: "患者性别",
        dataIndex: "patientSex",
      },
      {
        title: "患者年龄",
        dataIndex: "patientAge",
        sortable: {
          sortDirections: ["ascend", "descend"],
        },
      },
      {
        title: "挂号时间",
        dataIndex: "registerTime",
        sortable: {
          sortDirections: ["ascend", "descend"],
        },
      },
      {
        title: "药品有效期",
        dataIndex: "m_expire",
        sortable: {
          sortDirections: ["ascend", "descend"],
        },
      },
    ];
    const handleRowClick = (row) => {
      console.log(row);
      router.push({
        path: "/doctorPrescription",
        query: { PatientId: row.patientID },
      });
    };
    const data = ref([]);

    onMounted(() => {
      //   account.value = route.query.DoctorId;
      account.value = store.state.user.loginUser.userName;
      data.value = [
        {
          patientID: "1",
          patientName: "张三",
          patientSex: "男",
          patientAge: "20",
          registerTime: "2021-06-01",
        },
        {
          patientID: "2",
          patientName: "李四",
          patientSex: "母",
          patientAge: "200",
          registerTime: "2023-06-01",
        },
      ];
    });
    return {
      account,
      pagination,
      columns,
      data,
      handleRowClick,
    };
  },
};
</script>
