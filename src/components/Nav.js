import React, {useContext} from "react"
import { MovieContext } from "../context/MovieContext"

function Nav() {
    const [movies, ] = useContext(MovieContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <span className="navbar-brand" href="#">Navbar</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav ml-auto px-5">
                <span className="nav-item" style={{color: "white"}}>List of Movies: {movies.length}</span>
            </div>
        </div>
        </nav>
    )
}

export default Nav;