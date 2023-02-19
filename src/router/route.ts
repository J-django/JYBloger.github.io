import type { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    name: "index",
    path: "/index",
    component: () => import("@/pages/index.vue"),
  },
  {
    name: "about",
    path: "/about",
    component: () => import("@/pages/about.vue"),
  },
];
