export type TipoAtaque = 'normal' | 'critico' | 'erro'

export interface LogBatalha {
    turno: number,
    atacante: string,
    defensor: string,
    tipo: TipoAtaque,
    dano: number,
    mensagem: string
}

export interface StatusCombate {
    vencedor: string | null,
    logs: LogBatalha[],
    turnos: number
}