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
      const res: CharactersApiResponse = await getCharactersByPageAndName(page, searchName.value)
      if (res.success) {
        characters.value = res.data.results
        setInfo(res.data.info)
        currentPage.value = page
        console.log(info)
        return true
      }

      if (res.data.request.status === 404) {
        characters.value = []
      }

      return false
    } catch (error) {
      return false
    }
  }

  const getById = async (id: number) => {
    try {
      const res: CharacterApiResponse = await getCharacterById(id)
      if (res.success) {
        currentCharacter.value = res.data
        return true
      }
      return false
    } catch (error) {
      return false
    }
  }

  return {
    characters,
    currentPage,
    info,
    currentCharacter,
    searchName,
    getById,
    getByPageAndName
  }
})
