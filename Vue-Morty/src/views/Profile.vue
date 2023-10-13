<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getCharacterById } from '@/api/api'
import { useRoute } from 'vue-router'
import type { Character } from '@/types/character'

const route = useRoute()
const id: number = parseInt(route.params.id as string)
const character = ref<Character | null>(null)

onMounted(async () => {
  const res = await getCharacterById(id)
  if (res.success) {
    character.value = res.data
  }
})
</script>
<template>
  <main>
    <div class="container">
      <div v-if="character">
        <h1>Profile of {{ character.name }}</h1>
      </div>
    </div>
  </main>
</template>

<style></style>
