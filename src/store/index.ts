import Vue from "vue";
import Vuex from "vuex";

import { pressurePsiToPascal, millimetreToMetre } from "@/model/conversion";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bottlePressure: 120,
    pistonShape: "Circular",
    boreWidth: 16,
    tdcLength: 4,
    strokeLength: 10,
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    bottleAbsolutePressurePascal: (state) => {
      return pressurePsiToPascal(state.bottlePressure) + 101325;
    },
    boreWidthMetres: (state) => {
      return millimetreToMetre(state.boreWidth);
    },
    tdcLengthMetres: (state) => {
      return millimetreToMetre(state.tdcLength);
    },
    strokeLengthMetres: (state) => {
      return millimetreToMetre(state.strokeLength);
    },
  },
});
