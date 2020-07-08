import React, { useState, createContext } from "react"

export const MovieContext = createContext();

export function MovieProvider(props) {
    const [movies, setMovies] = useState([
        {
            title: "Harry Potter",
            price: "$10",
            id: 23124
        },
        {
            title: "Game of Thrones",
            price: "$10",
            id: 2566124
        },
        {
            title: "Inception",
            price: "$10",
            id: 23524
        }
    ])

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}