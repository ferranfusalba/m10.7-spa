<template>
  <div>
    <h1>Botiga des de Component</h1>
      <div>
    <br />
    <div class="d-flex justify-content-center">
      <div @click="selectedComponent = 'One'" class="p-2 m-2 btn btn-primary">
        Alimentació
      </div>
      <div @click="selectedComponent = 'Two'" class="p-2 m-2 btn btn-primary">
        Congelats
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
    </div>
  </div>
  </div>
</template>

<script>
import One from "./AlimentacioC.vue";
import Two from "./CongelatsC.vue";

export default {
  components: { One, Two },

  data() {
    return {
      selectedComponent: "One",
    };
  },
};
</script>