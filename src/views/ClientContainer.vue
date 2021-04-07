<template>
  <div>
    <h1>This is the clients page</h1>
    <div class="client-container mx-auto">
      <div class="client" v-for="client in clients" :key="client.id">
        <div class="client-name">{{ client.name }}</div>
        <router-link
          :to="{
            name: 'Client',
            params: { name: client.name, details: client.details },
          }"
          class="router-link"
        >
          <button type="button" class="btn btn-dark">Show details</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ClientContainer",

  computed: {
    ...mapState({
      clients: (state) => state.clients,
    }),
  },
};
</script>

<style lang="scss" scoped>
.client-container {
  padding: 10px 0;

  width: 60%;

  justify-content: center;
  align-items: center;
}
.btn {
  font-size: 0.6rem;
}
.client {
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1rem;
}
.client-name {
  grid-column-start: 1;
  grid-column-end: 6;
}
// .client-btn {
//   grid-column-start: 5;
//   grid-column-end: 7;
// }
</style>
