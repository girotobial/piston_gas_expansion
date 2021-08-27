<template>
  <Plotly :data="trace" :layout="layout" :display-mode-bar="false" />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Plotly } from "vue-plotly";

import { volume, pressure, atmosphericPressurePa } from "@/model/conversion";

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
  //eslint-disable-next-line
  get trace() {
    return [
      {
        x: this.volumesCmCubed,
        y: this.pressures,
        type: "line",
      },
    ];
  }

  layout = {
    title: "PV Diagram",
    xaxis: {
      title: "Cylinder Volume (cm^3)",
    },
    yaxis: {
      title: "Cylinder Pressure (PSI)",
    },
  };

  get volumes(): Array<number> {
    const min_vol = this.$store.getters.piston.tdcVolume();
    const max_vol = this.$store.getters.piston.bdcVolume();

    const step = (max_vol - min_vol) / 200;

    return range(min_vol, max_vol, step);
  }

  get volumesCmCubed(): Array<number> {
    const volumesMetersCubed = this.volumes;
    const cmCubedVolumes: Array<number> = [];

    for (let volumeItem of volumesMetersCubed) {
      cmCubedVolumes.push(volume.metersCubedToCubicCentimeters(volumeItem));
    }

    return cmCubedVolumes;
  }

  get pressures(): Array<number> {
    const startPressure = this.$store.getters.bottle.pressure;
    const expansionMethod = this.$store.getters.expansionMethod;
    const startVolume = this.$store.getters.piston.tdcVolume();

    let pressures = [];

    for (let volume of this.volumes) {
      let pressurePascal =
        expansionMethod.endPressure(startPressure, startVolume, volume) -
        atmosphericPressurePa;
      pressures.push(pressure.pascalToPSI(pressurePascal));
    }

    return pressures;
  }
}
</script>
