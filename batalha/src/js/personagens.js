import { Combatente } from './combatente.js';

export class Heroi extends Combatente {
    constructor(nome) {
        super(nome, 100, 25, 10);
    }
}

export class Monstro extends Combatente {
    constructor(nome) {
        super(nome, 80, 30, 5);
    }
}