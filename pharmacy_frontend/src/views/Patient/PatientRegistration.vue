<template>
  <div id="PatientRegistration">
    <a-form :model="searchParams" layout="inline">
      <a-form-item field="name" label="医生姓名" style="min-width: 280px">
        <a-input
          v-model="searchParams.doctorName"
          placeholder="请输入医生姓名"
        />
      </a-form-item>
      <a-form-item field="id" label="医生工号" style="min-width: 280px">
        <a-input v-model="searchParams.id" placeholder="请输入医生工号" />
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
      <template #optional="{ record }">
        <a-button @click="handleClick(record)" status="success">预约</a-button>
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
              <a-form-item field="doctor" label="医生姓名" disabled>
                <a-input v-model="form.doctor" />
              </a-form-item>
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
              <a-form-item
                field="situation"
                tooltip="请输入病人情况"
                label="状况"
              >
                <a-input
                  v-model="form.situation"
                  placeholder="please enter your post..."
                />
              </a-form-item>
              <a-form-item
                field="time"
                tooltip="请选择预约时间"
                label="预约时间"
              >
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
          <a-form-item field="doctorId" label="医生编号" disabled>
            <a-input v-model="form.doctorId" />
          </a-form-item>
          <a-form-item field="doctor" label="医生姓名" disabled>
            <a-input v-model="form.doctor" />
          </a-form-item>
          <a-form-item field="name" label="姓名" disabled>
            <a-input v-model="form.name" />
          </a-form-item>
          <a-form-item field="age" label="年龄" disabled>
            <a-input v-model="form.age" />
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
import { onMounted, reactive, ref, toRaw, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import message from "@arco-design/web-vue/es/message";

const store = useStore();
const router = useRouter();
const tableRef = ref();
const dataList = ref([]);
const total = ref(0);
const caseId = ref(10001);
const name = ref("yhy");
/**
 * 控制分页显示大小 —— 一页有几个元素 & 当前是第几页
 */
// todo: 定义为查询也样式 如ref<QuestionQueryRequest>
// const searchParams = ref<PatientQueryRequest>({
const searchParams = ref({
  doctorName: "",
  id: undefined,
  pageSize: 8,
  current: 1,
});

/**
 * 加载数据
 */
const loadData = async () => {
  // todo 应用分页获取医生列表
  // const res = await DoctorController.getDoctorList(searchParams.value);
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
 * 搜索医生
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
    title: "医生工号",
    dataIndex: "id",
  },
  {
    title: "医生姓名",
    dataIndex: "name",
  },
  {
    title: "医生状态",
    slotName: "state",
  },
  {
    title: "预约人数",
    slotName: "advancedName",
  },
  {
    slotName: "optional",
  },
];

//model 对话框所需要的东西

const form = reactive({
  doctorId: "",
  doctor: "",
  name: "",
  situation: "",
  age: "",
  time: "",
  isRead: false,
});

const visible = ref(false);
const handleClick = async (data: any) => {
  // eslint-disable-next-line no-undef
  const res = await PatientController.getUserInfo(
    store.state.user?.loginUser?.userId
  );
  if (res.code === 200) {
    form.name = res.data.name;
    form.age = res.data.age;
  }
  form.doctor = "YHY";
  form.doctorId = "88044327";
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
};

const handleSubmit = async (data: any) => {
  console.log(data);
  if (
    form.name == "" ||
    form.situation == "" ||
    form.age == "" ||
    form.time == ""
  ) {
    message.error("预约失败，请仔细检查提交信息不能为空");
  } else {
    await SubmitToBE(data);
  }
};

const SubmitToBE = async (data: any) => {
  // todo 提交预约信息
  // eslint-disable-next-line no-undef
  const res = await AppointmentController.newAppointment(
    form.doctorId,
    store.state.user?.loginUser?.userId,
    form.situation,
    form.time
  );
  if (res.code === 200) {
    message.success("预约成功！");
  } else {
    message.error("预约失败，系统错误");
  }
};
</script>

<style scoped>
#PatientRegistration {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
