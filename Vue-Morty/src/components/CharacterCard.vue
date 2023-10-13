<script setup lang="ts">
import type { Character } from '@/types/character'
import router from '@/router'

const props = defineProps<{
  character: Character
}>()
</script>

<template>
  <div class="flex w-full flex-col text-center text-white">
    <img class="rounded-t-xl md:h-72" :src="character.image" :alt="character.name" />
    <div class="flex h-full flex-grow flex-col rounded-b-xl bg-[#3c3e44] px-0.5 py-2">
      <h2
        @click="router.replace(`/character/${character.id}/profile`)"
        class="flex-grow cursor-pointer text-lg font-bold transition-all hover:text-amber-100 md:text-xl"
      >
        {{ character.name }}
      </h2>
      <div class="flex justify-center gap-2 text-xs font-light md:text-base">
        <p>{{ character.status }}</p>
        -
        <p>{{ character.species }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
