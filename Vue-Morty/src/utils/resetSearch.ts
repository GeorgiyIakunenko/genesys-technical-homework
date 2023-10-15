import { useCharacterStore } from '@/stores'
import router from '@/router'

export const resetSearch = async () => {
  useCharacterStore().searchName = ''
  await useCharacterStore().getByPageAndName()
  await router.push('/')
}
