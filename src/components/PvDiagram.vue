<template>
  <v-card elevation="3" class="ma-3 blue">
    <Plotly :data="trace" :layout="layout" :responsive="true" class="chart" />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Plotly } from "vue-plotly";

import { volume, pressure, atmosphericPressurePa } from "@/model/conversion";
import { PistonBore } from "@/model/mechanics";
import { Expansion } from "@/model/thermodynamics";
import { range } from "@/utils";

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
        fill: "tozeroy",
        type: "line",
        marker: {
          color: "white",
          line: {
            color: "white",
          },
        },
      },
    ];
  }

  //eslint-disable-next-line
  get layout() {
    return {
      title: "Pressure-Volume Diagram",
      autosize: true,
      plot_bgcolor: "rgba(0, 0, 0, 0)",
      paper_bgcolor: "rgba(0, 0, 0, 0)",
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

    const step = (max_vol - min_vol) / 1000;

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
    const startPressure = this.bottle.pressure + atmosphericPressurePa;
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

<style lang="sass" scoped>
.chart
  height: 100%
  width: 100%
</style>
