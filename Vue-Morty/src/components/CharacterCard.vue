<script setup lang="ts">
import type { Character } from '@/types/character'
import router from '@/router'

const props = defineProps<{
  character: Character
}>()
</script>

<template>
  <div class="text-center text-white">
    <img class="h-72 rounded-t-xl" :src="character.image" :alt="character.name" />
    <div class="rounded-b-xl bg-[#3c3e44] py-2">
      <h2
        @click="router.replace(`/character/${character.id}/profile`)"
        class="cursor-pointer text-xl font-bold transition-all hover:text-amber-100"
      >
        {{ character.name }}
      </h2>
      <div class="flex justify-center gap-2 font-light">
        <p>{{ character.status }}</p>
        -
        <p>{{ character.species }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
