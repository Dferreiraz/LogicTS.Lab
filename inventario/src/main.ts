import { Item } from './types.js';

function validarTipo(tipo: string): Item['tipo'] | null {
    const tiposValidos: Item['tipo'][] = ['arma', 'pocao', 'escudo'];
    return tiposValidos.includes(tipo as Item['tipo']) ? (tipo as Item['tipo']) : null;
}

function adicionarItem(lista: Item[], novoItem: Item): string {
    const pesoTotal = lista.reduce((acumulador, itemAtual) => {
        return acumulador + itemAtual.peso;
    }, 0);

    if (pesoTotal + novoItem.peso > 20) {
        return "Mochila cheia! Remova itens mais pesados.";
    }

    lista.push(novoItem);
    return "Item adicionado com sucesso!";
}

const minhaMochila: Item[] = [
    { nome: "Espada", tipo: "arma", peso: 5 },
    { nome: "Escudo", tipo: "escudo", peso: 10 }
];

function renderizarInventario(lista: Item[]) {
    const ul = document.getElementById('listaItens') as HTMLUListElement;
    if (!ul) return;

    ul.innerHTML = '';

    lista.forEach(item => {
        const li = document.createElement('li');
        li.className = "flex justify-between items-center bg-gray-700 p-3 rounded";

        let corBadge = "bg-gray-500";
        if (item.tipo === 'arma') corBadge = "bg-red-500";
        if (item.tipo === 'pocao') corBadge = "bg-green-500";
        if (item.tipo === 'escudo') corBadge = "bg-blue-500";

        li.innerHTML = `
            <span>${item.nome}</span>
            <div class="flex gap-2 items-center">
                <span class="${corBadge} text-xs px-2 py-1 rounded uppercase">${item.tipo}</span>
                <span class="text-gray-400 text-sm">${item.peso}kg</span>
            </div>
        `;
        ul.appendChild(li);
    });
}

if (typeof document !== 'undefined') {
    const btn = document.getElementById('btnAdicionar') as HTMLButtonElement;
    const nomeInput = document.getElementById('nomeInput') as HTMLInputElement;
    const tipoSelect = document.getElementById('tipoSelect') as HTMLSelectElement;
    const pesoInput = document.getElementById('pesoInput') as HTMLInputElement;

    btn.addEventListener('click', () => {
        const nome = nomeInput.value.trim();
        const tipo = validarTipo(tipoSelect.value);
        const peso = parseFloat(pesoInput.value);

        if (!nome || !tipo || isNaN(peso)) {
            alert("Preencha todos os campos corretamente!");
            return;
        }

        const novoItem: Item = { nome, tipo, peso };
        const resultado = adicionarItem(minhaMochila, novoItem);

        if (resultado === "Item adicionado com sucesso!") {
            renderizarInventario(minhaMochila);
            nomeInput.value = '';
            pesoInput.value = '';
            tipoSelect.value = 'arma';
        } else {
            alert(resultado);
        }
    });

    renderizarInventario(minhaMochila);
}