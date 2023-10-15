<script setup lang="ts">
import { onMounted } from 'vue'
import CharacterCard from '@/components/CharacterCard.vue'
import Pagination from '@/components/Pagination.vue'
import { useCharacterStore } from '@/stores'
import { changePage } from '@/utils/changePage'
import { resetSearch } from '@/utils/resetSearch'
import router from '@/router'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const characterStore = useCharacterStore()

const onInput = () => {
  router.replace(`/`)
  characterStore.getByPageAndName()
}

onMounted(async () => {
  await characterStore.getByPageAndName(props.id)
})

console.log(props)
</script>

<template>
  <main>
    <div class="mx-auto mb-5 flex w-fit gap-3">
      <input
        class="rounded-xl bg-cyan-200 px-3 py-3 text-center"
        v-model="characterStore.searchName"
        @input="onInput"
      />
      <button class="rounded-xl bg-neutral-700 px-6 text-white" @click="resetSearch">Reset</button>
    </div>

    <div class="container">
      <div v-if="characterStore.characters">
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
    </div>
  </main>
</template>
