import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  console.log("登陆用户信息", store.state.user.loginUser);
  let loginUser = store.state.user.loginUser;
  //如果之前没登陆过，自动登录
  if (!loginUser || !loginUser.userRole) {
    // 加 await 是为了等用户登录成功之后，再执行后续的代码，异步变同步
    await store.dispatch("user/getLoginUser");
    loginUser = store.state.user.loginUser;
  }
  //上面是希望用户尽量登录，

  //因为可能存在依旧没有登录的情况，所以需要下面的判断。。。非常的严谨
  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
  // 要跳转的页面必需要登陆
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    // 如果没登陆，跳转到首页，选择登录
    if (
      !loginUser ||
      !loginUser.userRole ||
      loginUser.userRole === ACCESS_ENUM.NOT_LOGIN
    ) {
      if (needAccess === ACCESS_ENUM.USER) {
        next(`/login/user?redirect=${to.fullPath}`);
        return;
      } else if (needAccess === ACCESS_ENUM.DOCTOR) {
        next(`/login/doctor?redirect=${to.fullPath}`);
        return;
      } else if (needAccess === ACCESS_ENUM.ADMIN) {
        next(`/login/admin?redirect=${to.fullPath}`);
        return;
      }
    }
    // 如果已经登陆了，但是权限不足，也跳转到未登录页面
    if (!checkAccess(loginUser, needAccess)) {
      next("/");
      //todo:弹一个权限不足
      return;
    }
  }
  next();
});
