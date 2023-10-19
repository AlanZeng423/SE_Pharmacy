import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import UserLayout from "@/Layout/UserLayout.vue";
import UserLoginView from "@/views/login/UserLoginView.vue";
import UserRegisterView from "@/views/login/UserRegisterView.vue";
import UserMedicationRecordView from "@/views/user/UserMedicationRecordView.vue";
import UserRegistrationView from "@/views/user/UserRegistrationView.vue";
import DoctorLayout from "@/Layout/DoctorLayout.vue";
import DoctorLoginView from "@/views/login/DoctorLoginView.vue";
import LoginLayout from "@/Layout/LoginLayout.vue";
import AdminLoginView from "@/views/login/AdminLoginView.vue";
import DoctorAppointedPatientsView from "@/views/doctor/DoctorAppointedPatientsView.vue";
import AdminLayout from "@/Layout/AdminLayout.vue";
import DoctorViewMedicalRecordView from "@/views/doctor/DoctorViewMedicalRecordView.vue";
import AdminViewDoctorView from "@/views/admin/AdminViewDoctorView.vue";
import AdminViewPharmacyView from "@/views/admin/AdminViewPharmacyView.vue";
import DoctorViewPharmacyView from "@/views/doctor/DoctorViewPharmacyView.vue";
import AccessEnum from "@/access/accessEnum";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "登录",
    component: LoginLayout,
    children: [
      {
        path: "/login/user",
        name: "用户登录",
        component: UserLoginView,
      },
      {
        path: "/login/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
      {
        path: "/login/doctor",
        name: "医生登录",
        component: DoctorLoginView,
      },
      {
        path: "/login/admin",
        name: "管理员登录",
        component: AdminLoginView,
      },
    ],
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    children: [
      {
        path: "/user/medicalRecord",
        name: "病历管理(对应每次看病)",
        component: UserMedicationRecordView,
        meta: {
          hideInMenu: true,
        },
      },
      {
        path: "/user/registration",
        name: "用户挂号预约",
        component: UserRegistrationView,
        meta: {
          access: AccessEnum.USER,
        },
      },
    ],
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/doctor",
    name: "医生",
    component: DoctorLayout,
    children: [
      {
        path: "/doctor/AppointedPatients",
        name: "预约病人",
        component: DoctorAppointedPatientsView,
        meta: {
          access: AccessEnum.DOCTOR,
        },
      },
      {
        path: "/doctor/ViewMedicalRecord",
        name: "查看病历",
        component: DoctorViewMedicalRecordView,
      },
      {
        path: "/doctor/viewPharmacy",
        name: "开药方(要隐藏)",
        component: DoctorViewPharmacyView,
        meta: {
          hideInMenu: true,
        },
      },
    ],
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/admin",
    name: "管理员",
    component: AdminLayout,
    children: [
      {
        path: "/admin/viewDoctor",
        name: "查看医生",
        component: AdminViewDoctorView,
      },
      {
        path: "/admin/viewPharmacy",
        name: "查看药房",
        component: AdminViewPharmacyView,
      },
    ],
  },
  {
    path: "/",
    name: "主页",
    component: HomeView,
  },
];
