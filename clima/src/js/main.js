import { gerarDadosMock, calcularEstatisticas } from './processador.js';
import { criarGraficoSVG } from './grafico.js';

if (typeof document !== 'undefined') {
    const containerGrafico = document.getElementById('containerGrafico');
    const statsContainer = document.getElementById('statsContainer');
    const btnSemana = document.getElementById('btnSemana');
    const btnMes = document.getElementById('btnMes');
    
    function atualizarDashboard(periodo) {
        const dados = gerarDadosMock(periodo);
        const stats = calcularEstatisticas(dados);
        const svg = criarGraficoSVG(dados, 600, 300);
        
        // Atualiza Gráfico
        if (containerGrafico) containerGrafico.innerHTML = svg;
        
        // Atualiza Cards de Estatística
        if (statsContainer) {
            statsContainer.innerHTML = `
                <div class="grid grid-cols-3 gap-4">
                    <div class="bg-gray-700/50 p-4 rounded-lg text-center">
                        <p class="text-xs text-gray-400 uppercase">Média</p>
                        <p class="text-2xl font-bold text-emerald-400">${stats.mediaTemp}°C</p>
                    </div>
                    <div class="bg-gray-700/50 p-4 rounded-lg text-center">
                        <p class="text-xs text-gray-400 uppercase">Máxima</p>
                        <p class="text-2xl font-bold text-orange-400">${stats.maxTemp}°C</p>
                    </div>
                    <div class="bg-gray-700/50 p-4 rounded-lg text-center">
                        <p class="text-xs text-gray-400 uppercase">Mínima</p>
                        <p class="text-2xl font-bold text-blue-400">${stats.minTemp}°C</p>
                    </div>
                </div>
            `;
        }
    }
    
    btnSemana.addEventListener('click', () => atualizarDashboard('semana'));
    btnMes.addEventListener('click', () => atualizarDashboard('mes'));
    
    // Inicialização
    atualizarDashboard('semana');
}