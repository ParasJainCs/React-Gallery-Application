import { useQueryClient } from '@tanstack/react-query'
import { useGlobalContext } from './context'
import { useFetchPhotos } from './reactQueryCustomHooks'

const Gallery = () => {
  const { searchTerm } = useGlobalContext()
  const { response } = useFetchPhotos(searchTerm)
  if (response.isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    )
  }
  if (response.isError) {
    return (
      <section className='image-container'>
        <h4>There was an error...</h4>
      </section>
    )
  }
  const results = response.data.results
  if (results.length < 1) {
    return (
      <section className='image-container'>
        <h4>No results found...</h4>
      </section>
    )
  }
  return (
    <section className='image-container'>
      {results.map((item) => {
        const url = item?.urls?.regular
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className='img'
          ></img>
        )
      })}
    </section>
  )
}
export default Gallery
