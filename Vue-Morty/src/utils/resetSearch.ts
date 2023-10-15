import { useCharacterStore } from '@/stores'

export const resetSearch = async () => {
  useCharacterStore().searchName = ''
  await useCharacterStore().getByPageAndName()
}
