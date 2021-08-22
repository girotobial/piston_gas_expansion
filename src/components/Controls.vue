<template>
  <v-card>
    <v-card-title> Controls </v-card-title>
    <v-card-text>
      <v-row class="mb-4">
        <v-col class="text-left">
          <v-select
            v-model="$store.state.pistonShape"
            label="Piston Shape"
            :items="pistonShapeItems"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-slider
            v-model="$store.state.airPressure"
            min="0"
            max="120"
            label="Bottle Pressure (PSI)"
            thumb-label
            :color="airPressureColor"
            track-color="grey"
          >
            <template v-slot:append>
              <v-text-field
                v-model="$store.state.airPressure"
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

  get airPressureColor(): string {
    const airPressure = this.$store.state.airPressure;
    if (airPressure < 61) return "green";
    if (airPressure < 91) return "orange";
    return "red";
  }
}
</script>
