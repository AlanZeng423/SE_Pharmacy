<template>
  <div id="PatientCaseList">
    <a-form :model="searchParams" layout="inline">
      <a-form-item field="id" label="病历编号" style="min-width: 280px">
        <a-input v-model="searchParams.id" placeholder="请输入病历编号" />
      </a-form-item>
      <a-form-item field="title" label="医生姓名" style="min-width: 280px">
        <a-input
          v-model="searchParams.doctorName"
          placeholder="请输入医生姓名"
        />
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
      <template #GetDrug="{ record }">
        <a-space wrap>
          <a-tag v-if="record.GetDrug == 1">
            <a-tag color="arcoblue">
              <template #icon>
                <icon-check-circle-fill />
              </template>
              已取药
            </a-tag>
          </a-tag>
          <a-tag v-if="record.GetDrug == 1">
            <a-tag color="red">未取药</a-tag>
          </a-tag>
        </a-space>
      </template>
      <template #createTime="{ record }">
        {{ moment(record.createTime).format("YYYY-MM-DD") }}
      </template>
      <!--      <template #optional="{ record }">-->
      <!--        <a-button type="primary" @click="viewCase(record)">查看病历</a-button>-->
      <!--      </template>-->
    </a-table>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import moment from "moment";
import message from "@arco-design/web-vue/es/message";

const store = useStore();
const router = useRouter();
const tableRef = ref();
const dataList = ref([]);
const total = ref(0);
const caseId = ref(10001);
/**
 * 控制分页显示大小 —— 一页有几个元素 & 当前是第几页
 */
// todo: 定义为查询也样式 如ref<PatientQueryRequest>
// const searchParams = ref<CaseQueryRequest>({
const searchParams = ref({
  id: undefined,
  userId: store.state.user?.loginUser?.userId,
  doctorName: "",
  pageSize: 8,
  current: 1,
});

/**
 * 加载数据
 */
const loadData = async () => {
  // todo 应用分页获取本人的病历列表
  // const res = await CaseController.getCaseByUser(
  //   searchParams.value
  // );
  // if (res.code === 200) {
  //   dataList.value = res.data.records;
  //   total.value = res.data.total;
  // } else {
  //   message.error("加载失败：" + res.message);
  // }
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

// // todo: 使用Openapi 包括启动上面的插槽
// const viewCase = ( case: Case ) =>{
//   router.push({path: "/patientCase", query: {caseId: caseId.value}});
// }
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
