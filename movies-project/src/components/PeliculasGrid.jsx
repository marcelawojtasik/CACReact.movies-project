import {PeliculasCard} from "./PeliculasCard"
import {get} from "../utils/conexionAPI"
import { useState, useEffect } from "react"

import "../assets/css/PeliculasGrid.css"

export const PeliculasGrid = () => {

const [peliculas, setPeliculas] = useState([])

useEffect (() => {

    get("/discover/movie").then((data) => {
        //console.log(data.results);
        setPeliculas(data.results)
    })
}, [])
   
    return (
        //map: para recorrer pelis. Recorre array y crea copia sin modificar original

        <ul className="peliculasGrid">
            {peliculas.map((pelicula)=> (
            <PeliculasCard key = {pelicula.id} pelicula={pelicula}/>
        ))}                
        </ul>
    )
}
//key mantiene registro de los datos q ya cambiaron, lo necesito cada vez q uso un map, le da identidad a los elementos de la lista para registrar difs en DOM virtual y DOM y saber cual modificar