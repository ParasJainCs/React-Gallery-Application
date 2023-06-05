import { useQuery } from '@tanstack/react-query'
import customFetch from './utils'

const clientId = import.meta.env.VITE_API_KEY

export const useFetchPhotos = (searchTerm) => {
  const response = useQuery({
    queryKey: ['pics', searchTerm],
    queryFn: async () => {
      const result = await customFetch.get(
        `/search/photos?client_id=${clientId}&query=${searchTerm}`
      )
      return result.data
    },
  })
  return { response }
}
