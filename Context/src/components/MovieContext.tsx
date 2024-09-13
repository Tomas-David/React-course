import React from "react";


export const MovieContext = React.createContext({movies: [], DeleteMovieHandler: (movieId: any) => {}});