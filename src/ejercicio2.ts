class CuentaBancaria{
    numeroCuenta:number;
    titular:string;
    saldo:number;


    constructor(numeroCuenta: number, titular: string, saldo: number){
        this.numeroCuenta = numeroCuenta
        this.titular = titular
        this.saldo = saldo
    }

    depositar(){
        console.log("Depositando")
    }

    retirar(){
        console.log("Retirando")
    }

    consultar(){
        console.log("Consultando saldo")
    }

}

const cuenta1 = new CuentaBancaria (10456,"Sergio",50.000)
const cuenta2 = new CuentaBancaria (54783, "Juliana", 95.000)
const cuenta3 = new CuentaBancaria (85796, "Dilan", 9.000000)

cuenta1.consultar()
cuenta2.retirar()
cuenta3.depositar()