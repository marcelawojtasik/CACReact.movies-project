import { Link } from "react-router-dom"
import "../assets/css/PeliculasCard.css"

export const PeliculasCard = ({pelicula}) => {
    const imgUrl = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`
    return(
        <Link to = {`/pelicula/${pelicula.id}`}>
        <li className="peliculasCard">
            <img className="peliculasImg" src = {imgUrl} alt={pelicula.title} />
            <a>{pelicula.title} </a>
        </li>
        </Link>
    )
}

// https://image.tmdb.org/t/p/w300
//aca recibo el Json de pelis y se crea una card x cada una