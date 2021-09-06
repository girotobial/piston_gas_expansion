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
import { Model } from "@/model";
import { range } from "@/utils";

const PvDiagramComponents = Vue.extend({
  props: {
    pistonBore: PistonBore,
    expansion: Object,
    bottle: Object,
    cutOffPoint: Number,
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
      font: {
        color: "#f7f7f8",
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

  get model(): Model {
    return new Model(
      this.pistonBore,
      this.expansion,
      this.bottle,
      this.cutOffPoint
    );
  }

  get volumes(): Array<number> {
    const travelRange = range(0, 1, 1 / 1000);

    let volumes = [];
    for (let travel of travelRange) {
      volumes.push(this.model.volume(travel));
    }
    return volumes;
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
    const travelRange = range(0, 1, 1 / 1000);

    let pressures = [];
    for (let travel of travelRange) {
      pressures.push(this.model.pressure(travel));
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
