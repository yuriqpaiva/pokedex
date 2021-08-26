export function converterPara3Casas(numero: number) {
    if (numero < 10) {
        return `00${numero}`
    } else if (numero < 100 ) {
        return `0${numero}`
    } else {
        return `${numero}`
    }
}

export function converterDe3Casas(numero: string) {
    for (let e of numero) {
        if (e === '0') e.replace('0', '');
    }
    return numero
}