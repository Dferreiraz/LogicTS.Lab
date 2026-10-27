export interface PalavraFrequente {
    palavra: string,
    quantidade: number
}

export interface ResultadoAnalise {
    totalpalavras: number,
    top5: PalavraFrequente[]
}