class Persona{
    nombre:string
    edad:number
    id:number


constructor(nombre: string, edad: number, id: number){
    this.nombre = nombre
    this.edad = edad
    this.id = id
}

caminar(){
    console.log(`${this.nombre} esta caminando.`)
}

hablar(){
    console.log(`${this.nombre} no deja de hablar.`)
}

comer(){
    console.log(`${this.nombre} está comiendo.`)
}

}

const juan = new Persona ("Juan", 30, 354786)
const camila = new Persona ("Camila", 29, 85475)

juan.caminar()
camila.comer()
juan.hablar()
camila.hablar()
 