class Pelicula{
    titulo: string
    duracion: number
    director: string


    constructor(titulo:string, duracion:number, director:string){
        this.titulo = titulo
        this.duracion = duracion
        this.director = director
    }
}

class CatalogoPelicula{
    pelicula: Pelicula[] = []

    agregar(pelicula:Pelicula){
        this.pelicula.push(pelicula)
    }

    filtarTitulo(titulo: string){
        return this.pelicula.find(pelicula=>pelicula.titulo===titulo)
    }

    filtrarDirector(director:string){
        return this.pelicula.filter(peliculas=>peliculas.director===director)
    }


}


const catalogo = new CatalogoPelicula()

catalogo.agregar(new Pelicula("Matrix",132,"Lana Wachowki"))
catalogo.agregar(new Pelicula("Parasite", 132, "Bong Joon-ho"))
catalogo.agregar(new Pelicula("Titanic", 195, "James Cameron"))
catalogo.agregar(new Pelicula("El Padrino", 175, "Francis Ford Coppola"))
catalogo.agregar(new Pelicula("Jurassic Park", 127, "Steven Spielberg"))
catalogo.agregar(new Pelicula("Avengers: Endgame", 181, "Joe Russo"))



const peliculaBuscada = catalogo.filtarTitulo("El padrino")
if (peliculaBuscada) {
  console.log(`Película encontrada: Título: ${peliculaBuscada.titulo}, Duración: ${peliculaBuscada.duracion} minutos, Director: ${peliculaBuscada.director}`)
} else {
  console.log("Película no encontrada.")
}



const peliculasDeNolan = catalogo.filtrarDirector("Joe Russo")
console.log("Películas dirigidas por Joe Russo:")
peliculasDeNolan.forEach(pelicula => {
  console.log(`Título: ${pelicula.titulo}, Duración: ${pelicula.duracion} minutos`)
})