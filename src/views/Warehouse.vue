<template>
  <div class="warehouse">
    <h1>This is the warehouse page</h1>
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import Tools from "./Tools.vue";
import Painting from "./Painting.vue";
import Void from "./Void.vue";
import { mapState } from "vuex";

export default {
  name: "Warehouse",
  components: {
    Tools,
    Painting,
    Void,
  },
  computed: {
    ...mapState({
      currentComponent: (state) => state.currentComponent,
    }),
  },
};
</script>
