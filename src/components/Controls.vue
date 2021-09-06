<template>
  <v-card>
    <v-card-title> Variables </v-card-title>
    <v-card-text>
      <v-row class="mb-4">
        <v-col class="text-left">
          <v-select
            v-model="piston.shape"
            label="Piston Shape"
            :items="pistonShapeItems"
            filled
            @input="emitPiston"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-slider
            v-model="piston.strokeLength"
            min="0"
            max="50"
            label="Stroke Length (mm)"
            thumb-label
            track-color="grey"
            @input="emitPiston"
          >
            <template v-slot:append>
              <v-text-field
                v-model="piston.strokeLength"
                type="number"
                class="mt-0 pt-0"
                style="width: 60px"
                @input="emitPiston"
              ></v-text-field>
            </template>
          </v-slider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-slider
            v-model="piston.bumpClearanceLength"
            min="0"
            max="50"
            label="Bump Clearance Length (mm)"
            thumb-label
            track-color="grey"
            @input="emitPiston"
          >
            <template v-slot:append>
              <v-text-field
                v-model="piston.bumpClearanceLength"
                type="number"
                class="mt-0 pt-0"
                style="width: 60px"
                @input="emitPiston"
              ></v-text-field>
            </template>
          </v-slider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-slider
            v-model="piston.boreWidth"
            min="0"
            max="50"
            label="Bore Width (mm)"
            thumb-label
            track-color="grey"
            @input="emitPiston"
          >
            <template v-slot:append>
              <v-text-field
                v-model="piston.boreWidth"
                type="number"
                class="mt-0 pt-0"
                style="width: 60px"
                @input="emitPiston"
              ></v-text-field>
            </template>
          </v-slider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-slider
            v-model="bottle.pressure"
            min="0"
            max="250"
            label="Bottle Pressure (PSI)"
            thumb-label
            :color="bottlePressureColor"
            track-color="grey"
            @input="emitBottle"
          >
            <template v-slot:append>
              <v-text-field
                v-model="bottle.pressure"
                type="number"
                class="mt-0 pt-0"
                style="width: 60px"
                @input="emitBottle"
              ></v-text-field>
            </template>
          </v-slider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-slider
            v-model="bottle.capacity"
            min="0"
            max="2000"
            label="Resevoir Capacity (mL)"
            thumb-label
            track-color="grey"
            @input="emitBottle"
          >
            <template v-slot:append>
              <v-text-field
                v-model="bottle.capacity"
                type="number"
                class="mt-0 pt-0"
                style="width: 60px"
                @input="emitBottle"
              ></v-text-field>
            </template>
          </v-slider>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { Bottle, Piston } from "@/interfaces";

@Component
export default class Controls extends Vue {
  pistonShapeItems = ["Circular", "Square"];

  bottle: Bottle = {
    pressure: 120,
    capacity: 2000,
  };

  piston: Piston = {
    shape: "Circular",
    boreWidth: 16,
    bumpClearanceLength: 4,
    strokeLength: 10,
  };

  expansionMethod = "Adiabatic";

  emitBottle(): void {
    this.$emit("bottle", this.bottle);
  }

  emitPiston(): void {
    this.$emit("piston", this.piston);
  }

  get bottlePressureColor(): string {
    const bottlePressure = this.bottle.pressure;
    if (bottlePressure <= 60) return "green";
    if (bottlePressure <= 150) return "orange";
    return "red";
  }
}
</script>
