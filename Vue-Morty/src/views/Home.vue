<script setup lang="ts">
import { getCharactersByPage } from '@/api/api'
import { onMounted, ref } from 'vue'
import type { Character } from '@/types/character'
import CharacterCard from '@/components/CharacterCard.vue'

const characters = ref<Character[]>([])

onMounted(async () => {
  const res = await getCharactersByPage()
  console.log(res)
  characters.value = res.data.results
})
</script>

<template>
  <main>
    <div class="container">
      <div class="flex flex-wrap justify-center gap-x-4 gap-y-8">
        <CharacterCard v-for="character in characters" :character="character" />
      </div>
    </div>
  </main>
</template>
