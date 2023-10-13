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
      <div
        class="xs:grid-cols-2 mx-auto grid w-fit grid-cols-1 gap-x-2.5 gap-y-5 sm:gap-x-4 sm:gap-y-8 lg:grid-cols-3 xl:grid-cols-4"
      >
        <CharacterCard v-for="character in characters" :character="character" />
      </div>
    </div>
  </main>
</template>
