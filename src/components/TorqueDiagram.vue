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

import { Model } from "@/model";

const TorqueDiagramProperties = Vue.extend({
  props: {
    model: Model,
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
        name: "Torque",
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
      {
        name: "Mean Effective Torque",
        x: this.angles,
        y: this.mean_torque,
        type: "line",
        line: {
          dash: "dot",
          width: 2,
        },
        marker: {
          color: "blue",
          line: {
            color: "blue",
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
      uirevision: "true",
      plot_bgcolor: "rgba(0, 0, 0, 0)",
      paper_bgcolor: "rgba(0, 0, 0, 0)",
      xaxis: {
        title: "Crank Angle (°)",
      },
      font: {
        color: "#f7f7f8",
      },
      yaxis: {
        title: "Crankshaft Torque (Nm)",
        range: [this.minYAxis(), Math.max(...this.torques)],
      },
      legend: { orientation: "h" },
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
    const model = this.model;
    for (let angle of this.angles) {
      torques.push(model.torque(angle));
    }
    return torques;
  }

  get mean_torque(): Array<number> {
    const sumTorques: number = this.torques.reduce((a, b) => {
      return a + b;
    });
    const numTorques = this.torques.length;
    const mean_torque = sumTorques / numTorques;
    const mean_torques: Array<number> = [];
    this.angles.forEach(() => {
      mean_torques.push(mean_torque);
    });
    return mean_torques;
  }
}
</script>

<style lang="sass" scoped>
.chart
  height: 100%
  width: 100%
</style>
