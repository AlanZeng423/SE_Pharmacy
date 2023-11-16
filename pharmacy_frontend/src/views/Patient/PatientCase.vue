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

const route = useRoute();
const name = ref("name");
const drugs = ref([]);
const caseId = ref(route.query.caseId);

/**
 * 根据病历Id获取病历详情 name、sex、advice
 */

/**
 * 通过dId找医生名字
 */

/**
 *  获取该病历中的药品清单 病例编号caseId
 */
// todo
// onMounted(() => {});
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
    value: "女",
  },
  {
    label: "主治医生",
    value: "李泰然",
  },
  {
    label: "医嘱",
    value: "注意保暖、多喝热水、少熬夜",
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
