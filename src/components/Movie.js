import React from "react"

function Movie({title, price}) {

    return (
        <div>
            <h3>{title}</h3>
            <h4>{price}</h4>
        </div>
    )
}

export default Movie;