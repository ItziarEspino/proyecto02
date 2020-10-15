import {menuPral} from '../view/menuPral'
import { leerTeclado } from '../view/entradaTeclado'
const main = async () => {
    let n: number
    do {
        n = await menuPral()
        switch(n){
            case 1:
                console.log("Cálculo de perímetro y área de un triángulo")
                let baset, lado1, lado2, alturat: number
                baset = parseInt (await leerTeclado("Introduzca la base del triángulo: "))
                lado1 = parseInt (await leerTeclado("Introduzca otro lado: "))
                lado2 = parseInt (await leerTeclado("Introduzca el último lado: "))
                alturat = parseInt (await leerTeclado("Introduzca la altura: "))
                let perimetroT=perimetroTriangulo(baset, lado1, lado2)
                let areaT=areaTriangulo(baset, alturat)
                console.log("El perímetro del triángulo es="+perimetroT)
                console.log("El área del triángulo es="+areaT)
                break
            case 2:
                console.log("Cálculo de perímetro y área de un rectángulo")
                let baser, alturar: number
                baser =  parseInt( await leerTeclado('Introduzca la base del rectángulo: ')) 
                alturar =  parseInt( await leerTeclado('Introduzca su altura: '))
                let perimetroR=perimetroRectangulo(baser, alturar)
                let areaR=areaRectangulo(baser, alturar)
                console.log("El perímetro del rectángulo es="+perimetroR)
                console.log("El área del rectángulo es="+areaR)
                break
            case 3:
                console.log("Cálculo de perímetro y área de un cuadrado")
                let ladoC:number
                ladoC = parseInt(await leerTeclado('Introduzca el lado del cuadrado: '))
                let perimetroCua=perimetroCuadrado(ladoC)
                let areaCua=areaCuadrado(ladoC)
                console.log("El perímetro del cuadrado es= "+perimetroCua)
                console.log("El área del cuadrado es= "+areaCua)
                break
            case 4:
                console.log("Cálculo de perímetro y área de un círculo")
                let radio:number
                radio = parseInt(await leerTeclado('Introduzca el radio del círculo: '))
                let perimetroCi=perimetroCirculo(radio)
                let areaCi=areaCirculo(radio)
                console.log("El perímetro del círculo es= "+perimetroCi)
                console.log("El área del círculo es= "+areaCi)
                break
            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
const perimetroTriangulo = (lado1:number, lado2:number, lado3:number) => {
    let resTr=0;
    resTr=lado1+lado2+lado3
    return resTr
}
const areaTriangulo = (base:number, altura:number) => {
    let resT=0
    resT=(base*altura)/2
    return resT
}

const perimetroRectangulo = (base:number, altura:number) => {
    let resR=0
    resR=(base*2+altura*2)
    return resR
}
const areaRectangulo = (base:number, altura:number) => {
    let resRec=0
    resRec=base*altura
    return resRec
}

const perimetroCuadrado = (lado:number) => {
    let resCu=0
    resCu=lado*4
    return resCu
}
const areaCuadrado = (lado:number) => {
    let resCuad=0
    resCuad=lado*lado
    return resCuad
}

const perimetroCirculo = (radio:number) => {
    let resCi=0
    resCi=2*radio*Math.PI
    return resCi
}
const areaCirculo = (radio:number) => {
    let resCir=0
    resCir=(radio*radio)*Math.PI
    return resCir
}

main()
/*
import { leerTeclado } from '../view/entradaTeclado'
const lee = async () => {
    let n: string
    n = await leerTeclado('nombre: ')
    return n
}
lee()
*/
