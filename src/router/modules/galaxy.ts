import { $t } from "@/plugins/i18n";
import { galaxy } from "@/router/enums";

export default {
  path: "/galaxy",
  redirect: "/galaxy/index",
  meta: {
    icon: "fa-solid:beer",
    title: $t("menus.pureGalaxy"),
    rank: galaxy
  },
  children: [
    {
      path: "/galaxy/index",
      name: "Galaxy",
      component: () => import("@/views/galaxy/index.vue"),
      meta: {
        title: $t("menus.pureGalaxy")
      }
    }
  ]
} satisfies RouteConfigsTable;
