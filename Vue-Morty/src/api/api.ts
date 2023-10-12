import axios from 'axios'

type Character = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

type Info = {
  count: number
  pages: number
  next: string
  prev: string | null
}

type ResponseCharacter = {
  info: Info
  results: Character[]
}

type Response = {
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
