export interface RegistroClima {
    dia: string
    temperatura: number
    umidade: number
}

export interface EstatisticasClima {
    mediaTemp: number
    maxTemp: number 
    minTemp: number
    totalRegistros: number
}

export type Periodo = 'semana' | 'mes'