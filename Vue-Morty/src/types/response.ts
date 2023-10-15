import type { Character } from '@/types/character'
import type { Info } from '@/types/info'

export type CharactersResponse = {
  info: Info
  results: Character[]
}

export type CharactersApiResponse = {
  success: boolean
  data: CharactersResponse | any
}

export type CharacterApiResponse = {
  success: boolean
  data: Character | any
}
