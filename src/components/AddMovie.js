import React, { useState, useContext } from "react"
import { MovieContext } from "../context/MovieContext"

function AddMovie() {
    const [movies , setMovies] = useContext(MovieContext)

    const [movie, setMovie] = useState({
        title: "",
        price: "",
        id: ""
    })

    function handleChange(event) {
        const {name, value} = event.target
        setMovie({
            ...movie,
            [name]: value,
            id: Math.floor(Math.random() * 10000000)
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        setMovies([
            ...movies,
            movie
        ])

        setMovie({
            title: "",
            price: "",
            id: ""
        })
    }

    return (
        <div className="container my-5">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} className="form-control" type="text" name="title" value={movie.title} placeholder="Title"/>
                <input onChange={handleChange} className="form-control" type="text" name="price" value={movie.price} placeholder="Price" />
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddMovie