<template>
  <a-space>
    <a-avatar :style="{ backgroundColor: '#3370ff' }">
      <IconUser />
    </a-avatar>
    <a-space>
      <h2>管理员ID: {{ accout }}</h2>
      <a-button type="secondary">
        <router-link to="/home">退出登陆</router-link>
      </a-button>
    </a-space>
    <a-space
      :style="{
        width: '320px',
        display: 'flex',
        justifyContent: 'space-between',
        right: '20px',
        position: 'fixed',
      }"
    >
      <a-button
        :style="{ position: absolute }"
        type="primary"
        @click="handleAdd"
      >
        添加药品
      </a-button>
      <!-- <div v-if="showButtons">
        
      </div> -->
      <a-button
        v-if="showEditButtons"
        :style="{ position: absolute }"
        type="primary"
        @click="handleEdit"
        >修改药品
      </a-button>
      <a-button
        v-if="showDeleteButtons"
        :style="{ position: absolute }"
        type="primary"
        @click="handleDelete"
        >删除药品
      </a-button>
    </a-space>
    <!-- 添加药品 -->
    <a-modal
      v-model:visible="visibleofAdd"
      @submit="handleSubmit"
      @cancel="handleCancel"
    >
      <template #title> 添加药品</template>
      <a-form :model="form" :style="{ width: '100%' }">
        <a-form-item field="medicineName" label="药品名称">
          <a-select
            :options="options"
            :style="{ width: '100%' }"
            placeholder="请选择要添加的药品"
            :allow-search="{ retainInputValue: true }"
          />
        </a-form-item>
        <a-form-item field="medicineAmount" label="药品数量">
          <a-input v-model="form.medicneAmount" placeholder="请输入药品数量" />
        </a-form-item>
        <a-form-item field="medicineExpired" label="药品有效期">
          <a-date-picker style="width: 200px" />
        </a-form-item>
      </a-form>
    </a-modal>
    <!-- 修改药品 -->
    <a-modal
      v-model:visible="visibleofEdit"
      @submit="handleSubmit"
      @cancel="handleCancel"
    >
      <template #title> 修改药品</template>
      <a-form :model="form" :style="{ width: '100%' }">
        <a-form-item field="medicineName" label="药品名称">
          {{ selectedKeys[0] }}
          <!-- 固定值，为选中的那一项 -->
        </a-form-item>
        <a-form-item field="medicineAmount" label="药品数量">
          <a-input v-model="form.medicneAmount" placeholder="请输入药品数量" />
        </a-form-item>
        <a-form-item field="medicineExpired" label="药品有效期">
          <a-date-picker style="width: 200px" />
        </a-form-item>
      </a-form>
    </a-modal>
    <!-- 删除药品 -->
    <a-modal
      v-model:visible="visibleofDelete"
      @submit="handleSubmit"
      @cancel="handleCancel"
    >
      <template #title> 删除药品</template>
      <!-- 确认删除
      <li v-for="item in selectedKeys" :key="item">{{ item }}</li> -->
      <a-list>
        <template #header>确认删除:</template>
        <a-list-item v-for="item in selectedKeys" :key="item"
          >{{ item }}
        </a-list-item>
      </a-list>
    </a-modal>
  </a-space>
  <!-- 表格 -->
  <a-table
    row-key="medicineName"
    v-model:selectedKeys="selectedKeys"
    :pagination="pagination"
    :columns="columns"
    :row-selection="rowSelection"
    :data="data"
  />
</template>

<script>
import { IconUser } from "@arco-design/web-vue/es/icon";
import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";

export default {
  name: "AdminInfo",
  components: {
    IconUser,
  },
  setup() {
    const route = useRoute();
    const accout = ref(route.query.AdminId);
    const selectedKeys = ref([]);
    const rowSelection = ref({
      type: "checkbox",
      showCheckedAll: true,
      onlyCurrent: true,
    });
    const pagination = { pageSize: 11 };
    const columns = [
      {
        title: "药品名称",
        dataIndex: "medicineName",
      },
      {
        title: "药品序号",
        dataIndex: "m_id",
        sortable: {
          sortDirections: ["ascend", "descend"],
        },
      },
      {
        title: "药品库存",
        dataIndex: "m_amount",
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
    const data = ref([]);
    const visibleofAdd = ref(false);
    const visibleofEdit = ref(false);
    const visibleofDelete = ref(false);
    const showEditButtons = ref(false);
    const showDeleteButtons = ref(false);

    const handleAdd = () => {
      visibleofAdd.value = true;
    };
    const handleOk = () => {
      visibleofAdd.value = false;
    };
    const handleCancel = () => {
      visibleofAdd.value = false;
    };

    const handleDelete = () => {
      visibleofDelete.value = true;
    };

    const handleEdit = () => {
      visibleofEdit.value = true;
    };
    const form = ref({
      medicineName: "",
      medicineAmount: "",
      medicineExpire: "",
      medicinePrice: "",
      medicineType: "",
      medicineDesc: "",
      medicinePic: "",
      medicineId: "",
    });

    const options = ref(["奥利司他胶囊", "杰士邦", "杜蕾斯"]);

    const handleSubmit = (data) => {
      data.value = data;
      // TODO: 把数据提交到后端和数据库
    };

    watch(selectedKeys, (newSelectedKeys) => {
      selectedKeys.value = newSelectedKeys;
      console.log(selectedKeys.value);
      if (newSelectedKeys.length === 1) {
        showEditButtons.value = true;
        showDeleteButtons.value = true;
      } else if (newSelectedKeys.length > 1) {
        showDeleteButtons.value = true;
        showEditButtons.value = false;
      } else {
        showDeleteButtons.value = false;
        showEditButtons.value = false;
      }
    });

    onMounted(() => {
      accout.value = route.query.AdminId;
      data.value = [
        //示例:
        {
          medicineName: "阿莫西林",
          m_id: 2,
          m_amount: 10,
          m_expire: "2023-01-01",
        },
        {
          medicineName: "阿莫西林2",
          m_id: 1,
          m_amount: 100,
          m_expire: "2022-09-01",
        },
        {
          medicineName: "阿莫西林3",
          m_id: 4,
          m_amount: 10,
          m_expire: "2022-01-31",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        {
          medicineName: "阿莫西林4",
          m_id: 3,
          m_amount: 10,
          m_expire: "1990-01-01",
        },
        //TODO: 从数据库获取数据
      ];
      // showDeleteAndEditButtons();
      console.log("SELECTED:");
      console.log(selectedKeys.value);
    });

    return {
      accout,
      data,
      columns,
      visibleofAdd,
      visibleofDelete,
      visibleofEdit,
      handleAdd,
      handleCancel,
      handleDelete,
      handleEdit,
      handleOk,
      form,
      handleSubmit,
      options,
      rowSelection,
      selectedKeys,
      pagination,
      showEditButtons,
      showDeleteButtons,
      // showDeleteAndEditButtons,
    };
  },
};
</script>

<style scoped></style>
