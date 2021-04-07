<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/clients">Clients</router-link> |
      <router-link to="/suppliers">Suppliers</router-link> |
      <router-link to="/warehouse">Warehouse </router-link> |
      <a
        class="dropdown dropdown-toggle"
        id="navbarWareHouseDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        >Warehouse
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarWarehouseDropdown">
        <router-link class="dropdown-item" to="/shop/groceries"
          >Groceries</router-link
        >
        <router-link class="dropdown-item" to="/shop/frozenfood"
          >Frozen food</router-link
        >
      </div>
      <a
        class="dropdown dropdown-toggle"
        id="navbarStoreDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Shop
      </a>

      <div class="dropdown-menu" aria-labelledby="navbarStoreDropdown">
        <router-link class="dropdown-item" to="/shop/groceries"
          >Groceries</router-link
        >
        <router-link class="dropdown-item" to="/shop/frozenfood"
          >Frozen food</router-link
        >
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
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
</style>
