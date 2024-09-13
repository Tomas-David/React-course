import './App.css'
import categories from './categories'
import allMovies from './data'
import { useState } from 'react'



function App() {
  
const [typeOfMovie, setTypeOfMovie] = useState("komedie")
const selectedTypeOfMovie = allMovies.filter((oneMovie) =>{
    return oneMovie["category"] === typeOfMovie
})
    return(
    <>
        <div>
          {categories.map((oneMovie, index) => {
            return <button key={index} onClick={() => setTypeOfMovie(oneMovie)}>{oneMovie}</button>
          })}
        </div>
        <div>
        {selectedTypeOfMovie.map((oneMovie:any) =>{
            const {id, image, title, age, tags, description, category} = oneMovie
      
            return<div key={id}>
              <img src={image} />
              <h2>{title}</h2>
              <p>{age}</p>
              <p>{tags}</p>
              <p>{description}</p>
              <p>{category}</p>
            </div>
          })}
        </div>
    </> 
    )
}

export default App
