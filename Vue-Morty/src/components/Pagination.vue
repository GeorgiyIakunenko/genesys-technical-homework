<script setup lang="ts">
import { computed, ref } from 'vue'
import { VueAwesomePaginate } from 'vue-awesome-paginate'
import { useCharacterStore } from '@/stores'

const emit = defineEmits<{
  changePage: [page: number]
}>()
const onClickHandler = (page: number) => {
  console.log(page)
  emit('changePage', page)
}

const isShowBreakpointButtons = ref(window.innerWidth > 640)
const maxPagesShown = computed(() => (isShowBreakpointButtons.value ? 5 : 3))

window.onresize = () => {
  isShowBreakpointButtons.value = window.innerWidth > 640
}
</script>

<template>
  <vue-awesome-paginate
    v-if="useCharacterStore().info"
    :total-items="useCharacterStore().info.count"
    :items-per-page="20"
    :max-pages-shown="maxPagesShown"
    :show-ending-buttons="true"
    :showBreakpointButtons="false"
    v-model="useCharacterStore().currentPage"
    :on-click="onClickHandler"
    :hide-prev-next-when-ends="true"
  />
</template>

<style>
ul#componentContainer {
  display: flex;
  margin: 25px auto 0;
}

.pagination-container {
  display: flex;
  width: fit-content;
  margin: 0 auto;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}

.active-page {
  display: block;
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}

.active-page:hover {
  background-color: #2988c8;
}
</style>
