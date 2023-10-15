<script setup lang="ts">
import { getCharactersByPage, Response, ResponseCharacter } from '@/api/api'
import { onMounted, ref, watch } from 'vue'
import CharacterCard from '@/components/CharacterCard.vue'
import Pagination from '@/components/Pagination.vue'
import { useRoute } from 'vue-router'
import router from '@/router'

const route = useRoute()
const currentPage = ref<number>(parseInt(route.params.id as string))
const data = ref<ResponseCharacter | null>(null)

const definePage = defineModel<number>()
definePage.value = currentPage.value
watch(
  () => route.params.id,
  async () => {
    currentPage.value = parseInt(route.params.id as string)
    const res: Response = await getCharactersByPage(currentPage.value)
    console.log(res)
    data.value = res.data
  }
)
onMounted(async () => {
  const res: Response = await getCharactersByPage(currentPage.value)
  console.log(res)
  data.value = res.data
})

const changePage = async (page: number) => {
  await router.push('/characters/page/' + page)
  currentPage.value = page
  const res: Response = await getCharactersByPage(page)
  data.value = res.data
}
</script>

<template>
  <main>
    <div class="container">
      <div v-if="data">
        <div
          class="mx-auto grid w-fit grid-cols-1 gap-x-2.5 gap-y-5 xs:grid-cols-2 sm:gap-x-4 sm:gap-y-8 lg:grid-cols-3 xl:grid-cols-4"
        >
          <CharacterCard v-for="character in data.results" :character="character" />
        </div>
        <Pagination
          @change-page="changePage"
          :total-items="data.info.count"
          :current-page="currentPage"
        />
      </div>
    </div>
  </main>
</template>
