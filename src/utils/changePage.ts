import router from '@/router'
import { nextTick } from 'vue'
import { useCharacterStore } from '@/stores'
export const changePage = async (page: number = 1) => {
  await useCharacterStore().getByPageAndName(page)
  await router.push('/page/' + page)
  useCharacterStore().currentPage = page
  await nextTick(() => {
    scroll(0, 0)
  })
}
