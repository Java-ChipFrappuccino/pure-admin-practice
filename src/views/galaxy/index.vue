<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";

const gridLists = ref([
  { num: 1 },
  { num: 2 },
  { num: 3 },
  { num: 4 },
  { num: 5 },
  { num: 6 },
  { num: 7 },
  { num: 8 },
  { num: 9 }
]);
</script>

<template>
  <draggable
    v-model="gridLists"
    item-key="num"
    animation="300"
    class="grid-container"
    chosen-class="chosen"
  >
    <template #item="{ element }">
      <div class="draggable-item">
        {{ element.num }}
      </div>
    </template>
  </draggable>
</template>

<style>
.grid-container {
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: auto auto auto;
}
.draggable-item {
  padding: 10px;
  background: lightgray;
  border: 1px solid #ccc;
  margin: 5px;
  cursor: grab;
}
.chosen {
  border: solid 2px #3089dc !important;
}
</style>
