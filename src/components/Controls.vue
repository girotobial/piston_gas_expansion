<template>
  <v-card>
    <v-card-title> Variables </v-card-title>
    <v-card-text>
      <v-row class="mb-4">
        <v-col class="text-left">
          <v-select
            v-model="$store.state.pistonShape"
            label="Piston Shape"
            :items="pistonShapeItems"
            filled
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-slider
            v-model="$store.state.bottle.pressure"
            min="0"
            max="250"
            label="Bottle Pressure (PSI)"
            thumb-label
            :color="bottlePressureColor"
            track-color="grey"
          >
            <template v-slot:append>
              <v-text-field
                v-model="$store.state.bottle.pressure"
                type="number"
                class="mt-0 pt-0"
                style="width: 60px"
              ></v-text-field>
            </template>
          </v-slider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-slider
            v-model="$store.state.bottle.capacity"
            min="0"
            max="2000"
            label="Resevoir Capacity (mL)"
            thumb-label
            track-color="grey"
          >
            <template v-slot:append>
              <v-text-field
                v-model="$store.state.bottle.capacity"
                type="number"
                class="mt-0 pt-0"
                style="width: 60px"
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

@Component
export default class Controls extends Vue {
  pistonShapeItems = ["Circular", "Square"];

  get bottlePressureColor(): string {
    const bottlePressure = this.$store.state.bottle.pressure;
    if (bottlePressure < 60) return "green";
    if (bottlePressure < 150) return "orange";
    return "red";
  }
}
</script>
