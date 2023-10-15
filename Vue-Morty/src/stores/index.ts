import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { Character } from '@/types/character'
import { getCharacterById, getCharactersByPageAndName } from '@/services/api/characterService'
import type { CharacterApiResponse, CharactersApiResponse } from '@/types/response'
import type { Info } from '@/types/info'

export const useCharacterStore = defineStore('character', () => {
  const characters = ref<Character[]>([])
  const currentPage = ref<number>(1)
  const currentCharacter = ref<Character>()
  const searchName = ref<string>('')
  const isLoading = ref<boolean>(false)
  const info = reactive<Info>({
    count: 0,
    pages: 0,
    next: '',
    prev: null
  })

  const setInfo = (data: Info) => {
    info.count = data.count
    info.pages = data.pages
    info.next = data.next
    info.prev = data.prev
  }

  const getByPageAndName = async (page: number = 1) => {
    try {
      isLoading.value = true
      const res: CharactersApiResponse = await getCharactersByPageAndName(page, searchName.value)
      if (res.success) {
        characters.value = res.data.results
        setInfo(res.data.info)
        currentPage.value = page
        isLoading.value = false
        return true
      }

      if (res.data.request.status === 404) {
        characters.value = []
      }
    } catch (error) {
      isLoading.value = false
    } finally {
      isLoading.value = false
    }
    return false
  }

  const getById = async (id: number) => {
    try {
      isLoading.value = true
      const res: CharacterApiResponse = await getCharacterById(id)
      if (res.success) {
        currentCharacter.value = res.data
        isLoading.value = false
        return true
      }
    } catch (error) {
      return false
    } finally {
      isLoading.value = false
    }
    return false
  }

  return {
    characters,
    currentPage,
    info,
    isLoading,
    currentCharacter,
    searchName,
    getById,
    getByPageAndName
  }
})
