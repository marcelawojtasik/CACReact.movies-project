import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import { LandingPage } from "./pages/LandingPage"
import { DetallePeliculas } from "./pages/DetallePeliculas"

export const App = () => {
  
  return (
    <BrowserRouter>
    <header>
      <Link to = "/">
      <h1 className="title"> Peliculas</h1>
      </Link>
    </header>

    <Routes>
      <Route path = "/" element = {<LandingPage/>} />      
      <Route path = "/pelicula/:peliculaId" element = {<DetallePeliculas/>} />
    </Routes>

    </BrowserRouter>
  )
}

//maneja rutas