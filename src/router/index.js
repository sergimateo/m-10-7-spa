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
