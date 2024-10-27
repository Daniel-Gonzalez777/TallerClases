class FiguraGeometrica{
    nombre: string

    constructor(nombre: string){
        this.nombre = nombre
    }
}

class Triangulo extends FiguraGeometrica{
    base:number
    altura:number

    constructor(nombre: string, base: number, altura: number){
        super(nombre)
        this.base = base
        this.altura = altura
    }

    area(){
        console.log(`El area del triangulo es ${this.base * this.altura}`)
    }
}

class Circulo extends FiguraGeometrica{
    radio: number

    constructor(nombre: string, radio: number){
        super(nombre)
        this.radio = radio
    }

    area(){
        console.log(`El area del circulo es ${3.1415 * this.radio ** 2}`)
    }
}

class Cuadrado extends FiguraGeometrica{
    lado: number

    constructor(nombre: string, lado: number){
        super(nombre)
        this.lado = lado
    }

    area(){
        console.log(`El area del cuadrado es ${this.lado * this.lado}`)
    }
}


const triangulo = new Triangulo ("triangulo1",24,25)
const circulo = new Circulo ("Circulo1", 45)
const cuadrado = new Cuadrado ("Cuadrado1", 15)

triangulo.area()
cuadrado.area()
circulo.area()
