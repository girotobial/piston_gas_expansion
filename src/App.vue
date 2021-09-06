<template>
  <v-app>
    <v-main>
      <Controls
        class="controls"
        v-on:piston="onPistonUpdate"
        v-on:bottle="onBottleUpdate"
      />
      <v-card class="grey lighten-3 background data">
        <PvDiagram :model="this.model" :height="300" :width="200" class="pv" />
        <TorqueDiagram
          :model="this.model"
          :height="300"
          :width="200"
          class="tq"
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
import TorqueDiagram from "@/components/TorqueDiagram.vue";
import { Adiabatic } from "@/model/thermodynamics";
import { Model } from "@/model";

const AppProperties = Vue.extend({
  name: "App",
  components: {
    Controls,
    PvDiagram,
    TorqueDiagram,
  },
});

@Component
export default class App extends AppProperties {
  piston: Piston = {
    cutOffPoint: 25,
    shape: "Circular",
    boreWidth: 16,
    bumpClearanceLength: 4,
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

  get model(): Model {
    return new Model(
      this.pistonBore,
      this.expansion,
      this.bottleSi,
      this.pistonSi.cutOffPoint
    );
  }

  get pistonSi(): Piston {
    return {
      cutOffPoint: this.piston.cutOffPoint / 100,
      shape: this.piston.shape,
      boreWidth: length.millimetreToMetre(this.piston.boreWidth),
      bumpClearanceLength: length.millimetreToMetre(
        this.piston.bumpClearanceLength
      ),
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
      this.pistonSi.bumpClearanceLength,
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
      this.pistonBore.bumpClearanceVolume(),
      this.pistonBore.bdcVolume()
    );
  }
}
</script>

<style lang="sass" scoped>
.data
  height: 100%
  width: 75%
  float: left
.controls
  height: 100%
  width: 25%
  float: left

.pv
  width: 45%
  height: 33vh
  margin: 10px
  float: left

.tq
  width: 45%
  height: 33vh
  margin: 10px
  float: left

.background
  float: left
  width: 75%
  height: 100%
</style>
