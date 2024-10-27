class Hotel {
    nombre: string
    ubicacion: string

    constructor(nombre: string, ubicacion: string){
        this.nombre = nombre
        this.ubicacion = ubicacion
    }
}

class Habitacion {
    numero:number
    precio:number
    estado:string

    constructor(numero: number, precio: number, estado: string){
        this.numero = numero
        this.precio = precio
        this.estado = estado
    }

    reserva(){
        console.log(`La habitacion numero ${this.numero}, ha sido reservada por ${this.precio}`)
    }

    liberar(){
        if (this.estado === "reservada"){
            this.estado = "disponible"
            console.log(`la habitacion ${this.numero} ha sido reservada por ${this.precio}`)
        }
    }
}