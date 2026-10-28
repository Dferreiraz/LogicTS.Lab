import { TipoAtaque } from './types.js';

export class Combatente {
    private _nome: string;
    private _vida: number;
    private _ataque: number;
    private _defesa: number;

    constructor(nome: string, vida: number, ataque: number, defesa: number) {
        this._nome = nome,
        this._vida = vida,
        this._ataque = ataque,
        this._defesa = defesa
    }

    get nome(): string { return this._nome }
    get vida(): number { return this._vida }
    get estaVivo(): boolean { return this._vida > 0 }

    atacar(alvo: Combatente): { tipo: TipoAtaque, dano: number } {
        const chance = Math.random()
        let tipo: TipoAtaque = 'normal'
        let multiplicador = 1

        if (chance < 0.15) {
            tipo = 'critico'
            multiplicador = 2
        } else if (chance > 0.90) {
            tipo = 'erro'
            multiplicador = 0
        }

        const danoBruto = (this._ataque * multiplicador) - alvo._defesa
        const danoFinal = tipo === 'erro' ? 0 : Math.max(1, danoBruto)

        alvo.receberDano(danoFinal)

        return { tipo, dano: danoFinal }
    }

    protected receberDano(valor: number): void {
        this._vida = Math.max(0, this._vida - valor)
    }
}