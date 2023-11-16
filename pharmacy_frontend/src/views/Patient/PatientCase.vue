<template>
  <div id="PatientCase">
    <h1>No.{{ caseId }}病历详情：</h1>
    <a-space direction="vertical" size="large" fill>
      <a-descriptions :data="data" :column="{ xs: 5, md: 3, lg: 1 }">
      </a-descriptions>
    </a-space>
    <h3>药品列表</h3>
    <a-card>
      <!--            v-for-->
      <div>
        <a-card class="card-demo" hoverable :title="drug.name">
          <div>
            药物作用:{{ drug.function }}<br />
            服用禁忌:{{ drug.banned }}<br />
            服用剂量:{{ drug.dosage }}<br />
            是否为处方药:{{ drug.prescription }}<br />
          </div>
        </a-card>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
// import { routes } from "@/router/index";
// import { useRoute, useRouter } from "vue-router";
// import { computed, ref, onMounted } from "vue";
// import { useStore } from "vuex";
// import checkAccess from "@/access/checkAccess";
// import AccessEnum from "@/access/accessEnum";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import message from "@arco-design/web-vue/es/message";

const route = useRoute();
const name = ref("name");
const sex = ref();
const doctor = ref();
const advice = ref();
const drugs = ref([]);
const caseId = ref(route.query.caseId);
const total = ref(0);
/**
 * 根据病历Id获取病历详情 name、sex、advice
 */
// const loadData = async () => {
//   //todo:获取指定病历的信息
//   const res = CasesController.getCase(caseId.value);
//   if (res.code === 0) {
//     name.value = res.data.name;
//     sex.value = res.data.sex;
//     doctor.value = res.data.doctor;
//     advice.value = res.data.advice;
//   }
// };

/**
 *  获取该病历中的药品清单 病例编号caseId
 */
// const getDrugs = async () => {
//   //todo: 获取指定病历Id的药物
//   const res = await DrugController.getdrugs(caseId.value);
//   if (res.code === 0) {
//     drugs.value = res.data.records;
//     total.value = res.data.total;
//   } else {
//     message.error("加载失败：" + res.message);
//   }
// };
// onMounted(() => {
//   loadData();
//   getDrugs();
// });
// 暂时代替使用 改成描述列表，和上面一样的样式
const drug = ref({
  id: "No.10001",
  brand: "药厂",
  name: "阿莫西林",
  function: "治感冒",
  dosage: "一天两次一次三粒",
  banned: "忌辛辣",
  prescription: "处方药",
  picture: "1111",
});

const data = [
  {
    label: "姓名",
    value: name.value,
  },
  {
    label: "性别",
    value: sex.value,
  },
  {
    label: "主治医生",
    value: doctor.value,
  },
  {
    label: "医嘱",
    value: advice.value,
  },
];
</script>

<style scoped>
#PatientCase {
  max-width: 1200px;
  margin: 0 auto;
}

.card-demo {
  transition-property: all;
}

.card-demo:hover {
  transform: translateY(-4px);
}
</style>
