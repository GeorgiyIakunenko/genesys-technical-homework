<script setup lang="ts">
import type { Character } from '@/types/character'

const props = defineProps<{
  character: Character
}>()
</script>

<template>
  <div class="rounded bg-neutral-100 p-4 shadow-xl shadow-neutral-400">
    <div class="flex flex-col gap-7 md:flex-row">
      <img
        :src="character.image"
        :alt="character.name"
        class="h-full rounded border-2 border-cyan-900"
      />
      <div class="character-details ml-4">
        <div class="mb-8 flex flex-col gap-1">
          <h1 class="text-2xl font-bold md:text-4xl">{{ character.name }}</h1>
          <p v-if="character.type" class="mb-1 text-lg text-gray-600">Type: {{ character.type }}</p>
          <p class="mb-1 text-lg text-gray-600">Status: {{ character.status }}</p>
        </div>

        <div class="flex flex-col gap-3 md:text-xl">
          <p>Species: {{ character.species }}</p>
          <p>Gender: {{ character.gender }}</p>
          <p>Origin: {{ character.origin.name }}</p>
          <p>Location: {{ character.location.name }}</p>
          <p>Number of Episodes: {{ character.episode.length }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
