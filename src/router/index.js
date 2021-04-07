import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Client from "../views/Client.vue";
import Suppliers from "../views/Suppliers.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/clients",
    name: "Clients",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "clientcontainer" */ "../views/ClientContainer.vue"
      ),
  },
  {
    path: "/client/:name",
    name: "Client",
    component: Client,
  },
  {
    path: "/suppliers",
    name: "Suppliers",
    component: Suppliers,
  },
  {
    path: "/warehouse",
    name: "Warehouse",
    component: () =>
      import(/* webpackChunkName: "warehouse" */ "../views/Warehouse.vue"),
  },
  // {
  //   path: "/warehouse/painting",
  //   name: "Painting",
  //   component: () =>
  //     import(/* webpackChunkName: "painting" */ "../views/Painting.vue"),
  // },
  // {
  //   path: "/warehouse/tools",
  //   name: "Tools",
  //   component: () =>
  //     import(/* webpackChunkName: "tools" */ "../views/Tools.vue"),
  // },
  {
    path: "/shop",
    name: "Shop",
    component: () => import(/* webpackChunkName: "shop" */ "../views/Shop.vue"),
  },
  {
    path: "/shop/groceries",
    name: "Groceries",
    component: () =>
      import(/* webpackChunkName: "groceries" */ "../views/Groceries.vue"),
  },
  {
    path: "/shop/frozen-food",
    name: "FrozenFood",
    component: () =>
      import(/* webpackChunkName: "frozenfood" */ "../views/FrozenFood.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
