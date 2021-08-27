import Vue from "vue";
import Vuex from "vuex";

import { pressurePsiToPascal, millimetreToMetre } from "@/model/conversion";
import {
  CircularCrossSection,
  CrossSection,
  SquareCrossSection,
} from "@/model/geometry";
import { PistonBore } from "@/model/mechanics";

import { Adiabatic, Isobaric, Expansion } from "@/model/thermodynamics";

import { Bottle } from "@/interfaces";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bottle: {
      pressure: 120,
      capacity: 2000,
    },
    expansionMethod: "Adiabatic",
    pistonShape: "Circular",
    boreWidth: 16,
    tdcLength: 4,
    strokeLength: 10,
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    bottle: (state): Bottle => {
      return {
        pressure: pressurePsiToPascal(state.bottle.pressure),
        capacity: state.bottle.capacity * 1e-6,
      };
    },
    boreWidth: (state) => {
      return millimetreToMetre(state.boreWidth);
    },
    tdcLength: (state) => {
      return millimetreToMetre(state.tdcLength);
    },
    strokeLength: (state) => {
      return millimetreToMetre(state.strokeLength);
    },
    piston: (state, getters) => {
      const boreWidth = getters.boreWidth;
      const selectedShape = state.pistonShape.toLowerCase();

      let crossSection: CrossSection = new CircularCrossSection(boreWidth);

      if (selectedShape === "square") {
        crossSection = new SquareCrossSection(boreWidth);
      }

      const tdcLength = getters.tdcLength;
      const strokeLength = getters.strokeLength;

      return new PistonBore(crossSection, tdcLength, strokeLength);
    },
    expansionMethod: (state): Expansion => {
      switch (state.expansionMethod.toLowerCase()) {
        default: {
          return new Adiabatic();
        }
        case "isobaric": {
          return new Isobaric();
        }
      }
    },
  },
});
