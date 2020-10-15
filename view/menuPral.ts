import { leerTeclado } from '../view/entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Triángulo')
    console.log('2.- Rectángulo')
    console.log('3.- Cuadrado')
    console.log('4.- Círculo')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}