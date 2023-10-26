<template>
  <div id="PatientCaseList">
    <a-form :model="searchParams" layout="inline">
      <a-form-item field="id" label="病历编号" style="min-width: 280px">
        <a-input v-model="searchParams.id" placeholder="请输入病历编号" />
      </a-form-item>
      <a-form-item field="title" label="医生姓名" style="min-width: 280px">
        <a-input v-model="searchParams.title" placeholder="请输入医生姓名" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="doSubmit">查询</a-button>
      </a-form-item>
    </a-form>
    <a-divider size="0" />
    <a-table
      :ref="tableRef"
      :columns="columns"
      :data="dataList"
      :pagination="{
        showTotal: true,
        pageSize: searchParams.pageSize,
        current: searchParams.current,
        total: total,
      }"
      @page-change="onPageChange"
    >
    </a-table>
  </div>
  <div>
    <h3 @click="viewCase">看病历</h3>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const tableRef = ref();
const dataList = ref([]);
const total = ref(0);
const caseId = ref(10001);
/**
 * 控制分页显示大小 —— 一页有几个元素 & 当前是第几页
 */
// todo: 定义为查询也样式 如ref<QuestionQueryRequest>
// const searchParams = ref<PatientQueryRequest>({
const searchParams = ref({
  id: undefined,
  title: "",
  tags: [],
  pageSize: 8,
  current: 1,
});

/**
 * 加载数据
 */
const loadData = async () => {
  // todo 应用分页获取病历列表
  // const res = await
};
/**
 * 当页面初始化的时候，执行loadData 加载数据
 */
onMounted(() => {
  loadData();
});

/**
 * 监听watchEffect中包含的函数的参数的改变，一旦有所变化，就会重新执行这个函数
 * 此处就是监听searchParams的变化
 */
watchEffect(() => {
  loadData();
});
const onPageChange = (page: number) => {
  searchParams.value = {
    ...searchParams.value,
    current: page,
  };
};

/**
 * 搜索题目
 */
const doSubmit = () => {
  //这里需要重置搜索页号
  searchParams.value = {
    ...searchParams.value,
    current: 1,
  };
  loadData();
};

const viewCase = () => {
  router.push({ path: "/patientCase", query: { caseId: caseId.value } });
};

//todo 根据数据库来改变
const columns = [
  {
    title: "病历编号",
    dataIndex: "id",
  },
  {
    title: "医生姓名",
    dataIndex: "title",
  },
  {
    title: "是否取药",
    slotName: "GetDrug",
  },
  {
    title: "创建时间",
    slotName: "createTime",
  },
  {
    slotName: "optional",
  },
];
</script>

<style scoped>
#PatientCaseList {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
