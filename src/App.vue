<template>
  <v-app>
    <v-main>
      <Controls class="controls" />
      <div style="height: 100%; width: 50%; float: left">{{ pascals }}</div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Controls from "@/components/Controls.vue";
import { pressurePsiToPascal } from "@/model/conversion";

export default Vue.extend({
  name: "App",

  components: {
    Controls,
  },
  computed: {
    pascals() {
      return pressurePsiToPascal(this.$store.state.airPressure);
    },
  },
});
</script>

<style scoped>
.controls {
  height: 100%;
  width: 25%;
  float: left;
}
</style>
