export default function converter3casas(numero: number) {
    if (numero < 10) {
        return `00${numero}`
    } else if (numero < 100 ) {
        return `0${numero}`
    } else {
        return `${numero}`
    }
}