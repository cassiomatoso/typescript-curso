export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //lista somente para leitura
    lista() {
        return this.negociacoes;
    }
}
