import { Link } from "react-router-dom"
import "../assets/css/PeliculasCard.css"

export const PeliculasCard = ({pelicula}) => {
    const imgUrl = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`
    return(
        <li className="peliculasCard">
            <Link to = {`/pelicula/${pelicula.id}`}  style={{ textDecoration: 'none' }}>
                <img className="peliculasImg" src = {imgUrl} alt={pelicula.title} />
                <a className="peliculasCard">{pelicula.title}</a>
            </Link>
        </li>
    )
}

// https://image.tmdb.org/t/p/w300
//aca recibo el Json de pelis y se crea una card x cada una