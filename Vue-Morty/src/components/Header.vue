<script setup lang="ts">
import { resetSearch } from '@/utils/resetSearch'
import router from '@/router'

const goToHomePage = async () => {
  await router.replace('/')
  await resetSearch()
}
</script>

<template>
  <header class="fixed w-full bg-cyan-200 py-2.5 shadow-sm shadow-cyan-500">
    <div class="container">
      <div class="flex items-center justify-between">
        <img
          @click="goToHomePage"
          class="h-14 cursor-pointer"
          src="@/assets/images/Rick&Morty.png"
          alt="rick and morty"
        />
      </div>
    </div>
  </header>
</template>

<style scoped></style>
