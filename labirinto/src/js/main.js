import { gerarLabirinto } from './gerador.js';

if (typeof document !== 'undefined') {
    const btnGerar = document.getElementById('btnGerar');
    const containerLabirinto = document.getElementById('containerLabirinto');
    const inputTamanho = document.getElementById('inputTamanho');
    const inputDensidade = document.getElementById('inputDensidade');
    
    function renderizarLabirinto(matriz) {
        if (!containerLabirinto) return;
        
        containerLabirinto.innerHTML = '';
        
        const altura = matriz.length;
        const largura = matriz[0].length;
        
        // Define grid CSS dinamicamente baseado no tamanho
        containerLabirinto.style.gridTemplateColumns = `repeat(${largura}, 1fr)`;
        containerLabirinto.style.gridTemplateRows = `repeat(${altura}, 1fr)`;
        
        matriz.forEach((linha, y) => {
            linha.forEach((celula, x) => {
                const div = document.createElement('div');
                
                // Classes base + condicionais
                let classes = [
                    'w-full', 'h-full', 'rounded-sm',
                    celula === 1 ? 'bg-gray-700 border border-gray-600' : 'bg-green-900/40 border border-green-800/50'
                ].join(' ');
                
                // Marca início e fim visualmente
                if (x === 0 && y === 0) {
                    classes = classes.replace('bg-green-900/40', 'bg-blue-500');
                }
                if (x === largura - 1 && y === altura - 1) {
                    classes = classes.replace('bg-green-900/40', 'bg-red-500');
                }
                
                div.className = classes;
                div.title = `(${x}, ${y})`; // Tooltip com coordenadas
                containerLabirinto.appendChild(div);
            });
        });
    }
    
    btnGerar.addEventListener('click', () => {
        const tamanho = parseInt(inputTamanho.value) || 15;
        const densidade = parseFloat(inputDensidade.value) || 0.3;
        
        // Validação básica
        const tamanhoValido = Math.max(5, Math.min(30, tamanho));
        const densidadeValida = Math.max(0.1, Math.min(0.7, densidade));
        
        const config = {
            largura: tamanhoValido,
            altura: tamanhoValido,
            densidadeParedes: densidadeValida
        };
        
        const labirinto = gerarLabirinto(config);
        renderizarLabirinto(labirinto);
    });
    
    // Gera um labirinto inicial ao carregar
    const configInicial = { largura: 15, altura: 15, densidadeParedes: 0.3 };
    renderizarLabirinto(gerarLabirinto(configInicial));
}