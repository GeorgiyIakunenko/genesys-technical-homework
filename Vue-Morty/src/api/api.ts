import axios from 'axios'
import type { Character } from '@/types/character'

export type Info = {
  count: number
  pages: number
  next: string
  prev: string | null
}

export type ResponseCharacter = {
  info: Info
  results: Character[]
}

export type Response = {
  success: boolean
  data: ResponseCharacter | any
}

const BASE_URL = 'https://rickandmortyapi.com/api'

export const getCharacters = async (): Promise<Response> => {
  try {
    const res = await axios.get(`${BASE_URL}/character`)
    if (res.status !== 200) {
      return {
        success: false,
        data: res.data
      }
    }

    return {
      success: true,
      data: res.data
    }
  } catch (error) {
    return {
      success: false,
      data: error
    }
  }
}

export const getCharacterById = async (
  id: number
): Promise<{
  success: boolean
  data: Character | any
}> => {
  try {
    const res = await axios.get(`${BASE_URL}/character/${id}`)
    if (res.status !== 200) {
      return {
        success: false,
        data: res.data
      }
    }

    return {
      success: true,
      data: res.data
    }
  } catch (error) {
    return {
      success: false,
      data: error
    }
  }
}
