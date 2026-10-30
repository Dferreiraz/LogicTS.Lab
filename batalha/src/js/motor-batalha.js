import { Heroi, Monstro } from './personagens.js';

export function iniciarBatalha(heroi, monstro) {
    const logs = [];
    let turno = 1;

    // Loop principal: roda enquanto ambos estiverem vivos
    while (heroi.estaVivo && monstro.estaVivo) {
        // --- Turno do Herói ---
        const ataqueHeroi = heroi.atacar(monstro);
        logs.push({
            turno,
            atacante: heroi.nome,
            defensor: monstro.nome,
            tipo: ataqueHeroi.tipo,
            dano: ataqueHeroi.dano,
            mensagem: `${heroi.nome} ataca ${monstro.nome} causando ${ataqueHeroi.dano} de dano (${ataqueHeroi.tipo})!`
        });

        // Verifica se o monstro morreu após o ataque do herói
        if (!monstro.estaVivo) break;

        // --- Turno do Monstro ---
        const ataqueMonstro = monstro.atacar(heroi);
        logs.push({
            turno,
            atacante: monstro.nome,
            defensor: heroi.nome,
            tipo: ataqueMonstro.tipo,
            dano: ataqueMonstro.dano,
            mensagem: `${monstro.nome} contra-ataca ${heroi.nome} causando ${ataqueMonstro.dano} de dano (${ataqueMonstro.tipo})!`
        });

        turno++;
    }

    // Define o vencedor baseado em quem ainda está vivo
    const vencedor = heroi.estaVivo ? heroi.nome : monstro.nome;

    return {
        vencedor,
        logs,
        turnos: turno
    };
}