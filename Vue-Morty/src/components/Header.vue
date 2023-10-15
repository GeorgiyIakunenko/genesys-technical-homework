<script setup lang="ts">
import { changePage } from '@/utils/changePage'
</script>

<template>
  <header class="fixed w-full bg-cyan-200 py-2.5 shadow-sm shadow-cyan-500">
    <div class="container">
      <div class="flex items-center justify-between">
        <img
          @click="changePage(1)"
          class="h-14 cursor-pointer"
          src="@/assets/images/Rick&Morty.png"
          alt="rick and morty"
        />
      </div>
    </div>
  </header>
</template>

<style scoped></style>
