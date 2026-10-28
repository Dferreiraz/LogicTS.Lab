import { RegistroClima } from './types.js';

export function criarGraficoSVG(registros: RegistroClima[], largura: number, altura: number): string {
    if (registros.length === 0) return '';

    const padding = { top: 30, right: 20, bottom: 40, left: 40 };
    const graficoLargura = largura - padding.left - padding.right;
    const graficoAltura = altura - padding.top - padding.bottom;
    
    const maxTemp = Math.max(...registros.map(r => r.temperatura));
    const minTemp = Math.min(...registros.map(r => r.temperatura));
    const rangeTemp = maxTemp - minTemp || 1;

    // Determina intervalo de labels baseado na quantidade de dados
    const step = registros.length > 15 ? 5 : registros.length > 7 ? 2 : 1;

    let svg = `<svg width="100%" height="100%" viewBox="0 0 ${largura} ${altura}" preserveAspectRatio="xMidYMid meet" class="w-full h-auto">`;
    
    // Grid horizontal
    for (let i = 0; i <= 4; i++) {
        const y = padding.top + (graficoAltura / 4) * i;
        svg += `<line x1="${padding.left}" y1="${y}" x2="${largura - padding.right}" y2="${y}" stroke="#374151" stroke-width="0.5" stroke-dasharray="4"/>`;
    }

    // Eixos principais
    svg += `<line x1="${padding.left}" y1="${altura - padding.bottom}" x2="${largura - padding.right}" y2="${altura - padding.bottom}" stroke="#6B7280" stroke-width="1"/>`;
    svg += `<line x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${altura - padding.bottom}" stroke="#6B7280" stroke-width="1"/>`;

    // Linha do gráfico e pontos
    let pathD = '';
    registros.forEach((reg, i) => {
        const x = padding.left + (i / Math.max(1, registros.length - 1)) * graficoLargura;
        const y = padding.top + graficoAltura - ((reg.temperatura - minTemp) / rangeTemp) * graficoAltura;
        
        pathD += (i === 0 ? 'M' : 'L') + `${x},${y} `;
        
        // Pontos sempre visíveis
        svg += `<circle cx="${x}" cy="${y}" r="3" fill="#10B981" stroke="#064E3B" stroke-width="1.5"/>`;
        
        // Labels de temperatura apenas nos steps definidos
        if (i % step === 0 || i === registros.length - 1) {
            svg += `<text x="${x}" y="${y - 8}" text-anchor="middle" fill="#9CA3AF" font-size="10">${reg.temperatura}°</text>`;
        }
        
        // Labels de dias apenas nos steps definidos
        if (i % step === 0 || i === registros.length - 1) {
            svg += `<text x="${x}" y="${altura - padding.bottom + 18}" text-anchor="middle" fill="#9CA3AF" font-size="10">${reg.dia}</text>`;
        }
    });

    svg += `<path d="${pathD}" fill="none" stroke="#10B981" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
    svg += `</svg>`;
    
    return svg;
}