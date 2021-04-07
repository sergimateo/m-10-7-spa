<template>
  <div id="app">
    <div id="nav">
      <div><router-link to="/">Home</router-link> |</div>
      <div><router-link to="/clients">Clients</router-link> |</div>
      <div><router-link to="/suppliers">Suppliers</router-link> |</div>
      <div>
        <router-link
          class="dropdown dropdown-toggle"
          id="navbarWarehouseDropdown"
          role="button"
          to="/warehouse"
          data-toggle="dropdown"
        >
          Warehouse

          <div class="dropdown-menu">
            <a @click="setComponent('Tools')" class="dropdown-item">Tools</a>
            <a @click="setComponent('Painting')" class="dropdown-item"
              >Painting</a
            >
          </div>
        </router-link>
        |
      </div>
      <div>
        <a
          class="dropdown dropdown-toggle"
          id="navbarShopDropdown"
          role="button"
          data-toggle="dropdown"
        >
          Shop
        </a>

        <div class="dropdown-menu">
          <router-link class="dropdown-item" to="/shop/groceries"
            >Groceries</router-link
          >
          <router-link class="dropdown-item" to="/shop/frozen-food"
            >Frozen food</router-link
          >
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    setComponent: function (value) {
      this.$store.commit("setCurrentComponent", value);
    },
  },
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
