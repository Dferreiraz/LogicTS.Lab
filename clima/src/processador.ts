import { RegistroClima, EstatisticasClima } from './types.js'

export function calcularEstatisticas(registros: RegistroClima[]): EstatisticasClima {
    if (registros.length === 0) {
        return { mediaTemp: 0, maxTemp: 0, minTemp: 0, totalRegistros: 0 }
    }

    const temperaturas = registros.map(r => r.temperatura)
    
    const soma = temperaturas.reduce((acc, t) => acc + t, 0)
    const max = Math.max(...temperaturas)
    const min = Math.min(...temperaturas)

    return {
        mediaTemp: parseFloat((soma / temperaturas.length).toFixed(1)),
        maxTemp: max,
        minTemp: min,
        totalRegistros: registros.length
    }
}

export function gerarDadosMock(periodo: 'semana' | 'mes'): RegistroClima[] {
    const dias = periodo === 'semana' ? 7 : 30;
    const dados: RegistroClima[] = []
    
    for (let i = 0; i < dias; i++) {
        dados.push({
            dia: periodo === 'semana' 
                ? ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][i] 
                : `Dia ${i + 1}`,
            temperatura: Math.floor(Math.random() * 25) + 10, 
            umidade: Math.floor(Math.random() * 60) + 30      
        })
    }
    
    return dados
}