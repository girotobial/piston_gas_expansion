<template>
  <v-card elevation="3" class="ma-3 red">
    <Plotly :data="trace" :layout="layout" :responsive="true" class="chart" />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Plotly } from "vue-plotly";
import { range } from "@/utils";

import { PistonBore } from "@/model/mechanics";
import { Model } from "@/model";

const TorqueDiagramProperties = Vue.extend({
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
export default class TorqueDiagram extends TorqueDiagramProperties {
  get angles(): Array<number> {
    return range(0, 180, 0.1);
  }

  //eslint-disable-next-line
  get trace() {
    return [
      {
        x: this.angles,
        y: this.torques,
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
      title: "Torque vs Crank Angle",
      autosize: true,
      plot_bgcolor: "rgba(0, 0, 0, 0)",
      paper_bgcolor: "rgba(0, 0, 0, 0)",
      xaxis: {
        title: "Crank Angle (°)",
      },
      yaxis: {
        title: "Crankshaft Torque (Nm)",
        range: [this.minYAxis(), Math.max(...this.torques)],
      },
    };
  }

  minYAxis(): number {
    let minTorque = Math.min(...this.torques);
    if (minTorque < 0) {
      return minTorque;
    } else {
      return 0;
    }
  }

  get torques(): Array<number> {
    const torques = [];
    const model = new Model(this.pistonBore, this.expansion, this.bottle);
    for (let angle of this.angles) {
      torques.push(model.torque(angle));
    }
    return torques;
  }
}
</script>

<style lang="sass" scoped>
.chart
  height: 100%
  width: 100%
</style>
