import React, { useContext } from "react"
import Movie from "./Movie"
import { MovieContext } from "../context/MovieContext"

function MovieList() {
    const [movies, ] = useContext(MovieContext)
    return (
        <div className="container py-5">
            {movies.map(movie => <Movie title={movie.title} price={movie.price} key={movie.id} />)}
        </div>
    )
}

export default MovieList;