<template>
  <v-app>
    <v-main>
      <Controls class="controls" />
      <div class="results">{{ pascals }} Pa</div>
      <div class="results">{{ workDone }} Joules</div>
      <PvDiagram class="pv" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Controls from "@/components/Controls.vue";
import PvDiagram from "@/components/PvDiagram.vue";
import { Adiabatic } from "@/model/thermodynamics";

export default Vue.extend({
  name: "App",

  components: {
    Controls,
    PvDiagram,
  },
  computed: {
    pascals() {
      return this.$store.getters.bottle.pressure.toExponential(2);
    },
    workDone() {
      const expansion = new Adiabatic();
      const piston = this.$store.getters.piston;
      const startPressure = this.$store.getters.bottle.pressure;

      return expansion.workDone(
        startPressure,
        piston.tdcVolume(),
        piston.bdcVolume()
      );
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
.results {
  width: 75%;
  float: left;
}
.pv {
  width: 75%;
  float: left;
}
</style>
