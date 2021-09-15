import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
    //lista somente para leitura
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

}
