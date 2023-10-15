// services/characterService.ts

import { type CharactersApiResponse, type CharacterApiResponse } from '@/types/response'
import { handleResponse } from '@/services/utils/responseHandlingService'
import { handleError } from '@/services/utils/errorHandlingService'
import axiosInstance from '@/services/api/apiConfig'

export const getCharactersByPage = async (page: number = 1): Promise<CharactersApiResponse> => {
  try {
    const res = await axiosInstance.get(`/character/?page=${page}`)
    return handleResponse<CharactersApiResponse>(res)
  } catch (error) {
    return handleError<CharactersApiResponse>(error)
  }
}

export const getCharacterById = async (id: number): Promise<CharacterApiResponse> => {
  try {
    const res = await axiosInstance.get(`/character/${id}`)
    return handleResponse<CharacterApiResponse>(res)
  } catch (error) {
    return handleError<CharacterApiResponse>(error)
  }
}
