<template>
  <a-row id="globalHeader" class="grid-demo" align="center" :wrap="false">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
        style="text-align: left"
        default-expanded-keys
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/pharmacyLogo.png" />
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in visibleRoutes" :key="item.path"
          >{{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="60px">
      <div class="title-bar">{{ store.state.user?.loginUser?.userName }}</div>
    </a-col>
  </a-row>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import AccessEnum from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

const route = useRoute();
const router = useRouter();
const store = useStore();
const visibleRoutes = computed(() => {
  return route.matched[0].children.filter((item, idex) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    if (
      !checkAccess(store.state.user.loginUser, item?.meta?.access as string)
    ) {
      return false;
    }
    return true;
  });
});

const doMenuClick = (key: string) => {
  // eslint-disable-next-line no-undef
  router.push({
    path: key,
  });
};

// 更新路由后同步更新菜单栏
const selectedKeys = ref([route.path]);
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

//测试状态更新,经测试OK
setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "殷洪洋",
    userRole: AccessEnum.USER,
  });
}, 3000);
</script>
<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.logo {
  height: 48px;
}

.userImage {
  height: 36px;
}

.title {
  color: #444;
  margin-left: 16px;
}
</style>
