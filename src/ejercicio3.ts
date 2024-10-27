class Vehiculo {
    precio:number
    modelo:number
    marca:string

    constructor(precio: number, modelo: number, marca: string){
        this.precio = precio
        this.modelo = modelo
        this.marca = marca
    }
}


class Coche extends Vehiculo {

    constructor(precio: number, modelo: number, marca: string,){
        super(precio,modelo,marca)
        
    }

    averiguar(){
        console.log(`El precio del vehiculo que desea es ${this.precio}`)
    }
}

class Barco extends Vehiculo{
    constructor(precio: number, modelo: number, marca: string,){
        super(precio,modelo,marca)
        
    }

    preguntar(){
        console.log(`El barco que desea lo tenemos en estas marca= ${this.marca}`)
    }
}

class Avion extends Vehiculo {
    constructor(precio: number, modelo: number, marca: string,){
        super(precio,modelo,marca)

    }
        
        viaja(){
            console.log(`El avion el el que usted va a viajar es del el modelo ${this.modelo}`)
        }
    }

const coche = new Coche(85000000,2024, "Mercedes")
const barco = new Barco(400000000,2022,"Azimut")
const avion = new Avion(900000000, 2025, "Boeing")

coche.averiguar()
barco.preguntar()
avion.viaja()

