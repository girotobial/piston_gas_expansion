<template>
  <v-app>
    <v-main>
      <Controls
        class="controls"
        v-on:piston="onPistonUpdate"
        v-on:bottle="onBottleUpdate"
      />
      <v-card class="grey lighten-3 background">
        <PvDiagram
          :pistonBore="pistonBore"
          :expansion="expansion"
          :bottle="bottleSi"
          :height="300"
          :width="200"
          class="pv"
        />
      </v-card>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { Bottle, Piston } from "@/interfaces";

import { length, pressure, volume } from "@/model/conversion";
import { PistonBore } from "@/model/mechanics";
import {
  CrossSection,
  CircularCrossSection,
  SquareCrossSection,
} from "@/model/geometry";

import Controls from "@/components/Controls.vue";
import PvDiagram from "@/components/PvDiagram.vue";
import { Adiabatic } from "@/model/thermodynamics";

const AppProperties = Vue.extend({
  name: "App",
  components: {
    Controls,
    PvDiagram,
  },
});

@Component
export default class App extends AppProperties {
  piston: Piston = {
    shape: "Circular",
    boreWidth: 16,
    tdcLength: 4,
    strokeLength: 10,
  };

  bottle: Bottle = {
    pressure: 120,
    capacity: 2000,
  };

  expansion = new Adiabatic();

  onPistonUpdate(piston: Piston): void {
    this.piston = piston;
  }

  onBottleUpdate(bottle: Bottle): void {
    this.bottle = bottle;
  }

  get pistonSi(): Piston {
    return {
      shape: this.piston.shape,
      boreWidth: length.millimetreToMetre(this.piston.boreWidth),
      tdcLength: length.millimetreToMetre(this.piston.tdcLength),
      strokeLength: length.millimetreToMetre(this.piston.strokeLength),
    };
  }

  get pistonBore(): PistonBore {
    let crossSection: CrossSection = new CircularCrossSection(
      this.pistonSi.boreWidth
    );
    if (this.piston.shape.toLowerCase() === "square") {
      crossSection = new SquareCrossSection(this.pistonSi.boreWidth);
    }

    return new PistonBore(
      crossSection,
      this.pistonSi.tdcLength,
      this.pistonSi.strokeLength
    );
  }

  get bottleSi(): Bottle {
    return {
      pressure: pressure.psiToPascal(this.bottle.pressure),
      capacity: volume.cubicCentimetersToMetersCubed(this.bottle.capacity),
    };
  }

  get pascals(): number {
    return this.bottleSi.pressure;
  }

  get workDone(): number {
    return this.expansion.workDone(
      this.bottleSi.pressure,
      this.pistonBore.tdcVolume(),
      this.pistonBore.bdcVolume()
    );
  }
}
</script>

<style scoped>
.controls {
  height: 100%;
  width: 25%;
  float: left;
}
.pv {
  width: 33vw;
  height: 33vh;
  margin: 10px;
  float: left;
}
.background {
  float: left;
  width: 75%;
  height: 100%;
}
</style>
