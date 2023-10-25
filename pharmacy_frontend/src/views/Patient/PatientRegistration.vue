<template>
  <div id="PatientRegistration">
    <a-form :model="searchParams" layout="inline">
      <a-form-item field="title" label="医生姓名" style="min-width: 280px">
        <a-input v-model="searchParams.title" placeholder="请输入医生姓名" />
      </a-form-item>
      <!--      <a-form-item field="id" label="可预约" style="min-width: 280px">-->
      <!--        <a-input v-model="searchParams.id" placeholder="请输入病历编号" />-->
      <!--      </a-form-item>-->
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
      <template #optional="{ record }">
        <a-button @click="handleClick">Open Modal</a-button>
        <a-modal
          v-model:visible="visible"
          @ok="handleOk"
          @cancel="handleCancel"
        >
          <template #title> Title</template>
          <div>{{ record.id }}</div>
        </a-modal>
      </template>
    </a-table>
    <a-button @click="handleClick" status="success">预约</a-button>
    <a-modal
      v-model:visible="visible"
      @ok="handleOk"
      @cancel="handleCancel"
      width="auto"
    >
      <template #title> 预约医生</template>
      <div>
        <a-form
          :model="form"
          :style="{ width: '600px' }"
          @submit="handleSubmit"
        >
          <a-form-item field="name" tooltip="请输入病人姓名" label="姓名">
            <a-input
              v-model="form.name"
              placeholder="please enter patient's name..."
            />
          </a-form-item>
          <a-form-item field="age" tooltip="请输入病人年龄" label="年龄">
            <a-input
              v-model="form.age"
              placeholder="please enter patient's age..."
            />
          </a-form-item>
          <a-form-item field="situation" tooltip="请输入病人情况" label="状况">
            <a-input
              v-model="form.situation"
              placeholder="please enter your post..."
            />
          </a-form-item>
          <a-form-item field="time" tooltip="请选择预约时间" label="预约时间">
            <a-time-picker
              v-model="form.time"
              defaultValue="00:00"
              format="HH:mm"
              :hide-disabled-options="true"
              :step="{
                hour: 1,
                minute: 30,
                second: 60,
              }"
              :disabledHours="
                () => [
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 12, 13, 18, 19, 20, 21, 22, 23,
                ]
              "
              style="width: 194px"
            />
          </a-form-item>
          <a-form-item field="isRead">
            <a-checkbox v-model="form.isRead"> 我已仔细阅读</a-checkbox>
          </a-form-item>
          <a-form-item>
            <a-button
              @click="
                () =>
                  this.$notification.warning(
                    '请检查预约信息，如果没有问题请在“我已仔细阅读处”打钩!'
                  )
              "
              v-if="form.isRead == false"
            >
              Submit
            </a-button>
            <a-button html-type="submit" v-if="form.isRead == true"
              >Submit
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import message from "@arco-design/web-vue/es/message";

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
    title: "医生姓名",
    dataIndex: "title",
  },
  {
    title: "医生状态",
    slotName: "GetDrug",
  },
  {
    title: "预约人数",
    slotName: "createTime",
  },
  {
    slotName: "optional",
  },
];

//model 对话框所需要的东西
const visible = ref(false);
const handleClick = () => {
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
};

const form = reactive({
  name: "",
  situation: "",
  age: "",
  time: "",
  isRead: false,
});
const handleSubmit = (data) => {
  console.log(data);
  if (
    form.name == "" ||
    form.situation == "" ||
    form.age == "" ||
    form.time == ""
  ) {
    message.error("预约失败，请仔细检查提交信息不能为空");
  } else {
    // todo 提交预约信息
    message.success("预约成功！");
  }
};
</script>

<style scoped>
#PatientRegistration {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
