import Vue from "vue";
import Vuex from "vuex";

import { length, pressure } from "@/model/conversion";
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
    piston: {
      boreWidth: 16,
      tdcLength: 4,
      strokeLength: 10,
    },
    expansionMethod: "Adiabatic",
    pistonShape: "Circular",
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    bottle: (state): Bottle => {
      return {
        pressure: pressure.psiToPascal(state.bottle.pressure),
        capacity: state.bottle.capacity * 1e-6,
      };
    },
    boreWidth: (state) => {
      return length.millimetreToMetre(state.piston.boreWidth);
    },
    tdcLength: (state) => {
      return length.millimetreToMetre(state.piston.tdcLength);
    },
    strokeLength: (state) => {
      return length.millimetreToMetre(state.piston.strokeLength);
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
