import { $t } from "@/plugins/i18n";
import { myball } from "@/router/enums";

export default {
  path: "/myball",
  redirect: "/myball/index",
  meta: {
    icon: "ri:beer-line",
    title: $t("menus.pureMyball"),
    rank: myball
  },
  children: [
    {
      path: "/myball/index",
      name: "Myball",
      component: () => import("@/views/my-ball/index.vue"),
      meta: {
        title: $t("menus.pureMyball")
      }
    }
  ]
} satisfies RouteConfigsTable;
