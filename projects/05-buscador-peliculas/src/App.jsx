import { useState, useEffect, useCallback, useRef } from "react"
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import debounce from 'just-debounce-it'
import './App.css'

function useSearch() {
  const [search, updateSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);
  
  useEffect(() => {
    if(isFirstInput.current) {
      isFirstInput.current = search == ''
      return
    }
    if (search === '') {
      setError("The search can't be empty.");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("The search can't be a number.");
      return;
    }
    if (search.startsWith(' ')) {
      setError("The search can't start with an empty space.");
      return;
    }

    if (search.length < 3) {
      setError("The search must have at least 3 characters.");
      return;
    }
    setError(null);
  }, [search]);

  // Log the updateSearch function

  return { search, updateSearch, error };
}



function App() {
  const [sort, setSort] = useState(false)
  
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })
  
  const debouncedGetMovies = useCallback(
    debounce(search => {
      //console.log('search', search)
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

  //const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    /* const inputEl = inputRef.current
    const value = inputEl.value
    console.log(value) */

    /* const fields = new window.FormData(event.target)
    const query = fields.get('query') */

    /* const { query } = Object.fromEntries(
      new window.FormData(event.target)
    ) */
    
    getMovies({search})
  }
  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(event.target.value)
    //getMovies({search: newSearch})
    debouncedGetMovies(newSearch)
  }
  const handleSort = () => {
    setSort(!sort)
  }
  
  return (
    <div className="page">
      <h1>Films searcher</h1>
      <header>
        <form action="" className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name="query" type="text" placeholder='Avengers, Star Wars, The Matrix..' />
          <button type="submit">Search</button>
          <div className="movies-sort">
            <label htmlFor="sortMovies">Sort movies by title.</label>
            <input type="checkbox" onChange={handleSort} name="sortMovies" id="sortMovies" />
          </div>
        </form>
        {error && <p style={{ color: 'red '}}>{ error }</p>}
      </header>

      <main>
        {loading ? 
          <p>Cargando...</p>
          : 
          <Movies movies={ movies }/>
        }
          
      </main>
    </div>
  )
}

export default App
