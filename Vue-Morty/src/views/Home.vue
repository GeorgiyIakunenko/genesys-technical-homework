<script setup lang="ts">
import { getCharacters } from '@/api/api'
import { onMounted } from 'vue'

onMounted(async () => {
  const res = await getCharacters()
  console.log(res)
})
</script>

<template>
  <main>
    <div class="container">
      <h1>Home</h1>
    </div>
  </main>
</template>
