<template>
  <v-app>
    <v-main>
      <Controls class="controls" />
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Controls from "@/components/Controls.vue";

export default Vue.extend({
  name: "App",

  components: {
    HelloWorld,
    Controls,
  },
});
</script>

<style scoped>
.controls {
  height: 100%;
}
</style>
