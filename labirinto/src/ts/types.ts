export type Celula = 0 | 1; 
export type MatrizLabirinto = Celula[][];

export interface Posicao {
    x: number;
    y: number;
}

export interface ConfigLabirinto {
    largura: number;
    altura: number;
    densidadeParedes: number; 
}