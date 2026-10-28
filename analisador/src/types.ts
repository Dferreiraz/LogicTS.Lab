export interface PalavraFrequente {
    palavra: string;
    quantidade: number;
}

export interface ResultadoAnalise {
    totalPalavras: number;
    top5: PalavraFrequente[];
}