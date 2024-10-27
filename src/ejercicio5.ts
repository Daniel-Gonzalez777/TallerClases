class Electrodomestico {
    modelo: number
    constructor(modelo: number){
        this.modelo = modelo
    }
}

class Televisor extends Electrodomestico{
    precio: number
    color: string

    constructor(modelo: number, precio: number, color: string){
        super(modelo)
        this.precio = precio
        this.color = color
    }

    encendido(){
        console.log("El televisor esta encendiendo")
    }
}


class Nevera extends Electrodomestico{
    precio: number
    color: string

    constructor(modelo: number, precio: number, color: string){
        super(modelo)
        this.precio = precio
        this.color = color
    }

    temperatura(){
        console.log("Su nevera esta a 4°C")
    }
}

class Lavadora extends Electrodomestico{
    precio: number
    color: string

    constructor(modelo: number, precio: number, color: string){
        super(modelo)
        this.precio = precio
        this.color = color
    }

    paso(){
        console.log("Su lavadora esta centrifugando")
    }
}

const televisor = new Televisor (2023,5500000,"negro")
const nevera = new Nevera (2021,4000000,"blanco")
const lavadora = new Lavadora (2018, 3500000,"gris")

televisor.encendido()
nevera.temperatura()
lavadora.paso()