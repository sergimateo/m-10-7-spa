<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/clients">Clients</router-link> |
      <router-link to="/suppliers">Suppliers</router-link> |
      <!-- <router-link
        class="dropdown dropdown-toggle"
        id="navbarWarehouseDropdown"
        role="button"
        to="/warehouse"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Warehouse

        <div class="dropdown-menu" aria-labelledby="navbarWarehouseDropdown">
          <a class="dropdown-item">Tools</a>
          <a class="dropdown-item">Painting</a>
        </div>
      </router-link>
      | -->
      <div
        class="dropdown dropdown-toggle"
        id="navbarShopDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Shop
      </div>

      <div class="dropdown-menu" aria-labelledby="navbarShopDropdown">
        <router-link class="dropdown-item" to="/shop/groceries"
          >Groceries</router-link
        >
        <router-link class="dropdown-item" to="/shop/frozen-food"
          >Frozen food</router-link
        >
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
// import Suppliers from "./views/Suppliers.vue";
// import Warehouse from "./views/Warehouse.vue";
export default {
  name: "App",
  // components: {
  //   Suppliers,
  //   Warehouse,
  // },
  // data() {
  //   return {
  //     currentComponent: "Suppliers",
  //   };
  // },
  //   methods:{
  //      goToPainting () {
  //       this.$router.push('warehouse/painting' })
  //     },
  //     goToTools () {
  //       this.$router.push({ name: 'Tools' })
  // }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.dropdown-item {
  font-size: 0.8rem;
  font-weight: 400;
  padding-left: 4px;
}
.dropdown {
  font-weight: 700;
}
// .dropdown-item:focus {
//   color: #42b983;
// }
</style>
