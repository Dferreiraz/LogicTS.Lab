import { Heroi, Monstro } from './personagens.js';
import { iniciarBatalha } from './motor-batalha.js';

if (typeof document !== 'undefined') {
    const btnBatalhar = document.getElementById('btnBatalhar');
    const logContainer = document.getElementById('logContainer');

    btnBatalhar.addEventListener('click', () => {
        // Cria novas instâncias a cada batalha para resetar status
        const arthur = new Heroi("Arthur");
        const dragao = new Monstro("Dragão Ancião");
        const resultado = iniciarBatalha(arthur, dragao);
        renderizarLogs(resultado);
    });

    function renderizarLogs(status) {
        if (!logContainer) return;

        let html = `<div class="space-y-2 max-h-96 overflow-y-auto p-4 bg-gray-900 rounded-lg border border-gray-700">`;
        
        html += `<h3 class="text-xl font-bold mb-4 text-center ${status.vencedor === 'Arthur' ? 'text-green-400' : 'text-red-400'}">
                    Vencedor: ${status.vencedor} em ${status.turnos} turnos!
                 </h3>`;

        status.logs.forEach((log) => {
            const corTexto = log.tipo === 'critico' ? 'text-yellow-400 font-bold' : 
                           log.tipo === 'erro' ? 'text-gray-500 italic' : 'text-gray-300';
            
            html += `<p class="${corTexto} text-sm border-l-2 pl-3 py-1 ${log.tipo === 'critico' ? 'border-yellow-500' : 'border-gray-600'}">
                        [Turno ${log.turno}] ${log.mensagem}
                     </p>`;
        });

        html += `</div>`;
        logContainer.innerHTML = html;
    }
}