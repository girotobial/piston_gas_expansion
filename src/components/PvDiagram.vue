<template>
  <Plotly :data="trace" :layout="layout" :display-mode-bar="false" />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Plotly } from "vue-plotly";

const range = (start: number, end: number, step = 1): Array<number> => {
  let output = [];

  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};

const PvDiagramComponents = Vue.extend({
  components: {
    Plotly,
  },
});

@Component
export default class PvDiagram extends PvDiagramComponents {
  get trace() {
    return [
      {
        x: this.volumes,
        y: this.pressures,
        type: "line",
      },
    ];
  }

  layout = {
    title: "PV Diagram",
  };

  get volumes(): Array<number> {
    const min_vol = this.$store.getters.piston.tdcVolume();
    const max_vol = this.$store.getters.piston.bdcVolume();

    const step = (max_vol - min_vol) / 200;

    return range(min_vol, max_vol, step);
  }
  get pressures(): Array<number> {
    const startPressure = this.$store.getters.bottle.pressure;
    const expansionMethod = this.$store.getters.expansionMethod;
    const startVolume = this.$store.getters.piston.tdcVolume();

    let pressures = [];

    for (let volume of this.volumes) {
      pressures.push(
        expansionMethod.endPressure(startPressure, startVolume, volume)
      );
    }

    return pressures;
  }
}
</script>
