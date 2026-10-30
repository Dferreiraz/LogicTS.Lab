export class Combatente {
    constructor(nome, vida, ataque, defesa) {
        this._nome = nome;
        this._vida = vida;
        this._ataque = ataque;
        this._defesa = defesa;
    }

    get nome() { return this._nome; }
    get vida() { return this._vida; }
    get estaVivo() { return this._vida > 0; }

    atacar(alvo) {
        const chance = Math.random();
        let tipo = 'normal';
        let multiplicador = 1;

        if (chance < 0.15) {
            tipo = 'critico';
            multiplicador = 2;
        } else if (chance > 0.90) {
            tipo = 'erro';
            multiplicador = 0;
        }

        const danoBruto = (this._ataque * multiplicador) - alvo._defesa;
        const danoFinal = tipo === 'erro' ? 0 : Math.max(1, danoBruto);
        
        alvo.receberDano(danoFinal);
        return { tipo, dano: danoFinal };
    }

    receberDano(valor) {
        this._vida = Math.max(0, this._vida - valor);
    }
}