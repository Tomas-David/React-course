import './App.css'
import data from './data'
import { MovieBox } from './components/MovieBox'
import { useState } from 'react'
import { MovieContext } from './components/MovieContext'
function App() {
  
  const [movies, setMovies] = useState(data)

  const DeleteMovieHandler = (movieId) =>{
    const newMovieList = movies.filter((oneMovie) =>{
      return oneMovie.id !== movieId
    })
    setMovies(newMovieList)
  }

  return <MovieContext.Provider value={{movies, DeleteMovieHandler}}>
     <MovieBox />
    </MovieContext.Provider>
  
}

export default App
