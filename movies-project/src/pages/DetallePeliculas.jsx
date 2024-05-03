import {get} from "../utils/conexionAPI.js"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import "../assets/css/DetallePeliculas.css"

export const DetallePeliculas = () => {

    const [pelicula, setPelicula] = useState(null)
    const {peliculaId} = useParams(); //dato q pasamos en url donde se ejecuta el comp

    useEffect (()=>{ //se ejecuta cada vez q cambia id peli
        get(`/movie/${peliculaId}`).then((data)=> {setPelicula(data)}) 
        //pelicula deja de ser null y tiene la info del json
    }, [peliculaId])   

    if(!pelicula){
        return null;
    }
    const imgUrl = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`

    return(
        <div className="detalle">
            <img src={imgUrl} alt={pelicula.title} className="col" />
            <div className="peliculaDetalle col">
                <p>
                    <p className="seccion">
                        Título: {pelicula.title}
                    </p>
                    <p className="descripcion">
                        Descripción: {pelicula.overview}
                    </p>
                    <p className="info">
                        Género: {pelicula.genres.map((genre)=>genre.name).join (", ")}
                    </p>
                    <p className="info">
                        Fecha de Lanzamiento: {pelicula.release_date}
                    </p>
                    <p className="info">
                        Compañía productora: {pelicula.production_companies.map((company)=>company.name). join(" & ")}
                    </p>

                </p>
            </div>
        </div>
    )

}