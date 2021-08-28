<template>
  <Plotly :data="trace" :layout="layout" :display-mode-bar="false" />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Plotly } from "vue-plotly";

import { volume, pressure, atmosphericPressurePa } from "@/model/conversion";
import { PistonBore } from "@/model/mechanics";
import { Expansion } from "@/model/thermodynamics";

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
  props: {
    pistonBore: PistonBore,
    expansion: Object,
    bottle: Object,
  },

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
        y: this.pressuresPSI,
        type: "line",
      },
    ];
  }

  get layout() {
    return {
      title: "PV Diagram",
      xaxis: {
        title: "Cylinder Volume (cm^3)",
      },
      yaxis: {
        title: "Cylinder Pressure (PSI)",
        range: [this.minYAxis(), Math.max(...this.pressuresPSI)],
      },
    };
  }

  minYAxis(): number {
    let minPressures = Math.min(...this.pressuresPSI);
    if (minPressures < 0) {
      return minPressures;
    } else {
      return 0;
    }
  }

  get volumes(): Array<number> {
    const min_vol = this.pistonBore.tdcVolume();
    const max_vol = this.pistonBore.bdcVolume();

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
    const startPressure = this.bottle.pressure;
    const expansionMethod: Expansion = this.expansion;
    const startVolume = this.pistonBore.tdcVolume();

    let pressures = [];

    for (let volume of this.volumes) {
      pressures.push(
        expansionMethod.endPressure(startPressure, startVolume, volume)
      );
    }

    return pressures;
  }

  get pressuresPSI(): Array<number> {
    let pressures: Array<number> = [];
    for (let pressureItem of this.pressures) {
      let relativePressure = pressureItem - atmosphericPressurePa;
      pressures.push(pressure.pascalToPSI(relativePressure));
    }
    return pressures;
  }
}
</script>
