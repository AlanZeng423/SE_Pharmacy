import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  //login
  {
    path: "/login",
    component: () => import("../Layout/LoginLayout.vue"),
    children: [
      {
        path: "/loginAdmin",
        name: "LoginAdmin",
        component: () => import("../views/Login/LoginAdmin.vue"),
      },
      {
        path: "/loginDoctor",
        name: "LoginDoctor",
        component: () => import("../views/Login/LoginDoctor.vue"),
      },
      {
        path: "/loginPatient",
        name: "LoginPatient",
        component: () => import("../views/Login/LoginPatient.vue"),
      },
    ],
  },
  //register
  {
    path: "/register",
    component: () => import("../Layout/LoginLayout.vue"),
    children: [
      {
        path: "/registerAdmin",
        name: "RegisterAdmin",
        component: () => import("../views/Register/RegisterAdmin.vue"),
      },
      {
        path: "/registerDoctor",
        name: "RegisterDoctor",
        component: () => import("../views/Register/RegisterDoctor.vue"),
      },
      {
        path: "/registerPatient",
        name: "RegisterPatient",
        component: () => import("../views/Register/RegisterPatient.vue"),
      },
    ],
  },
  //admin
  {
    path: "/admin",
    component: () => import("../Layout/AdminLayout.vue"),
    children: [
      {
        path: "/adminPharmacy",
        name: "AdminPharmacy",
        component: () => import("../views/Admin/AdminPharmacy.vue"),
      },
      {
        path: "/adminInfo",
        name: "AdminInfo",
        component: () => import("../views/Admin/AdminInfo.vue"),
      },
    ],
  },
  //doctor
  {
    path: "/doctor",
    component: () => import("../Layout/DoctorLayout.vue"),
    children: [
      {
        path: "/doctorPatientCase",
        name: "DoctorPatientCase",
        component: () => import("../views/Doctor/DoctorPatientCase.vue"),
      },
      {
        path: "/doctorPatientList",
        name: "DoctorPatientList",
        component: () => import("../views/Doctor/DoctorPatientList.vue"),
      },
      {
        path: "/doctorPrescription",
        name: "DoctorPrescription",
        component: () => import("../views/Doctor/DoctorPrescription.vue"),
      },
    ],
  },
  //patient
  {
    path: "/patient",
    component: () => import("../Layout/PatientLayout.vue"),
    children: [
      {
        path: "/patientCase",
        name: "病历详情",
        component: () => import("../views/Patient/PatientCase.vue"),
        meta: {
          hideInMenu: true,
        },
      },
      {
        path: "/patientCaseList",
        name: "病历列表",
        component: () => import("../views/Patient/PatientCaseList.vue"),
      },
      {
        path: "/patientRegistration",
        name: "挂号/预约",
        component: () => import("../views/Patient/PatientRegistration.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
