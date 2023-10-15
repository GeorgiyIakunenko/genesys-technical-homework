<script setup lang="ts">
import { onMounted } from 'vue'
import { useCharacterStore } from '@/stores'
import { changePage } from '@/utils/changePage'
import CharacterCard from '@/components/CharacterCard.vue'
import Pagination from '@/components/Pagination.vue'
import Search from '@/components/Search.vue'
import Spinner from '@/components/Spinner.vue'

const props = defineProps({
  id: {
    type: Number
  }
})

const characterStore = useCharacterStore()

onMounted(async () => {
  await characterStore.getByPageAndName(props.id)
})
</script>

<template>
  <main>
    <Search class="mb-12"></Search>
    <div class="container">
      <div v-if="characterStore.characters.length > 0 && !characterStore.isLoading">
        <div
          class="mx-auto mb-14 grid w-fit grid-cols-1 gap-x-2.5 gap-y-5 xs:grid-cols-2 sm:gap-x-4 sm:gap-y-8 lg:grid-cols-3 xl:grid-cols-4"
        >
          <CharacterCard v-for="character in characterStore.characters" :character="character" />
        </div>
        <Pagination
          :number-of-buttons-on-desktop="5"
          :number-of-buttons-on-mobile="3"
          :current-page="characterStore.currentPage"
          :total-pages="characterStore.info.pages"
          :change-page="changePage"
          class="mx-auto w-fit"
        />
      </div>
      <div
        v-else-if="!characterStore.isLoading && characterStore.characters.length === 0"
        class="mt-14 flex flex-col items-center justify-center"
      >
        <img class="mb-3 h-72" src="@/assets/images/noSearchResults.png" alt="no search results" />
        <h2 class="text-2xl font-bold">No search results</h2>
      </div>
      <div
        v-else-if="characterStore.isLoading"
        class="mt-20 flex min-h-full items-center justify-center"
      >
        <Spinner />
      </div>
    </div>
  </main>
</template>
