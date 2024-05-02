const API = "https://api.themoviedb.org/3"

export const get = (path) => {

    return fetch (API+path,{
        headers :{
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTcwZjNmNmFmZmNmOTFhZTkwN2NmOWNmYjUzOGQ0NCIsInN1YiI6IjY2MjNjNjZmZTg5NGE2MDE3ZDNhNjNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FuLKBPcC1_1zbGm7J_OK8QXzs6ZSZjs9CZrzgGh-6aQ", 
            "Content-type":"application/json; charset=utf-8 "
        }
    }) .then((results)=>results.json())
}


//esto va a ir en otro lado, el 2do then
//get ("/movies").then(data)
//setPeliculas(data)


//https://www.themoviedb.org/settings/api



//0570f3f6affcf91ae907cf9cfb538d44