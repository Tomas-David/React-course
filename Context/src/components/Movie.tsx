import { useContext } from "react"
import { MovieContext } from "./MovieContext"

export const Movie = () =>{
    const {movies, DeleteMovieHandler}  = useContext(MovieContext)
    return<div>
        {movies.map((oneMovie)=>{
            return <div key={oneMovie.id}>
                <p>{oneMovie.name}</p>
                <button onClick={() => {DeleteMovieHandler(oneMovie.id)}} >Delete</button>
            </div>
        })}
    </div>
} 