import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'
//import withResults from '../mocks/with-results.json'
//import withoutResults from '../mocks/no-results.json'

export function useMovies ( { search, sort } ) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  // el error no se usa pero puedes implementarlo
  // si quieres:
  const [, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return
    // Si search es '', no muestra pelis

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      // tanto en el try como en el catch
      setLoading(false)
    }
  }, [])
  //const sortedMovies = sort 
  // ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  // : movies

  const sortedMovies = useMemo(() => {
    if (!movies) return;
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
    }
  , [sort, movies])
   
  
  return { movies: sortedMovies, getMovies, loading }
}