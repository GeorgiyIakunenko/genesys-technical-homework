<script setup lang="ts">
import { resetSearch } from '@/utils/resetSearch'
import { useCharacterStore } from '@/stores'

import Button from '@/components/Button.vue'
import router from '@/router'

const characterStore = useCharacterStore()

const onInput = () => {
  router.replace(`/`)
  characterStore.getByPageAndName()
}
</script>

<template>
  <div class="mx-auto flex w-fit gap-3">
    <input
      class="rounded-xl bg-neutral-300 px-4 py-2.5 text-center placeholder-neutral-800 shadow-sm focus:placeholder-transparent xs:px-10"
      v-model="characterStore.searchName"
      placeholder="Search by name"
      @input="onInput"
    />
    <Button
      :class="{ 'pointer-events-none opacity-50': !characterStore.searchName }"
      @click="resetSearch"
      >Reset</Button
    >
  </div>
</template>

<style scoped></style>
