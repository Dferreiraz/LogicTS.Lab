export function analisarTexto(texto) {
    const textoLimpo = texto.toLowerCase().replace(/[.,!?;:"'()]/g, '');
    const palavras = textoLimpo.split(/\s+/).filter(p => p.length > 0);
    const contador = new Map();
    
    for (const palavra of palavras) {
        const atual = contador.get(palavra) || 0;
        contador.set(palavra, atual + 1);
    }
    
    const ranking = Array.from(contador.entries())
        .map(([palavra, quantidade]) => ({ palavra, quantidade }))
        .sort((a, b) => b.quantidade - a.quantidade)
        .slice(0, 5);
    
    return {
        totalPalavras: palavras.length,
        top5: ranking
    };
}

function renderizarResultado(resultado) {
    const container = document.getElementById('resultadoContainer');
    if (!container) return;
    
    if (resultado.top5.length === 0) {
        container.innerHTML = '<p class="text-gray-400 italic">Nenhuma palavra encontrada.</p>';
        return;
    }
    
    let html = `<div class="space-y-3 w-full">`;
    
    resultado.top5.forEach((item, index) => {
        const frequencia = ((item.quantidade / resultado.totalPalavras) * 100).toFixed(1);
        const isPrimeiro = index === 0;
        
        html += `
            <div class="flex items-center gap-4 p-3 rounded-lg ${isPrimeiro ? 'bg-purple-900/30 border border-purple-500/50' : 'bg-gray-700/50'}">
                <span class="font-bold text-lg w-6 ${isPrimeiro ? 'text-yellow-400' : 'text-gray-400'}">#${index + 1}</span>
                <div class="flex-1">
                    <p class="font-medium text-white">${item.palavra}</p>
                    <div class="w-full bg-gray-600 rounded-full h-1.5 mt-1">
                        <div class="bg-purple-500 h-1.5 rounded-full" style="width: ${frequencia}%"></div>
                    </div>
                </div>
                <div class="text-right">
                    <p class="font-bold text-purple-300">${item.quantidade}x</p>
                    <p class="text-xs text-gray-400">${frequencia}%</p>
                </div>
            </div>
        `;
    });
    
    html += `
        <div class="mt-4 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
            Total de palavras analisadas: <span class="text-white font-bold">${resultado.totalPalavras}</span>
        </div>
    </div>`;
    
    container.innerHTML = html;
}

// Inicialização segura
if (typeof document !== 'undefined') {
    const btnAnalisar = document.getElementById('btnAnalisar');
    const textoInput = document.getElementById('textoInput');
    
    btnAnalisar.addEventListener('click', () => {
        const texto = textoInput.value.trim();
        if (!texto) {
            alert('Por favor, insira um texto para analisar.');
            return;
        }
        const resultado = analisarTexto(texto);
        renderizarResultado(resultado);
    });
}