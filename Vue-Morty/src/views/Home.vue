<script setup lang="ts">
import { onMounted } from 'vue'
import CharacterCard from '@/components/CharacterCard.vue'
import Pagination from '@/components/Pagination.vue'
import { useCharacterStore } from '@/stores'
import { changePage } from '@/utils/changePage'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const characterStore = useCharacterStore()

onMounted(async () => {
  await characterStore.getByPage(props.id)
})

console.log(props)
</script>

<template>
  <main>
    <div class="container">
      <div v-if="characterStore.characters">
        <div
          class="mx-auto mb-14 grid w-fit grid-cols-1 gap-x-2.5 gap-y-5 xs:grid-cols-2 sm:gap-x-4 sm:gap-y-8 lg:grid-cols-3 xl:grid-cols-4"
        >
          <CharacterCard v-for="character in characterStore.characters" :character="character" />
        </div>
        <Pagination
          @change-page="changePage"
          :total-items="821"
          :current-page="characterStore.currentPage"
        />
      </div>
    </div>
  </main>
</template>
