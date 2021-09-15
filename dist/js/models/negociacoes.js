export class Negociacoes {
    constructor() {
        //private negociacoes: Array<Negociacao> - é a mesma coisa 
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //lista somente para leitura
    //lista(): ReadonlyArray<Negociacao> - é a mesma coisa
    lista() {
        return this.negociacoes;
    }
}
